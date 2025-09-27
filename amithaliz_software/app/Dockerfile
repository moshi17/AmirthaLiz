# Use a Debian-based Node image for best compatibility with Next.js SWC binaries
FROM node:20-bookworm-slim

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (leverage Docker layer caching)
# Copy only package files to keep layer cache stable
COPY package*.json ./

# Install dependencies (no audit/fund to speed up CI) 
# Use npm install since a lockfile may not be present
RUN npm install --no-audit --no-fund

# Copy the rest of the app source
COPY . .

# Environment and network setup
ENV NODE_ENV=development \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

# Expose Next.js dev port
EXPOSE 3000

# Start the development server
CMD ["sh", "-c", "npm run dev"]
