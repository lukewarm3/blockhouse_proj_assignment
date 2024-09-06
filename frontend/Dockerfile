FROM node:18-alpine

WORKDIR /app/frontend-server

ENV PATH /app/frontend-server/node_modules/.bin:$PATH

COPY . .

# === Build the frontend ===
# Install dependencies
RUN npm install

# Expose port on which the server will on
EXPOSE 3000
CMD ["npm", "run", "dev"]