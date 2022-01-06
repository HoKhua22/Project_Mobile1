# Project_Mobile1

config firebase

https://firebase.google.com/docs/web/modular-upgrade

https://console.firebase.google.com/project/story-mobile/authentication/users

https://github.com/mattfrances/FirebaseExpoAuthentication/blob/main/screens/LoginScreen.js

Login, resgister and logout using firebase:

https://www.youtube.com/watch?v=ql4J6SpLXZA

Storing data by using firestore

https://www.youtube.com/watch?v=xgSGOh4LgNo&list=PLYleJ_Xl7BHRVcU1YikP6ciaDptVk35Kx&index=2

Forgot password

https://stackoverflow.com/questions/54515444/how-to-reset-firebase-auth-password-in-react-native

In your root level babel.config.js, Add Reanimated Plugin just like Below;

module.exports = {

  presets: ['module:metro-react-native-babel-preset'],
  
  plugins: ['react-native-reanimated/plugin'],
  
};

then use below command

npx react-native start --reset-cache
