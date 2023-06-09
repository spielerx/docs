# Use an official Go runtime as the base image
FROM golang:1.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the source code to the container
COPY . .

# Build the Go app
RUN go build -o main .

# Expose the port that the app listens on
EXPOSE 8000

# Run the Go app
CMD ["./main"]
