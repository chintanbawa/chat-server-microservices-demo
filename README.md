# Chat Server Microservices Demo

A modern chat application built using a microservices architecture with Node.js. This project demonstrates the implementation of a scalable and maintainable chat system using microservices principles.

## Architecture

The application is composed of the following microservices:

- **User Service** (Port: 8081)
  - Handles user authentication and management
  - User profile operations
  - User-related data storage

- **Chat Service** (Port: 8082)
  - Manages chat rooms and messages
  - Real-time message handling
  - Chat history and persistence

- **Notification Service** (Port: 8083)
  - Handles real-time notifications
  - Push notifications
  - User alerts

- **API Gateway** (Port: 8080)
  - Nginx-based reverse proxy
  - Routes requests to appropriate services
  - Load balancing

## Technology Stack

- **Backend**: Node.js
- **Database**: MongoDB
- **Message Broker**: RabbitMQ
- **Reverse Proxy**: Nginx
- **Containerization**: Docker
- **Networking**: Docker Networks
- **Volumes**: Docker Volumes

## Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chat-server-microservices-demo
   ```

2. Start the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. The services will be available at:
   - API Gateway: http://localhost:8080
   - User Service: http://localhost:8081
   - Chat Service: http://localhost:8082
   - Notification Service: http://localhost:8083

## Project Structure

```
.
├── docker-compose.yml
├── nginx/
├── gateway/
├── notification-service/
├── chat-service/
└── user-service/
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 