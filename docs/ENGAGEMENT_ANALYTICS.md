# Privacy-First Engagement Analytics

BM Quest records a small set of first-party engagement events in the Firestore
`engagementEvents` collection. The events are used to understand whether
learners return, complete lessons, improve through practice, and use earned
arcade rewards.

## Data minimisation

Events do not contain:

- names, nicknames, or email addresses
- question answers or lesson passage content
- advertising identifiers
- IP addresses collected by BM Quest application code
- precise device, location, or demographic information

Unsigned visitors and guest learners use a random identifier that lasts only
for the current browser tab session. Signed-in events may contain the Firebase
account ID and learner ID so lesson engagement can be measured across sessions.

## Events

| Event | Meaning |
| --- | --- |
| `app_opened` | A new browser-tab session reached BM Quest |
| `return_visit` | The browser returned on a later calendar day |
| `guest_session_started` | The visitor selected guest access |
| `sign_in_completed` | A visitor completed sign-in during the session |
| `pwa_installed` | A supported browser reported PWA installation |
| `lesson_started` | A lesson or repeat attempt was opened |
| `lesson_completed` | Answers were submitted and scored |
| `arcade_unlocked` | A qualifying lesson attempt earned arcade access |
| `arcade_played` | An earned arcade grant was opened |

PWA install reporting is approximate. Some browsers, including Safari on iOS,
do not provide a reliable installation event.

## Retention

Every event includes an `expiresAt` timestamp 90 days after collection.
On the Spark plan this is retention metadata only; expired events must be
removed manually because Firestore TTL deletion requires billing.

If BM Quest later moves to Blaze, configure a Firestore TTL policy for:

```text
Collection group: engagementEvents
Timestamp field: expiresAt
```

Firestore TTL deletion is asynchronous. The field ensures records are eligible
for deletion after the Firebase project has billing and the TTL policy enabled.

## Security

Client applications cannot read, update, or delete analytics events.
Firestore rules permit create-only access with a strict event-name and field
allowlist. Authenticated identities must match the signed-in Firebase account,
and supplied learner IDs must belong to that account.

Anonymous create access is limited by schema validation but should also be
protected with Firebase App Check before high-volume public promotion.

## Recommended dashboard measures

- weekly active learners completing at least two lessons
- sign-in to first-completion conversion
- lessons completed per active learner
- Day-1, Day-7, and Day-30 return rates
- lesson completion and abandonment rates
- score improvement across attempts
- arcade unlock and play-through rates

Firestore stores the raw events. Use the Firebase console for launch checks and
export aggregated, non-identifying data to a reporting system when a recurring
dashboard is needed.
