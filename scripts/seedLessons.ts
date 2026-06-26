import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { deleteApp, initializeApp } from 'firebase/app'
import {
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore'
import { alamF3Expansion001 } from '../src/data/lessons/alamF3Expansion001.ts'
import { alamF4Expansion001 } from '../src/data/lessons/alamF4Expansion001.ts'
import { ekonomiF5Expansion001 } from '../src/data/lessons/ekonomiF5Expansion001.ts'
import { ideaUtama001 } from '../src/data/lessons/ideaUtama001.ts'
import { ideaSampingan001 } from '../src/data/lessons/ideaSampingan001.ts'
import { isiTersurat001 } from '../src/data/lessons/isiTersurat001.ts'
import { isuF5Expansion001 } from '../src/data/lessons/isuF5Expansion001.ts'
import { kerjayaF3Expansion001 } from '../src/data/lessons/kerjayaF3Expansion001.ts'
import { keselamatanF3Expansion001 } from '../src/data/lessons/keselamatanF3Expansion001.ts'
import { kesihatanF2Expansion001 } from '../src/data/lessons/kesihatanF2Expansion001.ts'
import { komunitiF2Expansion001 } from '../src/data/lessons/komunitiF2Expansion001.ts'
import { launchDepthLessons } from '../src/data/lessons/launchDepthLessons.ts'
import { luncuranImbasan001 } from '../src/data/lessons/luncuranImbasan001.ts'
import { masyarakatF5Expansion001 } from '../src/data/lessons/masyarakatF5Expansion001.ts'
import { mediaF4Expansion001 } from '../src/data/lessons/mediaF4Expansion001.ts'
import { pemahamanF2Starter001 } from '../src/data/lessons/pemahamanF2Starter001.ts'
import { pemahamanF3Starter001 } from '../src/data/lessons/pemahamanF3Starter001.ts'
import { pemahamanF4Starter001 } from '../src/data/lessons/pemahamanF4Starter001.ts'
import { pemahamanF5Starter001 } from '../src/data/lessons/pemahamanF5Starter001.ts'
import { teknologiF2Expansion001 } from '../src/data/lessons/teknologiF2Expansion001.ts'
import { warisanF4Expansion001 } from '../src/data/lessons/warisanF4Expansion001.ts'
import { withDefaultLessonAccess } from '../src/domain/entitlement.ts'

const lessons = [
  ideaUtama001,
  isiTersurat001,
  ideaSampingan001,
  luncuranImbasan001,
  pemahamanF2Starter001,
  komunitiF2Expansion001,
  teknologiF2Expansion001,
  kesihatanF2Expansion001,
  pemahamanF3Starter001,
  alamF3Expansion001,
  keselamatanF3Expansion001,
  kerjayaF3Expansion001,
  pemahamanF4Starter001,
  mediaF4Expansion001,
  warisanF4Expansion001,
  alamF4Expansion001,
  pemahamanF5Starter001,
  isuF5Expansion001,
  ekonomiF5Expansion001,
  masyarakatF5Expansion001,
  ...launchDepthLessons,
].map(withDefaultLessonAccess)

function validateLessonsForSeed() {
  const lessonIds = new Set<string>()
  const sortOrders = new Set<number>()
  const errors: string[] = []

  for (const lesson of lessons) {
    if (lessonIds.has(lesson.id)) {
      errors.push(`Duplicate lesson id: ${lesson.id}`)
    }

    lessonIds.add(lesson.id)

    if (lesson.sortOrder === undefined) {
      errors.push(`Missing sortOrder: ${lesson.id}`)
    } else if (sortOrders.has(lesson.sortOrder)) {
      errors.push(`Duplicate sortOrder ${lesson.sortOrder}: ${lesson.id}`)
    } else {
      sortOrders.add(lesson.sortOrder)
    }

    if (lesson.curriculumReferences.standardIds.length === 0) {
      errors.push(`Missing curriculum standard reference: ${lesson.id}`)
    }

    if (lesson.questions.length === 0) {
      errors.push(`Missing questions: ${lesson.id}`)
    }
  }

  if (errors.length > 0) {
    throw new Error(`Lesson seed validation failed:\n${errors.join('\n')}`)
  }
}

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

async function seedLessons() {
  loadEnvFile(resolve(process.cwd(), '.env'))
  loadEnvFile(resolve(process.cwd(), '.env.local'))

  const dryRun = process.argv.includes('--dry-run')
  const allowSeed = process.env.BMQUEST_ALLOW_FIRESTORE_SEED === 'true'

  console.log('BM Quest lesson seed')
  console.log(`Project: ${process.env.VITE_FIREBASE_PROJECT_ID ?? 'unknown'}`)
  console.log(`Lessons: ${lessons.length}`)

  validateLessonsForSeed()

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
    await Promise.all(
      lessons.map((lesson) =>
        setDoc(doc(db, 'lessons', lesson.id), lesson),
      ),
    )
  } finally {
    await deleteApp(app)
  }

  console.log('Lessons seeded successfully.')
}

seedLessons().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
