# 🔐 NextAuth Authentication App

A full-stack authentication system built with **Next.js App Router**, **NextAuth.js**, and **MongoDB**.

## Features

*  Secure login/signup with NextAuth.js
*  MongoDB adapter for user storage
*  Protected routes and role-based access
*  JWT-based session handling
*  Modular folder structure using App Router

---

## Project Structure

```
NextAuth_Tutorial/
├── app/                    # Pages and routes
│   ├── (components)/       # Shared UI components
│   ├── (modals)/           # Auth modal UIs
│   ├── Public/             # Publicly accessible route
│   ├── Member/             # Protected route for members
│   ├── CreateUser/         # User registration UI
│   ├── Users/              # Route to manage users
│   └── api/                # API endpoints
│       └── auth/[...nextauth]/ # NextAuth configuration
├── public/                 # Static assets (SVGs, icons)
├── styles/                 # Global CSS
├── middleware.js           # Auth middleware
├── next.config.mjs         # Next.js config
└── package.json
```

---

## Getting Started

```bash
git clone https://github.com/your-username/NextAuth_Tutorial.git
cd NextAuth_Tutorial
npm install
npm run dev
```

Configure your MongoDB URI and NextAuth credentials in `.env.local`.

---

## Auth Stack

* [Next.js App Router](https://nextjs.org/docs/app)
* [NextAuth.js](https://authjs.dev/)
* [MongoDB + Adapter](https://authjs.dev/reference/adapter/mongodb)

---

## Author

Developed by [@arpit](https://github.com/ARPIT20012005)

---

## License

This project is licensed under the MIT License.
