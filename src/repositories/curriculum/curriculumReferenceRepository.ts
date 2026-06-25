import {
  collection,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../config/firebase'
import type {
  CurriculumStandardReference,
  TextbookReference,
} from '../../domain/curriculumReference'

export async function getCurriculumStandards() {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const snapshot = await getDocs(collection(db, 'curriculumStandards'))
  return snapshot.docs.map((item) => item.data() as CurriculumStandardReference)
}

export async function saveCurriculumStandard(
  standard: CurriculumStandardReference,
) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(
    doc(db, 'curriculumStandards', standard.standardId),
    standard,
  )
}

export async function getTextbookReferences() {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  const snapshot = await getDocs(collection(db, 'textbookReferences'))
  return snapshot.docs.map((item) => item.data() as TextbookReference)
}

export async function saveTextbookReference(reference: TextbookReference) {
  if (!db) {
    throw new Error('Firestore is not configured yet.')
  }

  await setDoc(
    doc(db, 'textbookReferences', reference.referenceId),
    reference,
  )
}
