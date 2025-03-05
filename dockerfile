# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies for TailwindCSS)
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the Next.js app runs on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
