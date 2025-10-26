````md
# 🎓 ApcScholariest

ApcScholariest is a modern, elegant **authentication and onboarding interface**
built with **Next.js 15.5.6 (Turbopack)**, **TypeScript**, and **Tailwind
CSS**.\
It provides a responsive, accessible, and production-ready UI for **user
registration** and **login** — designed for education, research, and
professional web platforms.

---

## 🚀 Features

- ⚡ **Next.js 15.5.6 + Turbopack** — lightning-fast build and rendering.
- 💎 **TypeScript (TSX)** — for robust type safety and maintainable code.
- 🎨 **Tailwind CSS** — utility-first responsive styling with clean UI.
- 🔐 **Complete Authentication UI** — includes signup and login pages.
- 🧠 **Smart Form Validation** — real-time client-side validation and state
  management.
- 🪄 **Show/Hide Password Toggle**, “Remember Me”, and Terms agreement.
- 🌈 **Glassmorphism Design** — aesthetic backdrop blur with gradients.
- 📱 **Fully Responsive Layout** — optimized for all devices.
- 🌍 **Locale-ready Structure** — built inside `/[locale]/` for i18n expansion.

---

## 📁 Project Structure

```bash
src/
└── app/
    └── [locale]/
        ├── signup/
        │   └── page.tsx
        ├── login/
        │   └── page.tsx
        ├── layout.tsx
        └── globals.css
```
````

---

## 🧩 Tech Stack

| Tool                  | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| **Next.js 15.5.6**    | Full-stack React framework using the App Router |
| **TypeScript (TSX)**  | Static typing for predictable, scalable code    |
| **Tailwind CSS**      | Utility-first CSS for flexible, modern UI       |
| **React Hooks**       | Local state management and event handling       |
| **ESLint + Prettier** | Clean, consistent, and linted codebase          |

---

## 💡 How It Works

### 📝 Signup Page

- Fields: Full Name, Email, Password, Confirm Password, Terms Checkbox
- Validates all inputs before submission
- Alerts user when registration is successful (demo simulation)
- Ready to integrate with real backend (NextAuth, Firebase, Supabase)

### 🔑 Login Page

- Fields: Email, Password, Remember Me
- Show/Hide password toggle
- “Forgot password” and “Continue with Google/Facebook” sections
- Matches Signup layout with mirrored design and color scheme

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/apcscholariest.git
cd apcscholariest
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Then open **[http://localhost:3000/en/signup](http://localhost:3000/en/signup)**
or **/login** in your browser.

---

## 🧪 Development Notes

- Uses the **App Router** and `"use client"` components for interactivity.
- All input fields are controlled via React state and validated with TypeScript.
- Compatible with **Next.js 15.5.6** and future-ready for **Turbopack**.
- Minimal dependencies — maximum speed and readability.

---

## 📸 Screenshots

| Signup                                                     | Login                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| ![Signup Page Screenshot](./public/screenshots/signup.png) | ![Login Page Screenshot](./public/screenshots/login.png) |

---

## 🤝 Contributing

Contributions are always welcome! You can enhance animations, add new locales,
or integrate with real backend APIs.

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch and open a Pull Request 🚀

---

## 🪪 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE)
file for more details.

---

## 💬 Acknowledgments

Special thanks to:

- **Next.js** — for a powerful full-stack React framework
- **Tailwind CSS** — for simplifying modern UI development
- **Open Source Community** — for inspiration and continuous improvement

---

## 🧭 Roadmap

- [ ] Add Framer Motion animations for smoother transitions
- [ ] Implement real backend authentication (NextAuth / Supabase)
- [ ] Add multi-language support (via `next-intl`)
- [ ] Dark mode toggle
- [ ] Accessibility (ARIA roles + screen reader optimization)

---

> ✨ _Crafted with care and precision for the next generation of scholars —
> ApcScholariest._
