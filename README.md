# Board Musafir 🌍✈️

A comprehensive AI-powered Travel Booking & Activity Platform built with Next.js 14, TypeScript, and modern web technologies.

## 🚀 Features

### Core Features
- **AI/ML Smart Itinerary Builder**: Generate custom day-by-day itineraries using AI (GPT-4/Claude)
- **Comprehensive Booking Engine**: Book flights, hotels, trains, cabs, and activities
- **User Dashboard**: Manage itineraries, bookings, and travel history
- **Payment Integration**: Secure payments via Razorpay
- **Main Site Integration**: Seamless integration with owlous.in for "Book This Trip" functionality

### Booking Capabilities
- ✈️ **Flights**: Search and book domestic/international flights
- 🏨 **Hotels**: Browse and book hotels, resorts, homestays
- 🚂 **Trains**: Indian railway booking (IRCTC integration)
- 🚗 **Cabs**: Cab rental services
- 🎯 **Activities**: Tours, experiences, restaurants, monuments

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Radix UI
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Caching**: Redis
- **Authentication**: NextAuth.js v5
- **AI/ML**: OpenAI GPT-4 / Anthropic Claude
- **Payment**: Razorpay
- **Deployment**: AWS

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 6+

### Setup Steps

1. **Clone and install**
   ```bash
   git clone https://github.com/ppratik07/board-musafir.git
   cd board-musafir
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

3. **Setup database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
board-musafir/
├── src/
│   ├── app/              # Next.js App Router pages & API
│   ├── components/       # React components
│   ├── lib/             # Utilities & configurations
│   ├── services/        # Business logic
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
├── prisma/              # Database schema
└── tests/               # Test files
```

## 🚀 Development Status

**Phase 1: Foundation** ✅ **COMPLETED**
- ✅ Next.js 14 project initialized
- ✅ Database schema designed (PostgreSQL + Prisma)
- ✅ Authentication system (NextAuth.js)
- ✅ Project structure and utilities
- ✅ Configuration files

**Next Phase: Core Booking Engine**
- Flight booking integration (Duffel API)
- Hotel booking integration (Booking.com)
- Train & cab booking
- Activities integration

## 📝 Environment Variables

Key variables required:

```env
DATABASE_URL=            # PostgreSQL connection
REDIS_URL=              # Redis connection
NEXTAUTH_SECRET=        # NextAuth secret
OPENAI_API_KEY=         # OpenAI API key
RAZORPAY_KEY_ID=       # Razorpay credentials
```

See `.env.example` for complete list.

## 🔐 Security

- JWT authentication with secure cookies
- Password hashing with bcrypt
- Rate limiting on API routes
- CSRF protection
- Input validation with Zod

## 📞 Support

Email: support@musafir.owlous.in

---

Built with ❤️ by the Owlous Team
