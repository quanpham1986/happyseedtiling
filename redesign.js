const fs = require('fs');

const filePath = 'index.html';
let html = fs.readFileSync(filePath, 'utf-8');

// 1. Add Google Fonts
const fontsLink = `
    <title>Happy Seed Tiling | Premium Tiler</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
`;
html = html.replace('<title>Happy Seed Tiling | Premium Tiler</title>', fontsLink);

// 2. The New Premium CSS
const newCSS = `
        :root {
            --bg-color: #050810;
            --surface-color: rgba(15, 23, 42, 0.5);
            --border-color: rgba(255, 215, 0, 0.15);
            --text-color: #f8fafc;
            --accent-color: #D4AF37; /* Gold */
            --accent-glow: rgba(212, 175, 55, 0.5);
            --gray: #94a3b8;
        }

        html {
            scroll-behavior: smooth;
        }
        
        body {
            background-color: var(--bg-color);
            background-image: 
                radial-gradient(at 0% 0%, rgba(212, 175, 55, 0.05) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.08) 0px, transparent 50%);
            color: var(--text-color);
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            line-height: 1.6;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Outfit', sans-serif;
            margin: 0;
        }

        /* Header (Sticky & Glassmorphism) */
        header {
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 5vw;
            background: rgba(5, 8, 16, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }
        
        .logo {
            font-family: 'Outfit', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            letter-spacing: -0.5px;
            color: #fff;
        }
        
        nav a {
            color: var(--text-color);
            text-decoration: none;
            margin: 0 1.5vw;
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: color 0.3s ease;
            position: relative;
        }

        nav a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            margin-top: 4px;
            right: 0;
            background: var(--accent-color);
            transition: width 0.3s ease;
            -webkit-transition: width 0.3s ease;
        }

        nav a:hover::after {
            width: 100%;
            left: 0;
            background: var(--accent-color);
        }
        
        nav a:hover { 
            color: var(--accent-color); 
        }

        .btn-talk {
            background-color: transparent;
            color: var(--accent-color);
            padding: 12px 28px;
            text-decoration: none;
            font-weight: 600;
            font-family: 'Outfit', sans-serif;
            border-radius: 30px;
            font-size: 1rem;
            border: 1px solid var(--accent-color);
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: inline-block;
        }

        .btn-talk:hover {
            background-color: var(--accent-color);
            color: #000;
            box-shadow: 0 0 25px var(--accent-glow);
            transform: translateY(-2px);
        }
        
        /* Hero Section */
        .hero {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 8vh 5vw;
            min-height: 80vh;
            position: relative;
        }
        
        .hero-text { 
            flex: 1; 
            min-width: 300px;
            z-index: 2;
        }
        
        .hero-text h3 {
            color: var(--accent-color);
            font-weight: 600;
            font-size: 1.2rem;
            margin-bottom: 2vh;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        
        .hero-text h1 {
            font-size: clamp(3.5rem, 8vw, 6.5rem);
            line-height: 1.05;
            font-weight: 800;
            background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 30px;
        }
        
        .hero-image {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            position: relative;
            min-width: 300px;
        }

        .hero-image::before {
            content: '';
            position: absolute;
            width: 120%;
            height: 120%;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
            top: -10%;
            left: -10%;
            z-index: -1;
            animation: pulseGlow 5s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
            0% { opacity: 0.5; transform: scale(0.9); }
            100% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .hero-image img {
            max-width: 100%;
            width: 450px;
            height: auto;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
            transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .hero-image img:hover {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-10px);
            box-shadow: 0 35px 60px -15px var(--accent-glow);
        }
        
        /* Marquee Ticker */
        .marquee-wrapper {
            background: linear-gradient(90deg, #B8860B, #FFD700, #D4AF37);
            padding: 20px 0;
            overflow: hidden;
            position: relative;
            width: 100vw;
            display: flex;
            transform: skewY(-2deg);
            margin: 40px 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
        .marquee {
            white-space: nowrap;
            color: #000;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: scroll 25s linear infinite;
            display: flex;
            align-items: center;
        }

        .marquee span {
            margin: 0 30px;
            display: inline-block;
        }
        
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        
        /* Portfolio Section */
        .portfolio {
            padding: 10vh 5vw;
        }
        
        .portfolio-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 60px;
            text-align: center;
        }
        
        .portfolio-title span { 
            color: var(--accent-color); 
            font-style: italic;
        }
        
        .project-group {
            margin-bottom: 80px;
            background: var(--surface-color);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 24px;
            border: 1px solid var(--border-color);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .project-group:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        
        .project-group h3 {
            font-size: 2.2rem;
            color: #fff;
            margin-bottom: 10px;
        }
        
        .project-group p { 
            color: var(--accent-color); 
            margin-bottom: 30px; 
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }
        
        .gallery img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            border-radius: 12px;
            opacity: 0.9;
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            filter: grayscale(20%);
        }
        
        .gallery img:hover {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.03);
            box-shadow: 0 15px 30px rgba(0,0,0,0.5);
            z-index: 10;
        }

        /* Contact Section updates inline */
        .contact-section {
            padding: 10vh 5vw !important; 
            background: radial-gradient(circle at bottom, rgba(212, 175, 55, 0.1) 0%, transparent 70%) !important;
            text-align: center; 
            border-top: 1px solid var(--border-color) !important;
        }

        .contact-card {
            display: inline-block; 
            text-align: left; 
            background: var(--surface-color) !important; 
            backdrop-filter: blur(10px);
            padding: 50px !important; 
            border-radius: 24px !important; 
            border: 1px solid var(--border-color) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            transition: transform 0.3s ease;
        }
        
        .contact-card:hover {
            transform: translateY(-5px);
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 40px;
            border-top: 1px solid rgba(255,255,255,0.05);
            color: var(--gray);
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            nav { display: none; } /* Simplified mobile for now */
            header { padding: 20px; }
            .hero-image img { transform: none; margin-top: 40px; }
            .marquee { font-size: 1.2rem; }
        }
`;

