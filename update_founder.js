const fs = require('fs');
const path = require('path');

const rootDir = "c:/Users/ASUS ROG F15/OneDrive/Desktop/Tiling Business";
const webDir = path.join(rootDir, "06_Marketing_Portfolio", "Website_Source");
const imgDir = path.join(webDir, "assets");

// Create assets directory if not exists
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

// Destination paths
const logoDest = path.join(imgDir, "logo.jpg");
const portraitDest = path.join(imgDir, "Hinhchandung.jpg");

// Source paths
const logoSrc = path.join(rootDir, "04_Templates_Assets", "logo.jpg");
const portraitSrc = path.join(rootDir, "01_Before_After_Photos", "Hinhchandung.jpg");

// Copy files
try {
    fs.copyFileSync(logoSrc, logoDest);
    fs.copyFileSync(portraitSrc, portraitDest);
    console.log("Images copied to assets successfully.");
} catch (err) {
    console.error("Error copying images:", err);
}

// Manipulate index.html
const indexPath = path.join(webDir, "index.html");
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Replace Logo SVG with Real Image
// Note: SVG might be in <div class="logo"> or similar. We look for <div class="logo">...</div>
const logoRegex = /<div class="logo">.*?<\/div>/s;
if (logoRegex.test(html)) {
    html = html.replace(logoRegex, `<div class="logo"><img src="assets/logo.jpg" alt="Happy Seed Tiling Logo" style="height: 65px; border-radius: 8px; object-fit: contain; box-shadow: 0 4px 10px rgba(212,175,55,0.2);"></div>`);
} else {
    console.log("Could not find logo class to replace, checking alternate forms...");
    const altLogoRegex = /<div class="logo-container">.*?<\/div>/s;
    if (altLogoRegex.test(html)) {
        html = html.replace(altLogoRegex, `<div class="logo-container"><img src="assets/logo.jpg" alt="Happy Seed Tiling Logo" style="height: 65px; border-radius: 8px;"></div>`);
    }
}

// 2. Inject Meet the Founder BEFORE the Contacts section OR Footer
const founderHtml = `
    <!-- Meet The Founder Section -->
    <section id="founder" style="padding: 100px 20px; background: linear-gradient(135deg, rgba(15,23,42,0.95), rgba(2,6,23,1)); position: relative;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; gap: 50px;">
            <div style="flex: 1; min-width: 300px; order: 1;">
                <img src="assets/Hinhchandung.jpg" alt="Quan Pham - Founder" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 2px solid rgba(212, 175, 55, 0.5);">
            </div>
            <div style="flex: 1.5; min-width: 350px; order: 2;">
                <h4 style="color: #d4af37; font-family: 'Outfit', sans-serif; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; font-weight: 600;">Meet The Founder</h4>
                <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.8rem; color: #ffffff; margin-bottom: 25px; line-height: 1.2;">QUAN PHAM</h2>
                <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                    Behind the pristine craftsmanship of Happy Seed Tiling is an unwavering commitment to <strong>structural precision and superior customer experience</strong>. 
                </p>
                <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                    Holding a <strong>Bachelor's degree in Electrical Engineering</strong> and backed by credentials in <strong>Aviation Maintenance</strong>, Quan approaches spatial planning and tile-laying with absolute mathematical accuracy. This engineering background ensures that complex elements—from floor screeding to waterproof membrane integrations—are executed flawlessly down to the millimeter.
                </p>
                <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
                    Beyond the technical expertise, Quan previously served as the <strong>General Manager of a Premium Motor Lodge</strong>. This transition into high-end hospitality ingrained a deep understanding of standard-setting service. When you hire Happy Seed Tiling, you don't just get a contractor; you receive the transparent communication, utmost respect for your property, and impeccable service normally reserved for 5-star guests.
                </p>
                <div style="display: flex; gap: 15px;">
                    <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 10px; padding: 15px; text-align: center; flex: 1;">
                        <i class="fas fa-graduation-cap" style="color: #d4af37; font-size: 1.5rem; margin-bottom: 10px;"></i>
                        <h5 style="color: #fff; font-size: 1rem;">Engineering Precision</h5>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 10px; padding: 15px; text-align: center; flex: 1;">
                        <i class="fas fa-star" style="color: #d4af37; font-size: 1.5rem; margin-bottom: 10px;"></i>
                        <h5 style="color: #fff; font-size: 1rem;">Hospitality Standard Service</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

if (!html.includes('id="founder"')) {
    // Inject right before Contact section
    if (html.includes('<section id="contact"')) {
        html = html.replace('<section id="contact"', founderHtml + '\n<section id="contact"');
    } else {
        html = html.replace('</body>', founderHtml + '\n</body>');
    }
}

fs.writeFileSync(indexPath, html);
console.log("Enhanced Website Source!");
