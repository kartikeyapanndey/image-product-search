# Image-Based Product Search Engine

A full-stack application that allows users to upload product images and search for matching catalog items using AI-powered image recognition.

## Technologies Used

- **Frontend**: React.js with Ant Design
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **AI**: Google Gemini Vision API

## Features

- Upload product images
- AI extracts labels and attributes from images
- Search catalog items based on image tags
- Responsive grid display of search results

## Setup

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- Google Gemini API key

### Installation

1. Clone the repository
2. Install frontend dependencies: `cd frontend && npm install`
3. Install backend dependencies: `cd backend && npm install`
4. Set up environment variables (see .env.example)
5. Start MongoDB
6. Start backend: `cd backend && npm run dev`
7. Start frontend: `cd frontend && npm start`

## Usage

1. Upload an image of a product
2. The AI analyzes the image and extracts tags
3. Search results are displayed in a grid

## API Endpoints

- POST /api/upload - Upload image and get tags
- GET /api/search?tags=tag1,tag2 - Search products by tags

## Sample Data

Sample catalog data and images are provided in the `sample-data` directory.