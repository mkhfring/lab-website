# Stage 1: Build the Angular Application
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular app with a basic http-server
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/dist/lab-app/ .

# Install http-server
RUN npm install -g http-server

# Expose port 8080
EXPOSE 3000

# Launch the server
CMD ["http-server", "-p", "3000"]
