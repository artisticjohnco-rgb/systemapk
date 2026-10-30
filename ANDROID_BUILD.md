# Building "The System" as an Android APK

The Android app is the same React app, packaged with Capacitor. It runs as a
static client-only build and talks to your Supabase project directly.

## 1. One-time: apply the database function

In the Supabase dashboard (SQL editor), run the contents of
`supabase/migrations/20261030000000_delete_my_account.sql`. This adds the
`delete_my_account()` function used by the Settings > Delete account button.

## 2. Build the web bundle and sync it into Android

```sh
npm install
npm run android:sync     # builds dist/native and copies it into android/
```

## 3. Build the APK

Option A, Android Studio (easiest):

```sh
npm run android:open    # opens android/ in Android Studio
```
Then: Build > Build Bundle(s) / APK(s) > Build APK(s).
The debug APK is at `android/app/build/outputs/apk/debug/app-debug.apk`.

Option B, command line (needs JDK 17+ and the Android SDK, with ANDROID_HOME set):

```sh
cd android
./gradlew assembleDebug
```

## 4. Release APK / Play Store

Create a signing key and configure it in `android/app/build.gradle`
(`signingConfigs`), then run `./gradlew assembleRelease` or use
Build > Generate Signed Bundle / APK in Android Studio.

## Before publishing

- `capacitor.config.ts`: change `appId` (`app.thesystem.levelup`) to your own
  reverse-domain identifier. It cannot be changed after publishing.
- Google sign-in is hidden in the Android app (it only works in the browser).
  Players use email and password in the app.
- If "Confirm email" is enabled in Supabase Auth, the confirmation link opens in
  the browser, not the app. Either disable email confirmation or add an app
  deep link.
- Re-run `npm run android:sync` after every code change before building the APK.
