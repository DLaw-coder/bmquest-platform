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

## Public Launch Configuration

BM Quest includes Firebase project configuration files:

- `.firebaserc` points the default Firebase project to `bm-quest`.
- `firebase.json` configures Firestore rules/indexes and Firebase Hosting.
- `firestore.rules` locks down learner-owned data while keeping public lesson
  and curriculum reference content readable.
- `firestore.indexes.json` is currently empty because the active queries do
  not require custom composite indexes.

Deploy hosting after running a production build:

```bash
npm run build
firebase deploy --only hosting
```

Deploy Firestore rules and indexes:

```bash
firebase deploy --only firestore:rules,firestore:indexes
```

Important: the seed scripts use the Firebase client SDK and are intentionally
blocked by production security rules. Seed curriculum references and lessons
before deploying locked-down public rules, or migrate the seed scripts to the
Firebase Admin SDK for future production content publishing.

## Security Rules Summary

The current Firestore rules allow:

- Users to read/write only their own `accounts/{uid}` document.
- Users to read/create/update only their own learner profile.
- Nickname reservations through `nicknames/{nicknameKey}` using Firestore
  transactions, preventing duplicate public nicknames.
- Users to create/read only progress and achievement records tied to their own
  learner profile.
- Anyone to read `lessons`, `curriculumStandards`, and `textbookReferences`.
- Anyone to read arcade leaderboard scores, while only the owning learner can
  create a score.

The current rules block:

- Public writes to lesson/curriculum content.
- User deletes for learner, progress, achievement, and arcade score records.
- Reads/writes to unknown collections.

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
curriculum standard links, or no questions. Textbook links are tracked in
developer diagnostics but are not required for starter coverage lessons.
