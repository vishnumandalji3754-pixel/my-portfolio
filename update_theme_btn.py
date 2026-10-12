import glob
import re

files = [f for f in glob.glob('*.html') if f != 'index.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    c = re.sub(
        r'<li class="nav-item ms-lg-2">\s*<a class="btn-custom-primary btn-custom-sm"[^>]*>Hire Me</a>\s*</li>',
        '''<li class="nav-item ms-lg-2">
              <button type="button" class="theme-toggle-btn" aria-label="Toggle dark/light theme" title="Switch to light mode">
                <i class="bi bi-moon"></i>
              </button>
            </li>''',
        c
    )
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print("Updated:", f)
