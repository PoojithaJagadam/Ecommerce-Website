# EarthLifeCo.

## Project Overview
EarthLifeCo. is an e-commerce platform dedicated to offering eco-friendly and sustainable products. The platform is built as a single-page application and provides a seamless shopping experience from product discovery to checkout.

## Tech Stack
- **Frontend**: React, Vite
- **Language**: JavaScript/TypeScript (where applicable)
- **Backend/API Server**: Express

## Integrations

### Ecwid E-commerce
The core e-commerce functionality is powered by Ecwid. Ecwid handles:
- Product catalog and inventory management
- Shopping cart functionality
- Order processing and management
- Automated order tracking notifications and email updates sent to customers

### Razorpay Payments
Payment processing is securely integrated using Razorpay to support diverse payment options directly within the checkout flow.

### HelpfulCrowd Reviews
Customer reviews and product ratings are managed and displayed using the HelpfulCrowd integration, enhancing trust and social proof.

## Main Frontend Features & Pages
- **Home Page**: Features promotional banners, featured products, and brand messaging.
- **Shop/Products**: Product listing page displaying categories and individual items pulled from the Ecwid catalog.
- **Product Details**: Detailed view of products including descriptions, pricing, images, and customer reviews.
- **About Us**: Information about the brand's mission and story.
- **Contact Us**: Customer support and contact information.
- **Checkout Flow**: Integrated cart and checkout experience with secure payment handling.

## Repository Setup

To get started, clone the repository and install the dependencies:

```bash
git clone <REPOSITORY_URL>
cd earthlifeco
npm install
```

After cloning, create a `.env` file from the provided `.env.example` and add the required environment variables before running the project.

## Local Development

### Environment Setup
1. Copy the example environment file to create your local environment configuration:
   ```bash
   cp .env.example .env
   ```
2. Fill in the required environment variables in the `.env` file.

> **SECURITY NOTE**: Real `.env` values, API keys, and secrets must **never** be committed to the repository. Ensure `.env` is listed in your `.gitignore`.

### Development Commands
To start the local development server:
```bash
npm install
npm run dev
```

To build the project for production:
```bash
npm run build
```

## Deployment Notes (Hostinger)
When deploying the application to Hostinger (or similar hosting providers):
1. Run the production build command (`npm run build`).
2. Upload the contents of the `dist` directory to your `public_html` or configured document root on Hostinger.
3. If using client-side routing, ensure that the server is configured to fallback to `index.html` for all unknown routes (e.g., using an `.htaccess` file).
4. Configure the necessary environment variables securely within the Hostinger deployment environment or control panel.
