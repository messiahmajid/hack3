# ScamSpot Backend Service

A robust backend service for detecting and analyzing potential scams across different communication channels. The service implements multiple layers of analysis including URL risk assessment, sentiment analysis, image processing, and scam message detection.

## Features

- **URL Risk Analysis**
  - Multi-layered URL validation
  - Integration with Google Safe Browsing API
  - Machine learning-based URL classification
  - Historical tracking of malicious URLs

- **Message Analysis**
  - Sentiment analysis using Azure Text Analytics
  - Scam pattern detection using OpenAI GPT-4
  - Decision tree-based message classification
  - Conversation context analysis

- **Image Processing**
  - Support for JPEG, PNG, and GIF formats
  - Message extraction from images
  - Automated cleanup of processed files

- **Authentication**
  - Google OAuth integration
  - Session management
  - User profile handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Azure Cognitive Services account
- OpenAI API key
- Google Cloud Platform account (for Safe Browsing API)

## Environment Variables

```env
OPENAI=your_openai_api_key
MONGODB_URI=your_mongodb_connection_string
AZURE_TEXT_ANALYTICS_KEY=your_azure_key
AZURE_TEXT_ANALYTICS_ENDPOINT=your_azure_endpoint
GOOGLE_SAFE_BROWSING_API_KEY=your_google_api_key
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables
4. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /auth/google-login` - Google OAuth login
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile

### URL Analysis
- `POST /validate-url` - Analyze URLs for potential risks
  ```json
  {
    "urls": [
      {"url": "https://example.com"}
    ]
  }
  ```

### Image Analysis
- `POST /analyze` - Process and analyze images for scam detection
  - Accepts multipart/form-data with 'image' field
  - Supports JPEG, PNG, GIF (max 5MB)

## Security Features

- CORS protection with whitelisted origins
- Session management with secure cookies
- File upload restrictions and validation
- Automated cleanup of processed files
- Rate limiting (implementation required)

## Architecture

The service implements a multi-layered analysis approach:

1. **URL Analysis Pipeline**
   - Local heuristic analysis
   - Google Safe Browsing API check
   - Machine learning classification
   - Historical risk database

2. **Message Analysis Pipeline**
   - Sentiment analysis
   - Scam pattern detection
   - Context-aware classification
   - Final risk assessment

## Error Handling

The service implements comprehensive error handling with:
- Input validation
- API error management
- File processing safeguards
- Database operation error handling

## Database Schema

The service uses MongoDB with the following main collections:
- Users (authentication and profiles)
- BadLinks (tracked malicious URLs)
- Additional collections as needed

## Limitations

- Maximum file size: 5MB for images
- Supported image formats: JPEG, PNG, GIF
- API rate limits may apply
- Requires active internet connection for external API calls

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

