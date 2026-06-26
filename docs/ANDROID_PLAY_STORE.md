# Android Play Store Packaging

BM Quest should be packaged for Google Play as a Trusted Web Activity (TWA)
around the live Firebase Hosting app:

```text
https://bm-quest.web.app
```

This keeps Google login, Firestore-backed content, and future web deployments
working consistently while still allowing BM Quest to appear as an Android app
in Google Play.

## Recommended Android identity

Use a permanent package name. Package names cannot be reused after publishing.

```text
com.bmquest.app
```

Recommended first Android version:

```text
versionName: 0.1.0
versionCode: 1
```

## Play Store pricing direction

BM Quest should be published as:

```text
Free app download
+ optional premium plan later
```

Do not publish BM Quest as a paid download if the future plan is to start free.
Google Play does not allow an app that has been offered for free to later become
a paid download. Premium access should be handled later through entitlements and
Google Play Billing.

## Current PWA assets

The repo includes:

- `public/manifest.webmanifest`
- `public/service-worker.js`
- `public/icons/bmquest-icon-192.png`
- `public/icons/bmquest-icon-512.png`
- `public/icons/bmquest-maskable-192.png`
- `public/icons/bmquest-maskable-512.png`

Regenerate icons with:

```bash
node scripts/generatePwaIcons.mjs
```

## Build checks

Before creating the Android package:

```bash
npm run build
```

After deploying the web build:

```bash
npx firebase-tools deploy --only hosting --project bm-quest
```

Then confirm the live site:

```bash
curl -I https://bm-quest.web.app
```

## Trusted Web Activity steps

1. Install Android Studio.
2. Install Java/JDK and Android SDK build tools.
3. Use Bubblewrap or Android Studio TWA tooling to generate an Android project
   from:

   ```text
   https://bm-quest.web.app/manifest.webmanifest
   ```

4. Use package name:

   ```text
   com.bmquest.app
   ```

5. Generate a signed Android App Bundle (`.aab`).
6. Obtain the app signing certificate SHA-256 fingerprint from Play Console.
7. Add Digital Asset Links at:

   ```text
   https://bm-quest.web.app/.well-known/assetlinks.json
   ```

8. Redeploy Firebase Hosting after adding the final asset links file.
9. Upload the signed `.aab` to an internal testing track first.

## Asset Links template

Replace `SHA256_FINGERPRINT_FROM_PLAY_CONSOLE` after Play App Signing is
configured:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.bmquest.app",
      "sha256_cert_fingerprints": [
        "SHA256_FINGERPRINT_FROM_PLAY_CONSOLE"
      ]
    }
  }
]
```

Do not publish a placeholder asset links file to production. TWA verification
should only be deployed once the real Play signing fingerprint is known.

## Play Console checklist

Prepare these before review:

- App name: `BM Quest`
- Short description
- Full description
- App icon
- Phone screenshots
- Tablet screenshots if supported
- Feature graphic
- Privacy policy URL
- Support email
- Data Safety form
- Content rating questionnaire
- Target audience declaration
- Internal testing release

Because BM Quest is education software for students, complete the privacy,
student data, and target-audience declarations carefully.
