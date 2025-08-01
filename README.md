# CashTrace

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

If you need a development build dont hesitate to ask!

# 📱 CashTrack App

**CashTrack** is a mobile app designed to help users count and manage cash denominations across multiple currencies. The app consists of **three main screens**, accessible through a **Drawer Navigator** located at the top-left corner.

---

## 🧭 Screens Overview

### 1. Start Screen (CashTrack Root Service)

- On launch, users must select which **currencies** will be used for the denomination counting process.
- A **currency form** is displayed for each selected currency.
- Each currency contains its own set of denominations by amount.
- Users can input as many denomination amounts as needed, with a maximum per amount of **999,999**.
- The app automatically calculates:
  - The **subtotal per denomination**.
  - The **total for each currency**.

### 2. Floating Action Button (Top-Right Corner)

A **draggable button** is initially placed in the top-right corner. When pressed, it reveals the following options:

- 💾 **Save** the current CashTrack state to history.
- 🧹 **Clear** all currency forms.
- 📤 **Share** the current global state as a text summary.
- 🔄 **Restart** the entire process.

### 3. Currency Screen

- Displays all selected currencies along with their current denomination entries.

### 4. History Screen

- Shows a list of the latest **CashTrack actions**.
- Each history entry supports the following actions:
  - 📄 **Clone** a previous entry.
  - 🗑️ **Delete** an entry.
  - 📤 **Share** the entry as text.

---

## 📌 Notes

- The UI is optimized for mobile devices.
- All calculations update in real-time as the user adds or modifies denominations.
- The share option generates a clear, copy-paste-friendly text summary.

---

## 🚀 Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux-persist](https://github.com/rt2zz/redux-persist)
- [React-Async-Storage](https://github.com/react-native-async-storage/async-storage)

---

## 📂 Project Status

> Version: `1.1`  
> Features in progress:
> - Currency exchange rates support  
> - Multi-language support  

---

## 📬 Contact

For feedback or questions, please reach out at [jctrujillo759@google.com].


