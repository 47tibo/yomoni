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

3. Start all the tests

   ```bash
    yarn test
   ```

## App dependencies

The app uses [gluestack ui](https://gluestack.io/) library for universal components.

## App structure

The project structure is as follows:

```
/app
   ├── _layout         # Entry point of the application
   ├── index      # Home screen

/features
   ├── home       # components and hooks for the home screen

/assets
   ├── images/          # Image assets
   ├── fonts/           # Font assets
   ├── strings           # string resources for texts in the app

/components
   ├── ui/        # gluestack ui shared components
```

## API

The API is the Rijksmuseum API. This API gives access to the Rijksmuseum catalog. The `collection` endpoint is used : 

````
https://www.rijksmuseum.nl/api/en/collection/
https://www.rijksmuseum.nl/api/en/collection/BK-17496
````

It allows to search (via query parameter) and to get the detail of an art object (the second url).