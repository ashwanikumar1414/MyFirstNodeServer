FROM node:20

WORKDIR /app

# Install only production dependencies to keep image small
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

EXPOSE 3000

# Run as non-root user for better security (official node image provides 'node' user)
USER node

CMD ["node", "server.js"]