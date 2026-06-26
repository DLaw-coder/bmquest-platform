# Quest App Framework

BM Quest is now the reference implementation for a reusable subject-learning app
framework. Future apps can reuse the same product shape, architecture, UI
patterns, Firebase setup, and learning flow while swapping the subject-specific
content and curriculum model.

## Framework purpose

Use this framework when building a student-facing learning app that needs:

- Mobile-first lesson navigation
- Curriculum or syllabus alignment
- Level/form/grade-based content routing
- Data-driven lessons
- Progress tracking
- Badges, rewards, and light gamification
- Bilingual or localized interface support
- Firebase-backed identity and data
- A future Android Play Store packaging path

## Reference implementation

BM Quest provides the baseline for:

- React + TypeScript + Vite frontend
- Firebase Authentication with Google login
- Firestore-backed learner, lesson, progress, achievement, and arcade data
- Centralized app data provider
- Repository/service/domain layering
- Mobile-first app shell
- Bottom navigation
- Light/dark theme toggle
- English/Bahasa Melayu interface toggle
- Learner onboarding
- Unique nickname guardrails
- Tingkatan-based lesson filtering
- KSSM-aligned lesson metadata
- Repeat practice and next-challenge lesson flow
- Reward badges
- Short arcade reward mode
- Public Firebase Hosting deployment
- Android Trusted Web Activity packaging direction

## Reusable layers

### Presentation

Reusable:

- App shell
- Header controls
- Bottom navigation
- Dashboard cards
- Lesson cards
- Progress cards
- Achievement cards
- Settings/profile cards
- Theme and language toggles

Subject-specific:

- Icons and brand wording
- Lesson copy
- Subject-specific page descriptions

### Application

Reusable:

- Auth context
- App data context
- Language context
- Theme persistence
- Recommendation flow
- Session completion flow

Subject-specific:

- Recommendation wording
- Mastery thresholds if the subject requires different scoring logic

### Domain

Reusable:

- Account
- Learner
- Lesson
- Progress
- Achievement
- Entitlement
- Arcade score

Subject-specific:

- Curriculum metadata
- Learning standards
- Lesson strands
- Question types if the subject needs specialized exercises

### Data

Reusable:

- Repository pattern
- Firestore read/write structure
- Local seed fallback
- Seed validation

Subject-specific:

- Curriculum references
- Lesson registry
- Textbook/workbook/source references

### Infrastructure

Reusable:

- Firebase Authentication
- Firestore rules pattern
- Firestore indexes
- Firebase Hosting
- PWA assets
- Android packaging notes

Subject-specific:

- Firebase project identity
- App icons
- Play Store listing
- Subject-specific data collections if separation is required

## Future app examples

Potential apps that can reuse this framework:

- Math Quest
- Science Quest
- Sejarah Quest
- English Quest
- Geography Quest
- Coding Quest
- Quran/Tajwid Quest
- Exam Prep Quest

## New subject build workflow

1. Define the subject and target learners.
2. Collect official syllabus/curriculum references.
3. Collect textbook/workbook/source URLs where legally usable.
4. Define levels, forms, grades, or modules.
5. Define initial lesson coverage per level.
6. Map every lesson to curriculum references.
7. Create seed lesson data.
8. Validate seed coverage and duplicate IDs.
9. Connect lessons to the shared browser/progress/recommendation flow.
10. Customize app name, icons, colors, and labels.
11. Run build and seed dry-runs.
12. Deploy to Firebase Hosting.
13. Package as Android TWA if needed.

## Content rules

- Reference official curriculum or syllabus documents wherever possible.
- Use textbook/workbook references as alignment sources, not as wholesale copied
  content.
- Keep lesson content original unless explicit reuse rights are confirmed.
- Store source metadata clearly.
- Separate student-facing lesson content from developer diagnostics.
- Avoid “Coming Soon” for launch-critical learner paths.

## Design rules

- Student-facing pages should feel complete from first launch.
- Keep language toggles available before login.
- Preserve bilingual interface support.
- Keep lesson content in the learning language where appropriate.
- Keep progress and reward feedback visible and encouraging.
- Avoid developer sprint labels in live UI.

## Architecture rules

- Pages should not read Firestore directly.
- Repositories own data access.
- Services own business logic.
- Domain models should be canonical.
- AppData should be the source for loaded learner-facing app state.
- Firestore content should have local seed fallback where practical.
- Future production content updates should use Admin SDK or controlled backend
  processes when security rules block client writes.