// Extract `<style>` till `</style>`
const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>') + 8;
html = html.substring(0, styleStart) + '<style>' + newCSS + '</style>' + html.substring(styleEnd);

// 3. Update the Logo with a beautiful SVG Gold abstract tile
const oldLogo = '<span>&#9650;</span>';
const newLogo = `<svg width="32" height="32" viewBox="0 0 24 24" fill="url(#goldGradient)" stroke="none" style="margin-right: 12px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
<defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFD700" />
        <stop offset="50%" stop-color="#D4AF37" />
        <stop offset="100%" stop-color="#996515" />
    </linearGradient>
</defs>
<path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5L6.5 12 12 6.5z"/>
</svg>`;
html = html.replace(oldLogo, newLogo);

// 4. Update the Marquee text to be seamless
const originalMarqueeText = '* Floor & Wall Tiling &nbsp;&nbsp; * Bathroom Renovations &nbsp;&nbsp; * Screeding & Waterproofing &nbsp;&nbsp; * Large Format Tiles &nbsp;&nbsp; * Mitre Cuts &nbsp;&nbsp; * Fully Insured';
// Creating a duplicated endless loop block
const newMarqueeBlock = `
            <span>✧ Floor & Wall Tiling</span> 
            <span>✧ Bathroom Renovations</span> 
            <span>✧ Screeding & Waterproofing</span> 
            <span>✧ Large Format Tiles</span> 
            <span>✧ Mitre Cuts</span> 
            <span>✧ Fully Insured</span>
            <span>✧ Premium Quality</span>
            <span>✧ Floor & Wall Tiling</span> 
            <span>✧ Bathroom Renovations</span> 
            <span>✧ Screeding & Waterproofing</span> 
            <span>✧ Large Format Tiles</span> 
            <span>✧ Mitre Cuts</span> 
            <span>✧ Fully Insured</span>
            <span>✧ Premium Quality</span>
`;
html = html.replace(originalMarqueeText, newMarqueeBlock);

// 5. Update Contact styling classes to hit my new overrides
const contactDivFind = '<div style="display: inline-block; text-align: left; background: #111; padding: 40px; border-radius: 15px; border-left: 5px solid var(--accent-color);">';
const contactDivReplace = '<div class="contact-card">';
html = html.replace(contactDivFind, contactDivReplace);

// Write changes back to file
fs.writeFileSync(filePath, html, 'utf-8');
console.log("Successfully redesigned index.html!");
