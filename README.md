# Hamari Product Landing Page

A modern, responsive landing page for **Hamari Product** (Taleemiyat) - an online tutoring and education platform built with Next.js. This platform connects students with expert tutors, offering personalized 1-on-1 sessions, AI-assisted learning, and comprehensive course management.

## 🚀 Features

- **Course Management**: Browse and explore featured courses with detailed information
- **Teacher Profiles**: View and connect with qualified tutors
- **Blog Section**: Stay updated with educational content and news
- **Testimonials**: Read reviews and feedback from students
- **Payment Integration**: Secure checkout and payment processing
- **User Authentication**: Login and registration system
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Beautiful, modern interface built with Tailwind CSS and PrimeReact

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.4](https://nextjs.org/)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: 
  - Tailwind CSS 4.x
  - Custom SCSS
- **UI Components**: PrimeReact 10.9.7
- **HTTP Client**: Axios 1.13.2
- **Carousel/Slider**: Swiper 12.0.3
- **Build Tool**: Next.js with React Compiler enabled

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hamari-product-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hamari-product-landing/
├── public/
│   └── assets/          # Static assets (images, CSS, JS, fonts)
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog listing page
│   │   ├── blog-details/# Blog detail page
│   │   ├── checkout/    # Checkout flow
│   │   ├── contact/     # Contact page
│   │   ├── course/      # Course listing
│   │   ├── course-details/# Course detail page
│   │   ├── payment/     # Payment success/cancel pages
│   │   ├── price/       # Pricing page
│   │   ├── teachers/    # Teacher listing
│   │   └── team-details/# Team member details
│   ├── components/      # React components
│   │   ├── auth/        # Authentication components
│   │   ├── checkout/    # Checkout components
│   │   ├── layout/      # Layout components (Header, Footer, Sidebar)
│   │   ├── teachers/    # Teacher-related components
│   │   └── ui/          # Reusable UI components
│   ├── lib/             # Utility libraries
│   ├── services/        # API service layer
│   │   ├── api.service.ts
│   │   ├── auth.service.ts
│   │   ├── currency.service.ts
│   │   ├── payment.service.ts
│   │   └── teacher.service.ts
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url_here

# Payment Configuration (if applicable)
NEXT_PUBLIC_PAYMENT_KEY=your_payment_key_here
```

### Next.js Configuration

The project is configured with:
- React Compiler enabled
- Image optimization with remote patterns
- Custom path aliases (`@/*` pointing to `./src/*`)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses:
- **Tailwind CSS 4** for utility-first styling
- **Custom SCSS** for component-specific styles
- **PrimeReact** for UI components (configured as unstyled)

Main stylesheets are located in:
- `public/assets/css/` - Compiled CSS files
- `public/assets/scss/` - Source SCSS files

## 🔐 Authentication

The application uses cookie-based authentication. Authentication tokens are stored in cookies and decoded on the server side for secure user sessions.

## 📱 Pages & Routes

- `/` - Homepage with featured courses, teachers, and testimonials
- `/about` - About page
- `/course` - Course listing page
- `/course-details` - Individual course details
- `/teachers` - Teacher listing page
- `/blog` - Blog listing page
- `/blog-details` - Individual blog post
- `/contact` - Contact page
- `/checkout` - Checkout page
- `/payment/success` - Payment success page
- `/payment/cancel` - Payment cancellation page
- `/price` - Pricing page

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

Built with ❤️ by the Hamari Product team.

## 📞 Support

For support, email support@taleemiyat.com or visit our [website](http://taleemiyat.com).

---

**Note**: This is a landing page for the Hamari Product tutoring platform. For API documentation and backend services, please refer to the main API repository.


