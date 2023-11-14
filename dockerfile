FROM node:18.16.0

# Create app directory 
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 5005
EXPOSE 5005

# Build app 
RUN npm run build

# Start app
CMD [ "npm", "start" ]