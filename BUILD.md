# Build Guide for Board Musafir

## Prerequisites
- Node.js 20+
- PostgreSQL 14+
- Redis 6+

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Required for local development
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/board_musafir?schema=public"
REDIS_URL="redis://localhost:6379"
NEXTAUTH_SECRET="your-secret-key-change-this"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Set Up PostgreSQL Database

#### Option A: Using Docker
```bash
docker run --name board-musafir-db \
  -e POSTGRES_DB=board_musafir \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:14-alpine
```

#### Option B: Local PostgreSQL
```bash
# Create database
createdb board_musafir

# Or using psql
psql -U postgres
CREATE DATABASE board_musafir;
\q
```

### 4. Set Up Redis

#### Option A: Using Docker
```bash
docker run --name board-musafir-redis \
  -p 6379:6379 \
  -d redis:alpine
```

#### Option B: Local Redis
```bash
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt-get install redis-server
sudo systemctl start redis
```

### 5. Initialize Database Schema
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Prisma Studio to view database
npm run db:studio
```

### 6. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 7. Test Database Connection
Once the server is running, test your database and Redis connections:

```bash
# Using curl
curl http://localhost:3000/api/health

# Or visit in browser
# http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2026-04-04T...",
  "services": {
    "database": "connected",
    "redis": "connected"
  }
}
```

If you see "unhealthy" or connection errors, check:
- PostgreSQL is running and accessible
- Redis is running
- .env.local has correct DATABASE_URL and REDIS_URL

## Useful Commands

### Database
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio GUI

### Development
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Type check with TypeScript

## Troubleshooting

### Prisma 7 Adapter Configuration
This project uses **Prisma 7**, which requires a database adapter. The PrismaClient is configured with the PostgreSQL adapter (`@prisma/adapter-pg`) in `src/lib/db.ts`. 

If you see errors like:
```
PrismaClientConstructorValidationError: Using engine type "client" requires either "adapter" or "accelerateUrl"
```

This means:
- The adapter packages are missing (run `npm install @prisma/adapter-pg pg @types/pg`)
- The DATABASE_URL is not set in .env.local
- PostgreSQL is not running

### Edge Runtime and Node.js Modules
If you see errors like:
```
The edge runtime does not support Node.js 'crypto' module
The "middleware" file convention is deprecated. Please use "proxy" instead.
```

**Solution**: Authentication is handled at the page/API route level rather than in the proxy to avoid Edge Runtime compatibility issues.

Next.js 16 changes:
- Renamed `middleware.ts` → `proxy.ts`
- Proxy runs in Edge Runtime by default
- Edge Runtime doesn't support Node.js modules like `crypto` (used by bcrypt in NextAuth)

**How authentication works now**:
1. The proxy (`src/proxy.ts`) allows all requests through
2. Protected pages use `requireAuth()` helper from `src/lib/auth-helpers.ts`
3. Auth checks happen in Server Components (Node.js runtime)

**Example usage in a protected page**:
```typescript
// app/dashboard/page.tsx
import { requireAuth } from '@/lib/auth-helpers';

export default async function DashboardPage() {
  const session = await requireAuth(); // Redirects to login if not authenticated
  
  return <div>Welcome, {session.user.name}!</div>;
}
```

**Available auth helpers**:
- `requireAuth()` - Get session or redirect to login
- `requireAdmin()` - Require ADMIN role
- `requirePartner()` - Require PARTNER or ADMIN role  
- `getSession()` - Get session or null (optional auth)
- `isAuthenticated()` - Boolean check
- `hasRole(role)` - Check specific role

### Database Connection Issues
```bash
# Test PostgreSQL connection
psql -U postgres -h localhost -p 5432 -d board_musafir

# Check if PostgreSQL is running
# macOS
brew services list | grep postgresql

# Linux
sudo systemctl status postgresql
```

### Redis Connection Issues
```bash
# Test Redis connection
redis-cli ping
# Should return: PONG

# Check if Redis is running
# macOS
brew services list | grep redis

# Linux
sudo systemctl status redis
```

### Prisma Issues
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Force regenerate Prisma client
rm -rf node_modules/.prisma
npm run db:generate
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

## Environment-Specific Setup

### Staging
- Use separate database and Redis instances
- Set `NODE_ENV=staging`
- Configure staging API keys

### Production
- Use AWS RDS for PostgreSQL
- Use AWS ElastiCache for Redis
- Set all production environment variables
- Enable HTTPS
- Configure CloudFront CDN

## Next Steps

After successful setup:
1. Create a user account: [http://localhost:3000/auth/register](http://localhost:3000/auth/register)
2. Test authentication flow
3. Explore the API at `/api/*`
4. Start implementing Phase 2 features

## Support

For issues:
- Check logs in terminal
- Review `.env.local` configuration
- Ensure PostgreSQL and Redis are running
- Contact: support@musafir.owlous.in
