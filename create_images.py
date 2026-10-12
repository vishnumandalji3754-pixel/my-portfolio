import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('assets/images', exist_ok=True)

def create_rounded_rect(draw, box, radius, fill, outline=None, width=1):
    x0, y0, x1, y1 = box
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill, outline=outline, width=width)

# 1. Profile Image: Elegant stylized avatar with dark tech aesthetic
def generate_profile():
    w, h = 600, 600
    img = Image.new('RGB', (w, h), color='#0f172a')
    draw = ImageDraw.Draw(img)

    # Ambient radial gradient effect
    for r in range(250, 0, -10):
        alpha = int(25 * (1 - r / 250))
        # Subtle violet aura
        draw.ellipse([w//2 - r, h//2 - r, w//2 + r, h//2 + r], fill=(15 + int(r*0.1), 23 + int(r*0.15), 42 + int(r*0.3)))

    # Circle background for avatar
    avatar_radius = 180
    cx, cy = w // 2, h // 2 - 20
    draw.ellipse([cx - avatar_radius, cy - avatar_radius, cx + avatar_radius, cy + avatar_radius], fill='#1e293b', outline='#6366f1', width=4)

    # Stylized developer figure
    # Head
    draw.ellipse([cx - 60, cy - 80, cx + 60, cy + 40], fill='#cbd5e1')
    # Hair / modern cut
    draw.chord([cx - 65, cy - 95, cx + 65, cy + 10], start=180, end=360, fill='#334155')
    # Glasses
    draw.rectangle([cx - 48, cy - 35, cx - 12, cy - 15], outline='#6366f1', width=3)
    draw.rectangle([cx + 12, cy - 35, cx + 48, cy - 15], outline='#6366f1', width=3)
    draw.line([cx - 12, cy - 25, cx + 12, cy - 25], fill='#6366f1', width=3)
    # Smile
    draw.arc([cx - 20, cy, cx + 20, cy + 20], start=20, end=160, fill='#334155', width=3)

    # Shoulders / Hoodie
    draw.pieslice([cx - 140, cy + 30, cx + 140, cy + 240], start=190, end=350, fill='#475569')
    draw.polygon([(cx - 30, cy + 60), (cx + 30, cy + 60), (cx, cy + 130)], fill='#1e293b')

    # Code badge below
    create_rounded_rect(draw, (cx - 140, h - 110, cx + 140, h - 50), 20, fill='#111827', outline='#8b5cf6', width=2)
    draw.text((cx - 85, h - 90), "< Frontend Dev />", fill='#38bdf8')

    img.save('assets/images/profile.jpg', quality=95)
    print("Profile image generated.")

# Helper to draw browser window frame
def draw_browser_frame(draw, w, h, title, category_color):
    # Window base
    create_rounded_rect(draw, (20, 20, w - 20, h - 20), 16, fill='#111827', outline='#334155', width=2)
    # Header bar
    create_rounded_rect(draw, (20, 20, w - 20, 75), 16, fill='#1e293b')
    draw.rectangle([20, 55, w - 20, 75], fill='#1e293b')
    draw.line([20, 75, w - 20, 75], fill='#334155', width=2)

    # Window dots
    draw.ellipse([40, 42, 52, 54], fill='#ef4444')
    draw.ellipse([60, 42, 72, 54], fill='#f59e0b')
    draw.ellipse([80, 42, 92, 54], fill='#10b981')

    # URL bar
    create_rounded_rect(draw, (110, 36, w - 40, 60), 8, fill='#0f172a', outline='#334155', width=1)
    draw.text((125, 41), f"https://portfolio.local/projects/{title.lower().replace(' ', '-')}", fill='#94a3b8')

# 2. Chocolate Store
def generate_chocolate():
    w, h = 800, 450
    img = Image.new('RGB', (w, h), color='#0a0e17')
    draw = ImageDraw.Draw(img)
    draw_browser_frame(draw, w, h, "Chocolate Store", "#eab308")

    # Content area
    # Hero banner
    create_rounded_rect(draw, (50, 95, w - 50, 230), 12, fill='#261c14', outline='#78350f', width=1)
    draw.text((80, 120), "ARTISAN CHOCOLATIER", fill='#d97706')
    draw.text((80, 145), "Handcrafted Truffles & Single-Origin Cacao", fill='#fef3c7')
    create_rounded_rect(draw, (80, 180, 180, 212), 6, fill='#d97706')
    draw.text((100, 189), "Shop Collection", fill='#ffffff')

    # 3 Product mini cards
    card_w = 215
    for i, (title, price) in enumerate([("Dark Ganache 85%", "$18.50"), ("Hazelnut Praline", "$22.00"), ("Ruby Velvet Box", "$26.00")]):
        bx = 50 + i * (card_w + 25)
        by = 250
        create_rounded_rect(draw, (bx, by, bx + card_w, by + 160), 10, fill='#1e293b', outline='#334155', width=1)
        # thumbnail
        create_rounded_rect(draw, (bx + 12, by + 12, bx + card_w - 12, by + 85), 6, fill='#3d271d')
        draw.text((bx + 15, by + 98), title, fill='#f8fafc')
        draw.text((bx + 15, by + 124), price, fill='#fbbf24')
        create_rounded_rect(draw, (bx + card_w - 45, by + 120, bx + card_w - 15, by + 145), 4, fill='#6366f1')
        draw.text((bx + card_w - 38, by + 126), "+", fill='#ffffff')

    img.save('assets/images/project-chocolate.jpg', quality=95)
    print("Chocolate project image generated.")

# 3. Notes App
def generate_notes():
    w, h = 800, 450
    img = Image.new('RGB', (w, h), color='#0a0e17')
    draw = ImageDraw.Draw(img)
    draw_browser_frame(draw, w, h, "Notes Application", "#3b82f6")

    # Sidebar
    create_rounded_rect(draw, (40, 95, 230, h - 40), 10, fill='#1e293b', outline='#334155', width=1)
    draw.text((60, 115), "QUICK NOTES", fill='#6366f1')
    
    # Sidebar items
    items = ["All Notes (14)", "Work & Projects (6)", "Personal Ideas (5)", "Archive (3)"]
    for i, item in enumerate(items):
        bg = '#334155' if i == 0 else '#1e293b'
        create_rounded_rect(draw, (55, 145 + i * 40, 215, 175 + i * 40), 6, fill=bg)
        draw.text((65, 152 + i * 40), item, fill='#f8fafc' if i == 0 else '#94a3b8')

    # Main note edit area
    create_rounded_rect(draw, (250, 95, w - 40, h - 40), 10, fill='#111827', outline='#334155', width=1)
    draw.text((275, 115), "Product Launch Checklist & Architecture", fill='#f8fafc')
    draw.line([275, 145, w - 65, 145], fill='#334155', width=1)

    # Note bullets
    notes = [
        "[X] Finalize Bootstrap 5 Grid layout & CSS variables",
        "[X] Verify WCAG color contrast & keyboard navigation",
        "[ ] Implement search indexing for quick notes filter",
        "[ ] Connect LocalStorage persistence module"
    ]
    for i, line in enumerate(notes):
        draw.text((275, 165 + i * 36), line, fill='#38bdf8' if '[X]' in line else '#94a3b8')

    # Tags at bottom
    tags = ["#frontend", "#javascript", "#productivity"]
    for i, t in enumerate(tags):
        tx = 275 + i * 110
        create_rounded_rect(draw, (tx, 345, tx + 95, 375), 14, fill='#1e1b4b', outline='#6366f1', width=1)
        draw.text((tx + 12, 353), t, fill='#a5b4fc')

    img.save('assets/images/project-notes.jpg', quality=95)
    print("Notes project image generated.")

# 4. Authentication System
def generate_auth():
    w, h = 800, 450
    img = Image.new('RGB', (w, h), color='#0a0e17')
    draw = ImageDraw.Draw(img)
    draw_browser_frame(draw, w, h, "Auth Secure Portal", "#10b981")

    # Center card for Login / Register
    cx = w // 2
    cw = 380
    create_rounded_rect(draw, (cx - cw//2, 95, cx + cw//2, h - 40), 14, fill='#1e293b', outline='#6366f1', width=1)

    # Security icon representation
    draw.ellipse([cx - 24, 115, cx + 24, 163], fill='#312e81', outline='#818cf8', width=2)
    draw.text((cx - 8, 128), "*", fill='#38bdf8')

    draw.text((cx - 80, 175), "Secure Developer Portal", fill='#f8fafc')
    draw.text((cx - 105, 198), "Enter your credentials to access dashboard", fill='#94a3b8')

    # Input 1: Email
    create_rounded_rect(draw, (cx - cw//2 + 35, 230, cx + cw//2 - 35, 268), 6, fill='#0f172a', outline='#334155', width=1)
    draw.text((cx - cw//2 + 45, 241), "developer@example.com", fill='#cbd5e1')

    # Input 2: Password
    create_rounded_rect(draw, (cx - cw//2 + 35, 280, cx + cw//2 - 35, 318), 6, fill='#0f172a', outline='#334155', width=1)
    draw.text((cx - cw//2 + 45, 292), "••••••••••••••••", fill='#94a3b8')

    # Submit button
    create_rounded_rect(draw, (cx - cw//2 + 35, 335, cx + cw//2 - 35, 375), 6, fill='#6366f1')
    draw.text((cx - 45, 347), "Sign In to Console", fill='#ffffff')

    img.save('assets/images/project-authentication.jpg', quality=95)
    print("Auth project image generated.")

if __name__ == '__main__':
    generate_profile()
    generate_chocolate()
    generate_notes()
    generate_auth()
