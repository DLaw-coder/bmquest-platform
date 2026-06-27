# Firebase App Check

BM Quest KSSM supports Firebase App Check for the web app through reCAPTCHA
Enterprise. App Check must be introduced in monitor-first mode so legitimate
learners are not locked out accidentally.

## 1. Create the reCAPTCHA Enterprise key

1. Open Google Cloud Console for the `BM Quest` project.
2. Enable the reCAPTCHA Enterprise API if it is not already enabled.
3. Create a **Website**, **Score based** key.
4. Add these production domains:
   - `bm-quest.web.app`
   - `bm-quest.firebaseapp.com`
5. Do not add `localhost` to the production key.

## 2. Register the Firebase web app

1. Open Firebase Console → App Check.
2. Select the BM Quest KSSM web app and register it.
3. Choose **reCAPTCHA Enterprise** and enter the site key.
4. Leave Firestore enforcement disabled.

## 3. Configure and deploy the client

Add the public site key to `.env.local`:

```text
VITE_FIREBASE_APPCHECK_SITE_KEY=your_site_key
```

Build and deploy Hosting. The app initializes App Check before Authentication
and Firestore when this variable is present. If it is absent, existing app
behaviour is preserved.

## 4. Verify before enforcement

1. Open the deployed app in a normal browser and sign in.
2. Complete normal learner actions, including loading lessons and saving one
   lesson attempt.
3. In Firebase Console → App Check → Firestore metrics, verify that these
   requests appear as **Verified**.
4. Repeat on mobile Safari/Chrome and the installed PWA.
5. Monitor long enough to cover normal usage. Investigate meaningful
   **Unknown** or **Invalid** traffic before enforcement.
6. Only when nearly all legitimate traffic is verified, enable Firestore
   enforcement. Enforcement can take several minutes to propagate.

## Local development

Use the App Check debug provider for local testing instead of adding localhost
to the production reCAPTCHA key. Register the generated debug token in Firebase
Console and treat it as a secret. Never commit a debug token.

## Spark-plan consideration

reCAPTCHA Enterprise includes a limited number of no-cost assessments each
month. App Check tokens refresh periodically, so monitor assessment usage as
traffic grows. Do not enable enforcement until both verified-request coverage
and expected quota usage have been reviewed.
