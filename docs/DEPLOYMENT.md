# Deployment Guide

This guide covers deploying FleetFlow to various platforms and environments.

## Table of Contents

- [Quick Deploy](#quick-deploy)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Docker Deployment](#docker-deployment)
- [AWS De### Environment Variables

```bash
# Application
NEXT_PUBLIC_APP_URL=https://fleet-management-saas.vercel.app
NODE_ENV=production

# Database
DATABASE_URL=postgresql://user:pass@host:5432/fleetflow

# Authentication
JWT_SECRET=your-super-secret-jwt-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://fleet-management-saas.vercel.app

# API Keys (Optional)
GOOGLE_MAPS_API_KEY=your-google-maps-key
SENDGRID_API_KEY=your-sendgrid-key
STRIPE_SECRET_KEY=your-stripe-key
```yment)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Monitoring](#monitoring)
- [Performance Optimization](#performance-optimization)

## Quick Deploy

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mustaque01/fleet-management-saas)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mustaque01/fleet-management-saas)

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub/GitLab repository

### Automatic Deployment

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy from project directory
   vercel
   ```

2. **Configure Project**
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
   - Development Command: `pnpm dev`

3. **Environment Variables**
   Set in Vercel dashboard or via CLI:
   ```bash
   vercel env add NEXT_PUBLIC_APP_URL
   vercel env add DATABASE_URL
   vercel env add JWT_SECRET
   ```

### Manual Configuration

Create `vercel.json`:
```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "crons": [
    {
      "path": "/api/cron/cleanup",
      "schedule": "0 2 * * *"
    }
  ]
}
```

## Netlify Deployment

### Configuration

Create `netlify.toml`:
```toml
[build]
  command = "pnpm build && pnpm export"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
  NPM_VERSION = "10"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Environment Variables

Set in Netlify dashboard:
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL`

## Docker Deployment

### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/fleetflow
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: fleetflow
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  postgres_data:
```

### Deploy with Docker

```bash
# Build image
docker build -t fleetflow .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="your-db-url" \
  -e JWT_SECRET="your-secret" \
  fleetflow

# Or use Docker Compose
docker-compose up -d
```

## AWS Deployment

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select branch

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install -g pnpm
           - pnpm install
       build:
         commands:
           - pnpm build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### AWS ECS with Fargate

1. **Create Task Definition**
   ```json
   {
     "family": "fleetflow",
     "networkMode": "awsvpc",
     "requiresCompatibilities": ["FARGATE"],
     "cpu": "256",
     "memory": "512",
     "containerDefinitions": [
       {
         "name": "fleetflow",
         "image": "your-account.dkr.ecr.region.amazonaws.com/fleetflow:latest",
         "portMappings": [
           {
             "containerPort": 3000,
             "protocol": "tcp"
           }
         ],
         "environment": [
           {
             "name": "NODE_ENV",
             "value": "production"
           }
         ]
       }
     ]
   }
   ```

2. **Deploy to ECS**
   ```bash
   # Build and push to ECR
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
   
   docker build -t fleetflow .
   docker tag fleetflow:latest your-account.dkr.ecr.us-east-1.amazonaws.com/fleetflow:latest
   docker push your-account.dkr.ecr.us-east-1.amazonaws.com/fleetflow:latest
   
   # Update ECS service
   aws ecs update-service --cluster your-cluster --service fleetflow --force-new-deployment
   ```

## Environment Variables

### Required Variables

```bash
# Application
NEXT_PUBLIC_APP_URL=https://your-domain.com
NODE_ENV=production

# Database
DATABASE_URL=postgresql://user:pass@host:5432/fleetflow

# Authentication
JWT_SECRET=your-super-secret-jwt-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-domain.com

# API Keys (Optional)
GOOGLE_MAPS_API_KEY=your-google-maps-key
SENDGRID_API_KEY=your-sendgrid-key
STRIPE_SECRET_KEY=your-stripe-key
```

### Development Variables

