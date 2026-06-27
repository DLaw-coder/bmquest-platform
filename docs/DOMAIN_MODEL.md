# BM Quest KSSM Domain Model

## Core Concepts

### Account

An Account represents the person who signs in.

Examples:
- Parent Google account
- Student Google account

### Learner

A Learner represents the student whose learning progress is tracked.

One account may eventually manage multiple learners.

### School

A School provides context for pacing and expectations.

The curriculum remains KSSM.

### Curriculum

BM Quest KSSM follows KSSM Bahasa Melayu from Form 1 to Form 5.

## Key Design Principle

Account = who signs in.

Learner = who learns.

Curriculum = what is learned.
