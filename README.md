# Image-Based Product Search Engine

## Overview
The Image-Based Product Search Engine is a full-stack web application that allows users to upload product images and search for matching items in a catalog using AI-powered image recognition. The app analyzes uploaded images to extract relevant tags and retrieves similar products from a database.

## Features
- **Image Upload**: Drag-and-drop interface for uploading product images.
- **AI Analysis**: Integrates with Google Gemini Vision API to generate descriptive tags from images (currently mocked for demo purposes).
- **Product Search**: Searches a MongoDB database for products matching the extracted tags.
- **Responsive UI**: Built with React and Ant Design for a modern, mobile-friendly interface.
- **Real-Time Results**: Displays search results in a grid layout with product details.

## Technology Stack
- **Frontend**: React.js with Ant Design UI components and Axios for API calls.
- **Backend**: Node.js with Express.js, handling file uploads via Multer and API routing.
- **Database**: MongoDB for storing product data, with Mongoose for schema management.
- **AI Integration**: Google Generative AI (Gemini) for image analysis (replaceable with actual API key).
- **Deployment**: Frontend on Netlify, backend on cloud platforms like Render or Heroku.
- **Version Control**: Git with GitHub for collaboration.

## Project Structure
```
SPOTMIES/
├── backend/
│   ├── models/          # MongoDB schemas (e.g., Product.js)
│   ├── routes/          # API endpoints (upload.js, search.js)
│   ├── scripts/         # Database seeding (seed.js)
│   ├── uploads/         # Temporary file storage
│   ├── server.js        # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.js       # Main app component
│   │   └── index.js
│   ├── public/          # Static assets
│   └── package.json
├── sample-data/         # Sample products JSON
├── README.md            # Project documentation
└── .gitignore
```

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone https://github.com/kartikeyapanndey/image-product-search.git
   cd image-product-search
   ```

2. **Backend Setup**:
   - Navigate to `backend/`: `cd backend`
   - Install dependencies: `npm install`
   - Set up environment variables in `.env` (MongoDB URI, Google API key).
   - Start MongoDB (local or Atlas).
   - Seed the database: `node scripts/seed.js`
   - Start the server: `npm start`

3. **Frontend Setup**:
   - Navigate to `frontend/`: `cd ../frontend`
   - Install dependencies: `npm install`
   - Start the dev server: `npm start`

4. **Access the App**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Deployment
- **Frontend**: Deployed on Netlify via GitHub integration. Build settings: Base directory `frontend`, Build command `npm run build`, Publish directory `build`.
- **Backend**: Deploy to Render, Heroku, or Railway. Set environment variables and start command `npm start`.
- Update frontend API calls to use the deployed backend URL.

## Usage
1. Open the app in a browser.
2. Upload an image of a product.
3. Click "Search" to analyze the image and view matching products.
4. Results display in a card grid with images, names, descriptions, and prices.

## Future Enhancements
- Integrate real Google Gemini API for accurate image tagging.
- Add user authentication and personalized catalogs.
- Implement advanced search filters (e.g., by category, price).
- Optimize for performance with image compression and caching.

## Contributing
Contributions are welcome! Fork the repo, make changes, and submit a pull request. Ensure code follows ESLint rules and includes tests.

## License
This project is open-source under the MIT License.

For more details, visit the [GitHub repository](https://github.com/kartikeyapanndey/image-product-search).