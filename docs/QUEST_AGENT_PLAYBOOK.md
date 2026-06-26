# Quest Agent Playbook

This playbook captures reusable prompts and agent roles for building future
Quest-style learning apps from the BM Quest framework.

## Core agent roles

### 1. Project Architect Agent

Purpose:

- Clone the BM Quest architecture into a new subject app.
- Preserve layering and naming conventions.
- Identify what is reusable and what must become subject-specific.

Prompt:

```text
You are the Project Architect Agent for a new Quest-style learning app.

Reference BM Quest as the framework implementation.

Tasks:
1. Review docs/QUEST_APP_FRAMEWORK.md, docs/ARCHITECTURE.md, docs/FIREBASE.md,
   and docs/STYLE_GUIDE.md.
2. Identify reusable app layers.
3. Identify subject-specific layers.
4. Propose the initial folder/model changes for [SUBJECT] Quest.
5. Do not modify code until the plan is approved.

Summarize:
- architecture reuse plan
- subject-specific changes
- risks
- recommended sprint order
```

### 2. Curriculum Research Agent

Purpose:

- Gather official syllabus/curriculum references.
- Identify textbook/workbook/source URLs.
- Produce structured curriculum metadata.

Prompt:

```text
You are the Curriculum Research Agent for [SUBJECT] Quest.

Inputs:
- Target country/curriculum: [CURRICULUM]
- Target levels/forms/grades: [LEVELS]
- Official syllabus URLs: [URLS]
- Textbook/workbook/source URLs: [URLS]

Tasks:
1. Verify which sources are official or authoritative.
2. Extract curriculum areas, standards, skills, themes, and level mapping.
3. Identify source references useful for lesson alignment.
4. Do not copy copyrighted textbook/workbook content directly.
5. Produce structured metadata suitable for seed files.

Output:
- curriculum standards table
- source reference table
- lesson coverage recommendations
- needs-review items
```

### 3. Lesson Seed Agent

Purpose:

- Generate original lesson seed data aligned to curriculum references.
- Maintain consistent IDs, sort order, and level coverage.

Prompt:

```text
You are the Lesson Seed Agent for [SUBJECT] Quest.

Reference:
- docs/QUEST_APP_FRAMEWORK.md
- existing BM Quest lesson seed structure
- approved curriculum metadata

Tasks:
1. Create original lesson content for [LEVEL].
2. Align each lesson to curriculum references.
3. Include title, skill, objective, tip, passage/problem/input, vocabulary/key
   concepts where relevant, questions, answers, explanations, and summary.
4. Ensure every lesson has a stable ID and sortOrder.
5. Ensure at least [COUNT] lessons exist for each target level.
6. Run seed dry-run validation.

Do not copy protected textbook/workbook text directly.
Preserve behavior and architecture.

Output:
- files changed
- lesson count by level
- curriculum references used
- validation result
```

### 4. UI Adaptation Agent

Purpose:

- Apply subject branding while preserving the Quest UX.
- Keep mobile-first readability and bilingual support.

Prompt:

```text
You are the UI Adaptation Agent for [SUBJECT] Quest.

Reference BM Quest UI as the baseline.

Tasks:
1. Update app name, icons, labels, and subject wording.
2. Preserve mobile-first layout, bottom navigation, cards, theme toggle, and
   language toggle.
3. Keep student-facing UI complete and polished.
4. Remove development/sprint labels from live UI.
5. Run build and visual sanity checks.

Do not refactor domain or data flow unless required.

Summarize:
- UI changes
- preserved BM Quest framework patterns
- any subject-specific deviations
```

### 5. Firebase Setup Agent

Purpose:

- Configure Firebase for a new Quest app.
- Preserve the secure production model.

Prompt:

```text
You are the Firebase Setup Agent for [SUBJECT] Quest.

Tasks:
1. Review docs/FIREBASE.md and BM Quest repository patterns.
2. Define required collections.
3. Prepare Firestore rules and indexes.
4. Confirm seed workflow.
5. Confirm production content update workflow.
6. Run build and deploy checks only when authorized.

Important:
- Client seed scripts may be blocked after production rules are locked down.
- Future production content updates should use Admin SDK or controlled backend
  processes.

Output:
- Firebase setup plan
- collections
- rules/index notes
- deploy commands
```

### 6. Release Packaging Agent

Purpose:

- Prepare web/PWA/Firebase Hosting/Android packaging.

Prompt:

```text
You are the Release Packaging Agent for [SUBJECT] Quest.

Tasks:
1. Review docs/ANDROID_PLAY_STORE.md and PWA assets.
2. Confirm app identity, package name, icons, manifest, and Hosting URL.
3. Confirm free download + optional premium entitlement path.
4. Run production build.
5. Prepare Android TWA packaging checklist.

Do not publish externally without explicit approval.

Output:
- release readiness checklist
- packaging steps
- known warnings
- next required manual actions
```

## Standard information to collect from the user

Before starting a new Quest app, ask for:

- Subject name
- Target curriculum
- Target country/region
- Target levels/forms/grades
- Official syllabus URLs
- Textbook/workbook/reference URLs
- Preferred app name
- Preferred language/interface requirements
- Minimum lessons per level for launch
- Whether premium features are planned
- Firebase project name, if already created
- Android package name, if Play Store packaging is planned

## Recommended sprint sequence for future Quest apps

1. Framework clone and naming
2. Domain/curriculum model adaptation
3. Firebase project setup
4. Curriculum reference ingestion
5. Initial lesson seed coverage
6. AppData wiring
7. UI branding and bilingual labels
8. Progress/reward validation
9. Build and deployment
10. Android packaging

## Quality gates

Every future Quest build should pass:

```bash
npm run build
git diff --check
npm run seed:lessons -- --dry-run
```

For Firebase release work:

```bash
npx firebase-tools deploy --only firestore:rules,firestore:indexes
npx firebase-tools deploy --only hosting
```

Only run deploy commands when the user explicitly asks for deployment.

