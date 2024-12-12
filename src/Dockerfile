# Use an official Nginx image to serve the app
FROM nginx:alpine

# Copy the build files to the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]