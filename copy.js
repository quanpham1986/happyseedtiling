const fs = require('fs');
const path = require('path');

const dest = "c:/Users/ASUS ROG F15/OneDrive/Desktop/Tiling Business/06_Marketing_Portfolio/Website_Source/assets/Hinhchandung.jpg";
const src = "c:/Users/ASUS ROG F15/OneDrive/Desktop/Tiling Business/06_Marketing_Portfolio/01_Before_After_Photos/Hinhchandung.jpg";

try {
    fs.copyFileSync(src, dest);
    console.log("Copied portrait!");
} catch (err) {
    console.error(err);
}
