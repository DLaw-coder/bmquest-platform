# Sprint 4.1 - Curriculum Repository & Data Layer

## Goal
Separate lesson loading from the lesson page.

## Added
- Lesson repository
- Dynamic lesson route
- Lesson not found state
- Loading state

## Architecture Impact
Lesson pages no longer import lesson data directly. They request lessons through a repository.

This prepares BM Quest for future Firestore-backed lessons.

## Version
v0.4.1-alpha
