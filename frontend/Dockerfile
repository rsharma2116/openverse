FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install npm dependencies
RUN npm install

# Expose dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
