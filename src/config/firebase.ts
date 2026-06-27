import { initializeApp, type FirebaseApp } from 'firebase/app'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  type AppCheck,
} from 'firebase/app-check'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { environment, isFirebaseConfigured } from './environment'

let app: FirebaseApp | null = null
let appCheck: AppCheck | null = null
let auth: Auth | null = null
let db: Firestore | null = null

if (isFirebaseConfigured()) {
  app = initializeApp(environment.firebase)

  if (environment.appCheckSiteKey) {
    appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(environment.appCheckSiteKey),
      isTokenAutoRefreshEnabled: true,
    })
  }

  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, appCheck, auth, db, isFirebaseConfigured }
