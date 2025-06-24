const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function generateKey(length = 32) {
  return crypto.randomBytes(length).toString("base64");
}

function generateAppKeys() {
  return Array.from({ length: 4 }, () => generateKey()).join(",");
}

const envContent = `# Generated automatically - DO NOT COMMIT TO VERSION CONTROL

# Strapi environment variables
HOST=0.0.0.0
PORT=1337
APP_KEYS=${generateAppKeys()}
API_TOKEN_SALT=${generateKey()}
ADMIN_JWT_SECRET=${generateKey()}
TRANSFER_TOKEN_SALT=${generateKey()}
ENCRYPTION_KEY=${generateKey()}

# Database configuration
DATABASE_CLIENT=postgres
DATABASE_HOST=green-cms-db-development
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false
`;

// Create the backend directory path
const backendPath = path.join(__dirname, "..");
const envFilePath = path.join(backendPath, ".env");

// Ensure the backend directory exists
if (!fs.existsSync(backendPath)) {
  console.error("❌ Backend directory not found at:", backendPath);
  process.exit(1);
}

// Write the .env file
try {
  fs.writeFileSync(envFilePath, envContent);
  console.log("✅ Environment file generated successfully at:", envFilePath);
} catch (error) {
  console.error("❌ Error writing .env file:", error.message);
  process.exit(1);
}
