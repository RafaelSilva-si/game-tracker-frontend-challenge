# Use an official Node runtime as base image
FROM node

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Install http-server globally
RUN npm install -g http-server

# Expose the port for http-server
EXPOSE 8080

# Define the command to serve the app
CMD ["http-server", "dist"]
