# URL Shortener Backend 🔗

This project implements a robust backend service for shortening long URLs. It provides a simple and efficient way to create shorter, more manageable links that redirect users to their original destinations. The service utilizes a MongoDB database to store URL mappings and offers features like duplicate URL handling and input validation.

🚀 **Key Features**

*   **URL Shortening**: Converts long URLs into shorter, unique codes.
*   **URL Redirection**: Redirects users from shortened URLs to their original destinations.
*   **Duplicate URL Handling**: Returns the existing short URL if the original URL already exists in the database.
*   **Input Validation**: Normalizes input URLs by adding "http://" if necessary.
*   **Database Persistence**: Stores URL mappings in a MongoDB database for persistent storage.
*   **CORS Support**: Enables Cross-Origin Resource Sharing (CORS) for seamless integration with frontend applications.
*   **Environment Variable Configuration**: Uses environment variables for flexible configuration of database connection and server settings.

🛠️ **Tech Stack**

*   **Backend**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB
*   **ODM**: Mongoose
*   **Short ID Generation**: shortid
*   **CORS**: cors
*   **Environment Variables**: dotenv
*   **Build Tool**: npm

📦 **Getting Started**

### Prerequisites

*   Node.js (v18 or higher)
*   npm (Node Package Manager)
*   MongoDB installed and running

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd urlshortenerbackend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root directory and configure the following environment variables:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    PORT=3000
    BASE_URL=http://localhost:3000
    ```

    Replace `<your_mongodb_connection_string>` with your MongoDB connection string.

### Running Locally

1.  Start the server:

    ```bash
    npm start
    ```

    This will start the server on the port specified in your `.env` file (default: 3000).

💻 **Usage**

1.  **Shorten a URL**:

    Send a POST request to `/longUrl` with the long URL in the request body.

    Example (using `curl`):

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"longUrl": "https://www.example.com"}' http://localhost:3000/longUrl
    ```

    The server will respond with a JSON object containing the shortened URL.

2.  **Redirect to the Original URL**:

    Access the shortened URL in your browser. For example, if the shortened URL is `http://localhost:3000/abc123`, navigating to that URL will redirect you to `https://www.example.com`.

📂 **Project Structure**

```
urlshortenerbackend/
├── node_modules/
├── server.js          # Main server file
├── package.json       # Project metadata and dependencies
├── .env               # Environment variables
└── README.md          # Project documentation
```



🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.



📬 **Contact**

If you have any questions or suggestions, feel free to contact me at [daveeddaveedd@gmail.com](mailto:daveeddaveedd@gmail.com).

💖 **Thanks**

Thank you for checking out this project! I hope it's helpful.

