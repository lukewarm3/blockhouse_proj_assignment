# Use the official Python slim image
FROM python:3.12.4-slim

# Set the working directory in the container
WORKDIR /app/backend-server

# Copy the entire project to the container
COPY . .

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port 8000 (default port for Django development server)
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]