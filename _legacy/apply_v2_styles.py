import re

with open('v2/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update root variables for dark mode + neon colors
root_replacements = {
    '--navy:       #2D2A77;': '--navy:       #00E5FF;',
    '--navy-dark:  #1e1c55;': '--navy-dark:  #020617;',
    '--navy-light: #3d3a8e;': '--navy-light: #0B1A30;',
    '--lime:       #82C341;': '--lime:       #B026FF;',
    '--lime-dark:  #6aA035;': '--lime-dark:  #8b5cf6;',
    '--lime-light: #9fd458;': '--lime-light: #c4b5fd;',
    '--bg:         #F8F9FA;': '--bg:         #030712;',
    '--charcoal:   #333333;': '--charcoal:   #E2E8F0;',
    '--white:      #ffffff;': '--white:      rgba(255, 255, 255, 0.03);',
    '--font-head:  \'Montserrat\', sans-serif;': '--font-head:  \'Orbitron\', sans-serif;'
}

for old, new in root_replacements.items():
    css = css.replace(old, new)

# 2. Add Orbitron @import at the top
orbitron_import = "@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');\n"
if "@import" not in css:
    css = orbitron_import + css

# 3. Increase line-height and letter-spacing globally
css = css.replace('line-height: 1.6;', 'line-height: 1.8; letter-spacing: 0.03em;')
css = css.replace('line-height: 1.7;', 'line-height: 1.9; letter-spacing: 0.03em;')
css = css.replace('line-height: 1.8;', 'line-height: 2.0; letter-spacing: 0.03em;')

# 4. Append specific Anti-Gravity Theme rules at the bottom
v2_additions = """
/* ── V2 ANTI-GRAVITY OVERRIDES ────────────────────────── */
body {
    background: var(--bg);
    color: #E2E8F0;
}

/* Typography tweaks */
h1, h2, h3, h4, .section-title, .hero__title, .stat-number {
    font-family: var(--font-head) !important;
    text-transform: uppercase;
    letter-spacing: 0.1em !important;
}

/* Override sections with hardcoded whites/bgs */
.about, .services, .operations, .industries, .why-us, .contact {
    background: transparent !important;
}

.about__content, .contact-info-card {
    background: rgba(255, 255, 255, 0.03) !important;
    backdrop-filter: blur(16px) !important;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-lg);
    padding: 30px;
}

.section-title { color: #E2E8F0 !important; }
.text-lime { color: var(--lime) !important; text-shadow: 0 0 10px rgba(176, 38, 255, 0.6); }

/* Glassmorphism for Navigation */
.navbar.scrolled, .mobile-menu {
    background: rgba(3, 7, 18, 0.7) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(0, 229, 255, 0.2);
}
.navbar.scrolled .nav-link { color: #E2E8F0 !important; }

/* Glassmorphism for Cards */
.service-card, .industry-card, .stat-card, .op-stat, .contact-detail__icon, .value-icon {
    background: rgba(255, 255, 255, 0.03) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    color: #E2E8F0 !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
}
.service-card__body h3, .industry-card span, .op-stat strong, .contact-detail strong, .value-item strong {
    color: #E2E8F0 !important;
}
.service-card__body p, .op-stat p, .contact-detail p, .value-item p {
    color: #94A3B8 !important;
}

/* Anti-Gravity Hover Lift & Glow */
.service-card:hover, .industry-card:hover, .op-stat:hover {
    transform: translateY(-12px) !important;
    border-color: var(--navy) !important;
    box-shadow: 0 15px 35px rgba(0, 229, 255, 0.2) !important;
}

/* Button Glows */
.btn--primary {
    background: transparent !important;
    border: 1px solid var(--navy) !important;
    color: var(--navy) !important;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2), inset 0 0 10px rgba(0, 229, 255, 0.1);
}
.btn--primary:hover {
    background: var(--navy) !important;
    color: #030712 !important;
    box-shadow: 0 0 20px var(--navy), 0 0 40px var(--navy) !important;
    transform: translateY(-4px) !important;
}

.btn--outline {
    border-color: var(--lime) !important;
    color: var(--lime) !important;
}
.btn--outline:hover {
    background: var(--lime) !important;
    color: #030712 !important;
    box-shadow: 0 0 20px var(--lime), 0 0 40px var(--lime) !important;
    transform: translateY(-4px) !important;
}

/* Floating Animations */
@keyframes floatGentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.about__img-main img, 
.about__img-secondary img, 
.why-us__image img, 
.service-icon, 
.industry-card__icon {
    animation: floatGentle 6s ease-in-out infinite !important;
}

.service-icon, .industry-card__icon, .op-stat__icon {
    background: rgba(0, 229, 255, 0.1) !important;
    color: var(--navy) !important;
    border: 1px solid var(--navy);
}

/* Form Elements Glass */
.form-group input, .form-group select, .form-group textarea {
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
    color: #E2E8F0 !important;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--navy) !important;
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.3) !important;
}
.form-group label { color: #94A3B8 !important; }

/* Keep footers dark */
.footer {
    background: #020617 !important;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* Fix text colors */
p { color: #94A3B8 !important; }
"""

css += v2_additions

with open('v2/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("V2 anti-gravity styling applied successfully.")
