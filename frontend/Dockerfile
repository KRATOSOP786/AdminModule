# Use official Node.js image
FROM node:18 

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire frontend code into the container
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose the frontend port
EXPOSE 3000

# Serve the built React app
CMD ["serve", "-s", "build", "-l", "3000"]
