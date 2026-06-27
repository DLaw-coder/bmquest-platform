# BM Quest KSSM Architecture

BM Quest KSSM uses a layered React + Firebase architecture.

## Layers

1. Presentation
- Pages
- Components
- UI components
- Lesson components

2. Application
- Context providers
- Hooks
- Services

3. Domain
- Account
- Learner
- Curriculum
- Lesson
- Progress
- Achievement

4. Data
- Repositories
- Local lesson seed data
- Firestore collections

5. Infrastructure
- Firebase Authentication
- Cloud Firestore

## Key Principles

- UI should not talk directly to Firebase.
- Pages should stay focused on presentation.
- Repositories handle data access.
- Services handle business logic.
- Lesson content should be data-driven.
- Malay first, English as a learning aid.
