# 💸 Expense Tracker App (Flutter + Firebase)

A beautifully crafted cross-platform Expense Tracker built with **Flutter**, powered by **Firebase**, and enhanced with **local notifications**. Keep track of your income and expenses, filter data by date, visualize financial activity with pie charts, and receive timely reminders!

![Flutter](https://img.shields.io/badge/Flutter-3.22-blue.svg)
![Firebase](https://img.shields.io/badge/Firebase-CloudFirestore-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📱 Screenshots

| Dashboard | Add Transaction | Filter & Summary |
|----------|------------------|------------------|
| ![Dashboard](screenshots/dashboard.png) | ![Add](screenshots/add_transaction.png) | ![Chart](screenshots/chart.png) |

---

## 🚀 Features

- ✅ Firebase Email/Password Authentication
- 📥 Add, Edit, Delete Transactions (Income & Expense)
- 📅 Filter transactions by custom date range
- 📊 Monthly Pie Chart Summary
- 🔔 Daily Local Notifications at 12PM, 6PM, and 10PM
- 🧠 Clean, responsive UI for Android & iOS

---

## 🧰 Tech Stack

| Technology      | Use Case                          |
|-----------------|-----------------------------------|
| Flutter         | UI + Cross-platform App Development |
| Firebase Auth   | User Authentication               |
| Cloud Firestore | Realtime database for transactions |
| flutter_local_notifications | Daily reminders     |
| fl_chart        | Beautiful pie charts              |

---

## ⚙️ Getting Started

### 1. 🔧 Prerequisites

- Flutter SDK: [Install Flutter](https://docs.flutter.dev/get-started/install)
- Firebase Project with:
  - Authentication (Email/Password)
  - Firestore Database
- Android Studio / VS Code

---

### 2. 📦 Installation

```bash
git clone https://github.com/your-username/flutter-expense-tracker.git
cd flutter-expense-tracker
flutter pub get
```

---

### 3. 🔑 Firebase Setup

- Add `google-services.json` to `android/app/`
- Add `GoogleService-Info.plist` to `ios/Runner/`
- Set up Firestore rules (developer mode for testing):

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/transactions/{docId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

### 4. ▶️ Run the App

```bash
flutter run
```

For release build:

```bash
flutter build apk --release
```

---

## 🗂 Folder Structure

```
lib/
├── models/                   # Data models
│   └── transaction_model.dart
├── services/                 # Firebase + notification logic
│   ├── auth_service.dart
│   ├── firestore_service.dart
│   └── notification_service.dart
├── screens/                  # UI Screens
│   ├── login_screen.dart
│   └── dashboard_screen.dart
├── widgets/                  # Reusable components
│   ├── transaction_form_dialog.dart
│   └── monthly_summary_chart.dart
└── main.dart                 # App entry point
```

---

## 🧠 Todo (Enhancements)

- [ ] Custom notification time from settings
- [ ] Dark mode support
- [ ] Export data to CSV
- [ ] Category-wise analytics

---

## 🤝 Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made with ❤️ by [Your Name](https://github.com/your-username)  
Feel free to connect on [LinkedIn](https://www.linkedin.com/)
