import re

file_path = r"c:\Users\ASUS ROG F15\OneDrive\Desktop\Tiling Business\06_Marketing_Portfolio\Website_Source\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

output = []
for i, line in enumerate(lines):
    # Skip huge base64 lines
    if "data:image" in line and len(line) > 1000:
        output.append(f"{i+1}: <HUGE BASE64 IMAGE LINE SKIPPED>\n")
    else:
        output.append(f"{i+1}: {line}")

with open("temp_view.txt", "w", encoding="utf-8") as f:
    f.writelines(output)
