FROM node:23-alpine

WORKDIR /app

COPY . .

# Install dependencies
RUN yarn install

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]