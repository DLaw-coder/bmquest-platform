# Spark Quota Strategy

BM Quest version 1.0 is designed to launch on Firebase's no-cost Spark plan.

## Read optimisations

- Normal home and curriculum loading queries only the active Tingkatan.
- Approximately eight lesson documents are loaded instead of the complete
  Tingkatan 1–5 collection.
- Lesson navigation reuses the lessons already held by AppData and does not
  repeat the Firestore lesson query.
- Returning account documents are updated only when the Google profile name,
  email, or photo has changed.

## Remaining growth costs

Progress attempts are intentionally retained and loaded for learner statistics,
recommendations, replay history, and mastery views. This means established
learners cost more reads than new learners. Achievement documents remain small,
but also contribute to the initial AppData snapshot.

Review the Firebase Usage dashboards during launch. The first optimisation
target after sustained growth should be server-maintained progress summaries,
which requires a controlled backend and is not part of the Spark-only launch.
