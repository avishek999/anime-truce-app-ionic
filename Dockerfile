# Use an official Node.js runtime as a base image for the build
FROM node:20 AS build

# Set working directory for the build stage
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Copy the rest of the app files and build the app
COPY . ./
RUN ionic build --prod  # This will create the 'dist' folder in production mode

# Install 'serve' to serve the built files globally in the build stage
RUN npm install -g serve

# Use a lightweight node image to run the app
FROM node:20

# Set working directory in the final image
WORKDIR /app

# Copy the built web assets from the build stage
COPY --from=build /app/dist /app/dist

# Expose the port 5173 (for Vite)
EXPOSE 5173

# Install 'serve' in the final image to make sure it’s available
RUN npm install -g serve

# Serve the app using 'serve' and bind it to port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
