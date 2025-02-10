# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire backend source code
COPY . .

# Expose the backend port (change this if needed)
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
