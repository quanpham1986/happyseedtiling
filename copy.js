const fs = require('fs');
const path = require('path');

const webDir = __dirname;
const rootDir = path.resolve(webDir, "..", "..", "..");

const dest = path.join(webDir, "assets", "Hinhchandung.jpg");
const src = path.join(rootDir, "07_Operations_Marketing", "03_Marketing_Outreach", "Marketing_Branding", "Marketing_Portfolio", "Before_After_Photos", "Hinhchandung.jpg");

try {
    fs.copyFileSync(src, dest);
    console.log("Copied portrait!");
} catch (err) {
    console.error(err);
}
