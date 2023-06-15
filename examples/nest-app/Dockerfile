# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install --production

# Copy the source code to the container
COPY . .

# Expose the port that the NestJS application will listen on
EXPOSE 3000

# Start the NestJS application
CMD [ "npm", "run", "start" ]