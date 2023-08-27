# Use an official Node.js runtime as the base image
FROM node:14


# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY ./backend /user/src/vueproject/backend
COPY ./frontend /user/src/vueproject/frontend
