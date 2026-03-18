import os
import shutil
import glob

v2_dir = 'v2'
if not os.path.exists(v2_dir):
    os.makedirs(v2_dir)

html_files = glob.glob('*.html')
for f in html_files:
    shutil.copy(f, os.path.join(v2_dir, f))

shutil.copy('script.js', os.path.join(v2_dir, 'script.js'))

for f in html_files:
    filepath = os.path.join(v2_dir, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Update paths to images and videos
    content = content.replace('src="images/', 'src="../images/')
    content = content.replace("url('images/", "url('../images/")
    
    # If there are any other hrefs that need adjusting, maybe not.
    # We want to keep style.css local to v2.
    
    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)

print("V2 files copied and paths updated successfully.")
