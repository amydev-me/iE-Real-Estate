# Use the official Node.js image from the Docker Hub
FROM node:20-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY prisma ./prisma/ 
# Install dependencies
RUN npm install
# Install dotenv for handling .env files
RUN npm install dotenv
RUN npm install @prisma/client

# Copy the rest of the application code
COPY . .

RUN npx prisma generate 
# Install nodemon globally
RUN npm install -g nodemon

# Expose the port the app runs on (default to 3000)
EXPOSE ${PORT}

# Command to run the app
CMD ["npm", "run", "dev"]