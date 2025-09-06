# API Documentation

FleetFlow SaaS Platform API Reference

## Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Base URL](#base-url)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Endpoints](#endpoints)
  - [Authentication](#authentication-endpoints)
  - [Fleet Management](#fleet-management)
  - [Vehicle Tracking](#vehicle-tracking)
  - [Package Management](#package-management)
  - [Driver Management](#driver-management)
  - [Reports](#reports)

## Overview

The FleetFlow API provides programmatic access to fleet management functionality. This RESTful API allows you to manage vehicles, drivers, packages, and track deliveries in real-time.

### Current Status
🚧 **Note**: This is a frontend-only implementation. The API endpoints described below are planned for future implementation.

## Authentication

All API requests require authentication using Bearer tokens.

```bash
Authorization: Bearer <your-token>
```

### Getting Started
1. Register for an account at `/register`
2. Login at `/login` to receive your access token
3. Include the token in all API requests

## Base URL

```
Production: https://fleet-management-saas.vercel.app/api
Development: http://localhost:3000/api
```

## Response Format

All responses follow a consistent JSON format:

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully",
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

## Error Handling

### HTTP Status Codes

| Status | Description |
|--------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

### Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Input validation failed |
| `AUTHENTICATION_FAILED` | Invalid credentials |
| `AUTHORIZATION_FAILED` | Insufficient permissions |
| `RESOURCE_NOT_FOUND` | Requested resource not found |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `INTERNAL_ERROR` | Server error |

## Rate Limiting

API requests are limited to:
- **Free Plan**: 1,000 requests per hour
- **Pro Plan**: 10,000 requests per hour
- **Enterprise**: Custom limits

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248600
```

## Endpoints

### Authentication Endpoints

#### POST /api/auth/login
Authenticate user and receive access token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "admin"
    }
  }
}
```

#### POST /api/auth/register
Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "securePassword123",
  "company": "Acme Corp"
}
```

#### POST /api/auth/logout
Invalidate current session token.

### Fleet Management

#### GET /api/fleet/vehicles
Get list of vehicles in fleet.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `status` (optional): Filter by status (active, maintenance, inactive)
- `type` (optional): Filter by vehicle type (truck, van, car)

**Response:**
```json
{
  "success": true,
  "data": {
    "vehicles": [
      {
        "id": "vehicle_123",
        "plateNumber": "ABC-1234",
        "type": "truck",
        "status": "active",
        "driver": {
          "id": "driver_456",
          "name": "Jane Smith"
        },
        "location": {
          "lat": 40.7128,
          "lng": -74.0060,
          "address": "New York, NY"
        },
        "fuel": 75,
        "mileage": 45234
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "pages": 3
    }
  }
}
```

#### GET /api/fleet/vehicles/:id
Get specific vehicle details.

#### POST /api/fleet/vehicles
Add new vehicle to fleet.

**Request Body:**
```json
{
  "plateNumber": "XYZ-5678",
  "type": "van",
  "make": "Ford",
  "model": "Transit",
  "year": 2023,
  "capacity": 1000,
  "fuelType": "diesel"
}
```

#### PUT /api/fleet/vehicles/:id
Update vehicle information.

#### DELETE /api/fleet/vehicles/:id
Remove vehicle from fleet.

### Vehicle Tracking

#### GET /api/tracking/vehicles/:id/location
Get real-time vehicle location.

**Response:**
```json
{
  "success": true,
  "data": {
    "vehicleId": "vehicle_123",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060,
      "accuracy": 5,
      "timestamp": "2024-01-15T10:30:00Z"
    },
    "speed": 45,
    "heading": 180,
    "status": "in_transit"
  }
}
```

#### GET /api/tracking/vehicles/:id/history
Get vehicle location history.

**Query Parameters:**
- `from`: Start date (ISO 8601)
- `to`: End date (ISO 8601)
- `interval`: Data interval (1m, 5m, 15m, 1h)

### Package Management

#### GET /api/packages
Get list of packages.

**Query Parameters:**
- `status` (optional): Filter by status (pending, in_transit, delivered, failed)
- `driver` (optional): Filter by driver ID
- `date` (optional): Filter by date range

**Response:**
```json
{
  "success": true,
  "data": {
    "packages": [
      {
        "id": "package_789",
        "trackingNumber": "FLT123456789",
        "status": "in_transit",
        "sender": {
          "name": "Acme Corp",
          "address": "123 Business St, NY"
        },
        "recipient": {
          "name": "John Customer",
          "address": "456 Home Ave, NY"
        },
        "driver": {
          "id": "driver_456",
          "name": "Jane Smith"
        },
        "estimatedDelivery": "2024-01-16T14:00:00Z",
        "timeline": [
          {
            "status": "picked_up",
            "timestamp": "2024-01-15T09:00:00Z",
            "location": "Warehouse A"
          }
        ]
      }
    ]
  }
}
```

#### GET /api/packages/:id
Get specific package details.

#### POST /api/packages
Create new package delivery.

#### PUT /api/packages/:id/status
Update package status.

**Request Body:**
```json
{
  "status": "delivered",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  },
  "notes": "Package delivered to front door",
  "signature": "base64_signature_data"
}
```

### Driver Management

#### GET /api/drivers
Get list of drivers.

#### GET /api/drivers/:id
Get specific driver details.

#### POST /api/drivers
Add new driver.

#### GET /api/drivers/:id/assignments
Get driver's current assignments.

#### POST /api/drivers/:id/assignments
Assign packages to driver.

### Reports

#### GET /api/reports/fleet-performance
Get fleet performance metrics.

**Query Parameters:**
- `period`: Time period (day, week, month, year)
- `from`: Start date
- `to`: End date

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalVehicles": 25,
      "activeVehicles": 22,
      "totalMiles": 125430,
      "fuelConsumption": 8234.5,
      "deliveries": 1245
    },
    "efficiency": {
      "milesPerGallon": 15.2,
      "deliveriesPerVehicle": 56.6,
      "onTimeDeliveryRate": 94.2
    }
  }
}
```

#### GET /api/reports/driver-metrics
Get driver performance metrics.

#### GET /api/reports/cost-analysis
Get cost analysis and financial reports.

## WebSocket Events

For real-time updates, connect to the WebSocket endpoint:

```javascript
const ws = new WebSocket('wss://fleet-management-saas.vercel.app/ws');

// Subscribe to vehicle updates
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'vehicle_location',
  vehicleId: 'vehicle_123'
}));

// Listen for location updates
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'location_update') {
    console.log('Vehicle location:', data.location);
  }
};
```

### Available Channels
- `vehicle_location` - Real-time vehicle tracking
- `package_status` - Package status updates
- `fleet_alerts` - Fleet-wide notifications

## SDKs and Libraries

### JavaScript/Node.js
```bash
npm install @fleetflow/sdk
```

```javascript
import FleetFlow from '@fleetflow/sdk';

const client = new FleetFlow({
  apiKey: 'your-api-key',
  environment: 'production'
});

const vehicles = await client.fleet.getVehicles();
```

### Python
```bash
pip install fleetflow-python
```

```python
from fleetflow import FleetFlow

client = FleetFlow(api_key='your-api-key')
vehicles = client.fleet.get_vehicles()
```

## Webhooks

Configure webhooks to receive real-time notifications:

```json
{
  "url": "https://your-app.com/webhooks/fleetflow",
  "events": ["package.delivered", "vehicle.maintenance_due"],
  "secret": "webhook-secret"
}
```

### Event Types
- `package.created`
- `package.in_transit`
- `package.delivered`
- `package.failed`
- `vehicle.maintenance_due`
- `vehicle.location_update`
- `driver.shift_started`
- `driver.shift_ended`

## Testing

### Sandbox Environment
Use the sandbox environment for testing:
```
Base URL: https://fleet-management-saas.vercel.app/api
```

### Test Data
The sandbox includes sample data for testing all endpoints.

## Support

- **Documentation**: [https://fleet-management-saas.vercel.app/docs](https://fleet-management-saas.vercel.app/docs)
- **Support Email**: support@fleetflow.app
- **GitHub Issues**: [https://github.com/mustaque01/fleet-management-saas/issues](https://github.com/mustaque01/fleet-management-saas/issues)

## Changelog

See [CHANGELOG.md](../CHANGELOG.md) for API version history and breaking changes.
