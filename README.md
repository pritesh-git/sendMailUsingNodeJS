# Node.js Email Sender with SendGrid

This project is a Node.js application that uses the SendGrid API to send emails to multiple recipients. It reads email data from a JSON file and sends emails with attachments.

## Project Overview

This project demonstrates how to:

* Use the SendGrid API to send emails from a Node.js application.
* Read email data (recipients, subject, body, attachments) from a JSON file.
* Send emails to multiple recipients with attachments.
* Handle successful and failed email sends.
* Set up a basic Express.js server to handle email-sending requests.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for Node.js.
* **SendGrid:** Cloud-based email delivery service.
* **@sendgrid/mail:** SendGrid's Node.js library.

## Prerequisites

* **Node.js and npm:** Ensure Node.js and npm are installed on your system.
* **SendGrid Account:**
    * Create a SendGrid account.
    * Obtain your SendGrid API key from your account settings.
* **Project Setup:**
    * Clone the repository or create a new Node.js project.
    * Install the required dependencies:

    ```bash
    npm install express @sendgrid/mail
    ```

## Getting Started

1.  **Configure SendGrid API Key:**
    * In the `app.js` file, replace `'SG.5d1bz_pAQ7aLFgnfnJoDvTA.yRjilS2j_DUTMsrwtZ5ghyjHzPYukohd-hqkUoHsi2Ec'` with your actual SendGrid API key.
2.  **Update Email Data:**
    * Modify the `MailData.json` file to include the desired recipient email addresses, subject, body, and attachment details.
3.  **Start the Server:**

    ```bash
    node app.js
    ```

4.  **Send Email:**
    * Make a GET request to the server's root URL (e.g., `http://localhost:5000/`) using a web browser or a tool like Postman.
5.  **Check Server Logs:**
    * The server will log the success or failure status of each email sent.
    * The API response will also include details about successful and failed email sends.

## Code Structure

* **`app.js`:**
    * Sets up the Express.js server.
    * Reads email data from `MailData.json`.
    * Sends emails using the SendGrid API.
    * Handles API responses and errors.
* **`MailData.json`:**
    * Contains the data for the emails to be sent, including recipients, subject, body, and attachments.

## Notes

* The code uses a hardcoded SendGrid API key for demonstration purposes. In a production environment, consider using environment variables or other secure methods for handling sensitive information.
* The code includes basic error handling, but you can add more robust error handling and logging for production use.
* You can customize the email content and attachments by modifying the `MailData.json` file.
* The code sends emails to a list of recipients. You can modify it to send individual emails if needed.

## Contributing

Feel free to contribute to this project by submitting pull requests.

## License

This project is open-source and available under the MIT License.
