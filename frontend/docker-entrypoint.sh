#!/bin/bash
set -e

# Replace environment variables in the nginx config
envsubst '${BACKEND_URL}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Extract host from BACKEND_URL (assumes format http://host:port)
BACKEND_HOST=$(echo $BACKEND_URL | awk -F[/:] '{print $4}')

# Wait for backend to be available
echo "Waiting for backend ($BACKEND_HOST) to be available..."
until ping -c 1 $BACKEND_HOST > /dev/null 2>&1; do
  echo "Backend not available yet, retrying in 2 seconds..."
  sleep 2
done
echo "Backend is available, starting Nginx..."

# Start nginx
exec nginx -g 'daemon off;'
