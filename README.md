# Lustra Skin ✨

Lustra Skin is an e-commerce web application for a premium skincare brand. Built using the latest modern web technologies, this project provides a lightning-fast shopping experience, seamless navigation, and an intuitive user interface.

## 🌟 Key Features

- **Product Display & Range**: Browse through the complete skincare range with dedicated product pages.
- **Cart Functionality**: Context-managed shopping cart for a smooth checkout process.
- **Information Pages**: Essential e-commerce pages included (FAQs, Contact, Privacy Notice, Terms & Conditions, Terms of Sale, and Delivery & Returns).
- **Modern Performance**: Fast page loads and optimizations out of the box with the Next.js App Router and Turbopack.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Configuration**: ESLint for linting and PostCSS for style processing.

## 📁 Project Structure

```bash
LustraSkin/
├── public/                # Static assets and images
├── src/
│   ├── app/               # Next.js App Router Next.js pages
│   │   ├── cart/          # Shopping cart page
│   │   ├── contact/       # Contact information
│   │   ├── products/      # Product listings and details
│   │   ├── Range/         # Specific product ranges/categories
│   │   └── ...            # Other policy and legal pages
│   ├── components/        # Reusable React UI components
│   └── context/           # React Context (e.g., Cart state management)
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v20+) and standard package managers (`npm`, `yarn`, or `pnpm`) installed.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd LustraSkin
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

Start the development server with Turbopack for faster local iteration:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📜 Legal & Policies

Includes pre-structured routes for:
- Cookie Policy (`/cookiepolicy`)
- Privacy Notice (`/privacynotice`)
- Delivery & Returns (`/delivery&returns`)
- Terms & Conditions (`/terms&conditions`)
- Terms of Sale (`/termsofsale`)
