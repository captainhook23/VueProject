# pull official base image
FROM node:16
# Set the working directory inside the container
WORKDIR /usr/src/vueproject/frontend
# Copy the rest of your application code to the container
COPY frontend .
# Install dependencies
RUN npm install
# Expose the port that your Node.js app is running on
EXPOSE 8081