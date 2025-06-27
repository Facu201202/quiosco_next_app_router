# 🧾 Digital Kiosk – Food Ordering Demo

This is a demo web application that simulates the workflow of a restaurant or café kitchen. It includes a customer ordering view, an admin panel to manage products and orders, and a public screen to display ready-to-pick-up orders.

> ⚠️ This is a **demo project** and does **not include authentication**. The views are separated by URL — there's no user/session control between them.

---

## ⚙️ Technologies

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **ORM / Database:** Prisma + PostgreSQL

---

## 🔗 Live Demo Links

- 🛒 **Customer View – Place Orders**  
  [https://quiosco-next-app-router-three-sigma.vercel.app/](https://quiosco-next-app-router-three-sigma.vercel.app/)  
  _Main screen for customers to browse products, add items to the cart, and place an order._

- 🧑‍🍳 **Admin Panel – Manage Products and Orders**  
  [https://quiosco-next-app-router-three-sigma.vercel.app/admin/orders](https://quiosco-next-app-router-three-sigma.vercel.app/admin/orders)  
  _Used by kitchen/admin staff to manage product inventory and track active orders._

- 📦 **Ready Orders – Pick-Up Screen**  
  [https://quiosco-next-app-router-three-sigma.vercel.app/orders](https://quiosco-next-app-router-three-sigma.vercel.app/orders)  
  _Displays all orders marked as "Ready to Pick Up" by the admin._

---

## 🧪 Main Features

- Product browsing and cart system  
- Order placement and real-time status updates  
- Admin panel for:
  - Creating, editing, and deleting products (CRUD)
  - Viewing and updating order status
- Public screen for displaying ready-to-pick-up orders
- Zustand store for state management
- Data persistence with PostgreSQL via Prisma ORM

