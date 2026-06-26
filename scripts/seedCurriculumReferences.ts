import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { deleteApp, initializeApp } from 'firebase/app'
import {
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore'
import {
  curriculumStandards,
  textbookReferences,
} from '../src/data/curriculumReferences.ts'

type FirebaseSeedConfig = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const REQUIRED_ENV_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_APP_ID',
] as const

function loadEnvFile(filePath: string) {
  if (!existsSync(filePath)) {
    return
  }

  const file = readFileSync(filePath, 'utf8')

  for (const line of file.split('\n')) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const rawValue = trimmed.slice(separatorIndex + 1).trim()
    const value = rawValue.replace(/^["']|["']$/g, '')

    process.env[key] ??= value
  }
}

function getFirebaseConfig(): FirebaseSeedConfig {
  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !process.env[key])

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing Firebase environment variables: ${missingKeys.join(', ')}`,
    )
  }

  return {
    apiKey: process.env.VITE_FIREBASE_API_KEY ?? '',
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.VITE_FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET ?? '',
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '',
    appId: process.env.VITE_FIREBASE_APP_ID ?? '',
  }
}

async function seedCurriculumReferences() {
  loadEnvFile(resolve(process.cwd(), '.env'))
  loadEnvFile(resolve(process.cwd(), '.env.local'))

  const dryRun = process.argv.includes('--dry-run')
  const allowSeed = process.env.BMQUEST_ALLOW_FIRESTORE_SEED === 'true'

  console.log('BM Quest curriculum reference seed')
  console.log(`Project: ${process.env.VITE_FIREBASE_PROJECT_ID ?? 'unknown'}`)
  console.log(`Standards: ${curriculumStandards.length}`)
  console.log(`Textbook references: ${textbookReferences.length}`)

  if (dryRun) {
    console.log('Dry run only. No Firestore writes were made.')
    return
  }

  if (!allowSeed) {
    throw new Error(
      'Refusing to write to Firestore. Set BMQUEST_ALLOW_FIRESTORE_SEED=true to seed.',
    )
  }

  const app = initializeApp(getFirebaseConfig())
  const db = getFirestore(app)

  try {
    await Promise.all([
      ...curriculumStandards.map((standard) =>
        setDoc(
          doc(db, 'curriculumStandards', standard.standardId),
          standard,
        ),
      ),
      ...textbookReferences.map((reference) =>
        setDoc(
          doc(db, 'textbookReferences', reference.referenceId),
          reference,
        ),
      ),
    ])
  } finally {
    await deleteApp(app)
  }

  console.log('Curriculum references seeded successfully.')
}

seedCurriculumReferences().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
