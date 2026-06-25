import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { environment, isFirebaseConfigured } from './environment'

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null

if (isFirebaseConfigured()) {
  app = initializeApp(environment.firebase)
  auth = getAuth(app)
  db = getFirestore(app)
}

export { app, auth, db, isFirebaseConfigured }
