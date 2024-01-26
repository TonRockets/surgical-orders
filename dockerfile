# Use Node.js v20 LTS as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port that your NestJS application is running on (default is 3000)
EXPOSE 3000

CMD ["npm", "run", "start:prod"]
