# Firebase Setup

BM Quest uses Firebase for:

- Google Authentication
- Cloud Firestore
- Future file storage
- Multi-device sync

## Environment Variables

Create a `.env.local` file from `.env.example`.

Do not commit `.env.local`.

## Current Status

Sprint 2.0A only creates the Firebase foundation. Authentication UI will be added in a later sprint.

## Curriculum Reference Seeding

BM Quest keeps the canonical curriculum reference registry in source control at
`src/data/curriculumReferences.ts`. This registry stores metadata and source
links only. Do not upload textbook PDFs, workbook PDFs, or copied textbook
exercise content into Firestore.

Preview the seed payload:

```bash
npm run seed:curriculum -- --dry-run
```

Seed the registry to Firestore:

```bash
BMQUEST_ALLOW_FIRESTORE_SEED=true npm run seed:curriculum
```

The seed writes:

- `curriculumStandards/{standardId}`
- `textbookReferences/{referenceId}`

Use this only after confirming `.env.local` points to the intended Firebase
project.

## Lesson Content Seeding

Lesson content is loaded from Firestore first, with the checked-in lesson data
as a fallback for local development and empty databases.

Preview the lesson seed payload:

```bash
npm run seed:lessons -- --dry-run
```

Seed lessons to Firestore:

```bash
BMQUEST_ALLOW_FIRESTORE_SEED=true npm run seed:lessons
```

The seed writes:

- `lessons/{lessonId}`

Each lesson includes a `sortOrder` so Firestore-loaded lessons keep the same
navigation order as the local registry.

The lesson seed validates the current lesson registry before writing. It blocks
uploads when a lesson has duplicate IDs, duplicate or missing `sortOrder`, no
curriculum standard links, no textbook links, or no questions.
