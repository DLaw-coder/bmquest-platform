import {
  curriculumStandards,
  textbookReferences,
} from '../../data/curriculumReferences'
import type { Lesson } from '../../domain'

export function getCurriculumReferenceDiagnostics(lessons: Lesson[]) {
  const lessonIds = new Set<string>()
  const duplicateLessonIds = new Set<string>()
  const lessonSortOrders = new Set<number>()
  const duplicateLessonSortOrders = new Set<number>()
  const standardIds = new Set(
    curriculumStandards.map((standard) => standard.standardId),
  )
  const textbookReferenceIds = new Set(
    textbookReferences.map((reference) => reference.referenceId),
  )

  const missingStandardLinks = lessons.flatMap((lesson) =>
    lesson.curriculumReferences.standardIds
      .filter((standardId) => !standardIds.has(standardId))
      .map((standardId) => `${lesson.id}:${standardId}`),
  )

  const missingTextbookLinks = lessons.flatMap((lesson) =>
    lesson.curriculumReferences.textbookReferenceIds
      .filter((referenceId) => !textbookReferenceIds.has(referenceId))
      .map((referenceId) => `${lesson.id}:${referenceId}`),
  )

  const standardMetadataMismatchCount = lessons.filter((lesson) => {
    const linkedStandard = curriculumStandards.find((standard) =>
      lesson.curriculumReferences.standardIds.includes(standard.standardId),
    )

    if (!linkedStandard) {
      return false
    }

    return (
      linkedStandard.form !== lesson.curriculumMeta.form ||
      linkedStandard.learningArea !== lesson.curriculumMeta.learningArea ||
      linkedStandard.contentStandard.code !==
        lesson.curriculumMeta.contentStandard.code ||
      linkedStandard.learningStandard.code !==
        lesson.curriculumMeta.learningStandard.code
    )
  }).length

  const referencesNeedingReview = [
    ...curriculumStandards.filter(
      (standard) => standard.verificationStatus === 'needs-review',
    ),
    ...textbookReferences.filter(
      (reference) => reference.verificationStatus === 'needs-review',
    ),
  ].length

  for (const lesson of lessons) {
    if (lessonIds.has(lesson.id)) {
      duplicateLessonIds.add(lesson.id)
    }

    lessonIds.add(lesson.id)

    if (lesson.sortOrder === undefined) {
      continue
    }

    if (lessonSortOrders.has(lesson.sortOrder)) {
      duplicateLessonSortOrders.add(lesson.sortOrder)
    }

    lessonSortOrders.add(lesson.sortOrder)
  }

  const lessonsWithoutCurriculumStandards = lessons.filter(
    (lesson) => lesson.curriculumReferences.standardIds.length === 0,
  ).length

  const lessonsWithoutTextbookReferences = lessons.filter(
    (lesson) => lesson.curriculumReferences.textbookReferenceIds.length === 0,
  ).length

  const lessonsWithoutSortOrder = lessons.filter(
    (lesson) => lesson.sortOrder === undefined,
  ).length

  const lessonsWithoutQuestions = lessons.filter(
    (lesson) => lesson.questions.length === 0,
  ).length

  return {
    standardCount: curriculumStandards.length,
    textbookReferenceCount: textbookReferences.length,
    duplicateLessonIdCount: duplicateLessonIds.size,
    duplicateLessonSortOrderCount: duplicateLessonSortOrders.size,
    missingLinkCount:
      missingStandardLinks.length + missingTextbookLinks.length,
    standardMetadataMismatchCount,
    referencesNeedingReview,
    lessonsWithoutCurriculumStandards,
    lessonsWithoutTextbookReferences,
    lessonsWithoutSortOrder,
    lessonsWithoutQuestions,
  }
}
