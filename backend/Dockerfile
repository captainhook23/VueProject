# Use an official Node.js runtime as a parent image
FROM node:16
# Set the working directory inside the container
WORKDIR /usr/src/vueproject/backend
# Copy package.json and package-lock.json to the container
COPY . .
# Install dependencies
RUN npm install
# Expose the port that your Node.js app is running on
EXPOSE 8080