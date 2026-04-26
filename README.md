# Ecommerce-Frontend

A modern e-commerce frontend application built with React.js, featuring product browsing, shopping cart, user authentication, and more.

## 🔗 Live Demo

**[Live Website](https://ecommerce-frontend-sandy-five.vercel.app/)**

## 📸 Screenshots

![alt text](<src/assets/Screenshot (167).png>)![alt text](<src/assets/Screenshot (168).png>)![alt text](<src/assets/Screenshot (169).png>)

## 🛠️ Tech Stack

| Technology       | Purpose             |
| ---------------- | ------------------- |
| React 19         | Frontend framework  |
| React Router DOM | Client-side routing |
| Tailwind CSS     | Styling             |
| Firebase         | Authentication      |
| Vite             | Build tool          |

## 📦 Features

- **Product Catalog** - Browse all products with filtering options
- **Product Filtering** - Filter by category, brand, color, and price
- **Shopping Cart** - Add/remove items, quantity management
- **User Authentication** - Sign in with email/password and Google
- **User Profile** - View and manage user profile
- **Responsive Design** - Works on all device sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sahadat-Hossen1/Ecommerce-Frontend.git

# Navigate to project directory
cd Ecommerce-Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Cart/           # Cart components
│   ├── ContextApi/     # React Context providers
│   ├── FirebaseConfig/ # Firebase configuration
│   ├── Product_Filter/ # Product filtering components
│   ├── Share/          # Shared components (Header, Footer)
│   └── ShopingSideBar/ # Shopping sidebar components
├── Layout/             # Layout components
│   ├── Main/          # Main layout
│   └── Router/        # Route configuration
├── Pages/             # Page components
│   ├── About/
│   ├── AlProduct/
│   ├── Contact/
│   ├── Home/
│   ├── Profile/
│   ├── SignIn&SignUP/
│   └── SingleProduct/
└── assets/            # Static assets
```

## 🔧 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

## 📄 License

MIT License
