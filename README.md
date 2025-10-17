Project Overview: File Storage & Sharing App

Objective:
Build a web or mobile application that allows users to securely upload, store, and share files using cloud services.

Key Features:

Upload files to cloud storage (AWS S3).

List and view uploaded files.

Download files via secure links.

Optional: User authentication to restrict access.

AWS Services Used:

S3 → For storing files securely.

Lambda → Serverless backend to handle upload/download requests.

API Gateway → Exposes Lambda functions as REST API endpoints.

Cognito (Optional) → User registration and login.

DynamoDB (Optional) → Store file metadata (uploader, timestamp).

Workflow:

User selects a file from their device.

File is sent to a Lambda function via API Gateway.

Lambda uploads the file to S3.

Users can view the list of files or download via pre-signed URLs.

Outcome:
A serverless, scalable, and secure file storage system that can be used as a mini-project for learning AWS cloud services or as a portfolio project.Project Overview: File Storage & Sharing App

Objective:
Build a web or mobile application that allows users to securely upload, store, and share files using cloud services.

Key Features:

Upload files to cloud storage (AWS S3).

List and view uploaded files.

Download files via secure links.

Optional: User authentication to restrict access.

AWS Services Used:

S3 → For storing files securely.

Lambda → Serverless backend to handle upload/download requests.

API Gateway → Exposes Lambda functions as REST API endpoints.

Cognito (Optional) → User registration and login.

DynamoDB (Optional) → Store file metadata (uploader, timestamp).

Workflow:

User selects a file from their device.

File is sent to a Lambda function via API Gateway.

Lambda uploads the file to S3.

Users can view the list of files or download via pre-signed URLs.

Outcome:
A serverless, scalable, and secure file storage system that can be used as a mini-project for learning AWS cloud services or as a portfolio project.
