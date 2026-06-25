import {
  curriculumStandards,
  textbookReferences,
} from '../../data/curriculumReferences'
import { lessons } from '../../data/lessons'

export function getCurriculumReferenceDiagnostics() {
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

  const lessonsWithoutTextbookReferences = lessons.filter(
    (lesson) => lesson.curriculumReferences.textbookReferenceIds.length === 0,
  ).length

  return {
    standardCount: curriculumStandards.length,
    textbookReferenceCount: textbookReferences.length,
    missingLinkCount:
      missingStandardLinks.length + missingTextbookLinks.length,
    standardMetadataMismatchCount,
    referencesNeedingReview,
    lessonsWithoutTextbookReferences,
  }
}
