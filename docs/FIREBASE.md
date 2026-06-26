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
