#!/bin/sh

# Wait for database if needed (optional but recommended for production)
# echo "Waiting for postgres..."
# while ! nc -z $DB_HOST 5432; do
#   sleep 0.1
# done
# echo "PostgreSQL started"

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate

# Start server
echo "Starting server..."
exec "$@"
