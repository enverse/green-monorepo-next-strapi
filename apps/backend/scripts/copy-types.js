const fs = require("fs-extra");
const path = require("path");

const BACKEND_TYPES_DIR = path.join(__dirname, "../types/generated");
const COMMON_TYPES_DIR = path.join(__dirname, "../../../packages/types/strapi");

async function copyTypes() {
  console.log("COMMON_TYPES_DIR ----------------------", COMMON_TYPES_DIR);
  try {
    // Clean existing types
    await fs.remove(path.join(COMMON_TYPES_DIR, "*.d.ts"));

    // Copy all type files
    await fs.copy(BACKEND_TYPES_DIR, COMMON_TYPES_DIR);

    console.log("Successfully copied types to common package");
  } catch (error) {
    console.error("Error copying types:", error);
    process.exit(1);
  }
}

copyTypes();
