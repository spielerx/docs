# Use an official Rust base image
FROM rust:latest

# Create a new directory for the app
WORKDIR /usr/src/rustapp

# Copy the Cargo.toml and Cargo.lock files to the container
COPY Cargo.toml Cargo.lock ./

# Copy the source code to the container
COPY src ./src

# Build the app
RUN cargo build --release

# Expose the port that the app listens on
EXPOSE 8000

# Run the app
CMD ["cargo", "run", "--release"]
