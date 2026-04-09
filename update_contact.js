const fs = require('fs');

const file_path = 'index.html';
let html = fs.readFileSync(file_path, 'utf-8');

const contactSection = `
    <div class="contact-section" id="contact" style="padding: 80px 50px; background: #0a0a0a; text-align: center; border-top: 1px solid #222;">
        <h2 class="portfolio-title" style="margin-bottom: 20px;">Get In <span>Touch</span></h2>
        <p style="color: var(--gray); font-size: 1.2rem; margin-bottom: 30px;">Contact us today for a free quote on your next tiling project.</p>
        <div style="display: inline-block; text-align: left; background: #111; padding: 40px; border-radius: 15px; border-left: 5px solid var(--accent-color);">
            <p style="font-size: 1.5rem; font-weight: bold; margin: 10px 0;">📞 <a href="tel:0491754808" style="color: var(--accent-color); text-decoration: none;">0491 754 808</a></p>
            <p style="font-size: 1.2rem; margin: 15px 0;">✉️ <a href="mailto:happyseedwa@gmail.com" style="color: var(--text-color); text-decoration: none;">happyseedwa@gmail.com</a></p>
            <p style="font-size: 1.2rem; margin: 15px 0;">✉️ <a href="mailto:quanpham1986@gmail.com" style="color: var(--text-color); text-decoration: none;">quanpham1986@gmail.com</a></p>
            <p style="color: var(--gray); margin-top: 20px; font-size: 1.1rem;">📍 Servicing Bunbury & South West WA</p>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">👤 Tiler: Quan Pham / Chris Vincent</p>
        </div>
    </div>

    <footer>`;

if (!html.includes('id="contact"')) {
    html = html.replace('    <footer>', contactSection);
    fs.writeFileSync(file_path, html, 'utf-8');
    console.log("Contact section added successfully.");
} else {
    console.log("Contact section already exists.");
}