```bash
# Local development
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/fleetflow_dev
NODE_ENV=development
```

## Database Setup

### PostgreSQL (Recommended)

1. **Create Database**
   ```sql
   CREATE DATABASE fleetflow;
   CREATE USER fleetflow_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE fleetflow TO fleetflow_user;
   ```

2. **Environment Configuration**
   ```bash
   DATABASE_URL="postgresql://fleetflow_user:secure_password@localhost:5432/fleetflow"
   ```

### Supabase Setup

1. **Create Project**
   - Go to [Supabase](https://supabase.com)
   - Create new project
   - Copy connection string

2. **Configuration**
   ```bash
   DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"
   NEXT_PUBLIC_SUPABASE_URL="https://[project-ref].supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
   ```

### PlanetScale Setup

1. **Create Database**
   ```bash
   # Install PlanetScale CLI
   brew install planetscale/tap/pscale
   
   # Create database
   pscale database create fleetflow
   pscale branch create fleetflow main
   ```

2. **Connect**
   ```bash
   DATABASE_URL="mysql://username:password@host:3306/fleetflow?sslaccept=strict"
   ```

## Monitoring

### Vercel Analytics

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Error Tracking with Sentry

1. **Install Sentry**
   ```bash
   pnpm add @sentry/nextjs
   ```

2. **Configure**
   ```javascript
   // sentry.client.config.js
   import * as Sentry from '@sentry/nextjs'
   
   Sentry.init({
     dsn: process.env.SENTRY_DSN,
     tracesSampleRate: 1.0,
   })
   ```

### Uptime Monitoring

Services to consider:
- **Uptime Robot** - Free tier available
- **Pingdom** - Comprehensive monitoring
- **StatusCake** - Global monitoring network

## Performance Optimization

### Build Optimization

1. **Bundle Analysis**
   ```bash
   # Install analyzer
   pnpm add @next/bundle-analyzer
   
   # Analyze bundle
   ANALYZE=true pnpm build
   ```

2. **Image Optimization**
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/image.jpg"
     alt="Description"
     width={500}
     height={300}
     priority={true} // For above-the-fold images
   />
   ```

### Caching Strategy

1. **Static Assets**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/static/(.*)',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ]
     },
   }
   ```

2. **API Caching**
   ```typescript
   // app/api/vehicles/route.ts
   export const revalidate = 60 // Cache for 60 seconds
   ```

### CDN Configuration

For better global performance:
- **Cloudflare** - Free tier with global CDN
- **AWS CloudFront** - Integrated with AWS services
- **Vercel Edge Network** - Automatic with Vercel deployment

## SSL/TLS Configuration

### Let's Encrypt (Free)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d your-domain.com
```

### Cloudflare SSL

1. Add domain to Cloudflare
2. Update nameservers
3. Enable "Full (strict)" SSL mode
4. Enable "Always Use HTTPS"

## Backup Strategy

### Database Backups

```bash
# PostgreSQL backup
pg_dump -h hostname -U username -d database_name > backup.sql

# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump $DATABASE_URL > "backup_$DATE.sql"
aws s3 cp "backup_$DATE.sql" s3://your-backup-bucket/
```

### File Backups

```bash
# Backup uploaded files
tar -czf uploads_backup.tar.gz public/uploads/
aws s3 cp uploads_backup.tar.gz s3://your-backup-bucket/
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache
   rm -rf .next node_modules
   pnpm install
   pnpm build
   ```

2. **Memory Issues**
   ```javascript
   // next.config.mjs
   const nextConfig = {
     experimental: {
       workerThreads: false,
       cpus: 1
     }
   }
   ```

3. **Database Connection Issues**
   - Check connection string format
   - Verify network access
   - Check SSL requirements

### Health Checks

Create health check endpoint:
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  })
}
```

## Support

For deployment issues:
- Check [GitHub Issues](https://github.com/mustaque01/fleet-management-saas/issues)
- Review deployment logs
- Contact support: support@fleetflow.app
