# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
    yarn start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## App dependencies

The app uses [gluestack ui](https://gluestack.io/) library for universal components.

## App structure

The project structure is as follows:

```
/app
   ├── _layout         # Entry point of the application
   ├── index      # Main screen

/assets
   ├── images/          # Image assets
   ├── fonts/           # Font assets

/components
   ├── ui/        # gluestack ui shared components
```