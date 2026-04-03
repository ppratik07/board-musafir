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
