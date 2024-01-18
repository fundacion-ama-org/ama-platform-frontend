const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "./src/environments/environment.ts";
const fileContent = `
export const environment = {
  base_url: "${process.env["PLATFORM_AMA_API_URL"]}"
}; 
`;

mkdirSync("./src/environments", { recursive: true });

writeFileSync(targetPath, fileContent);
