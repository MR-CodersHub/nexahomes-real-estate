
import os
import re

def fix_menu_toggle():
    for filename in os.listdir('.'):
        if filename.endswith('.html'):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Pattern: <button class="menu-toggle"...> ... </div>
            # We want to replace the FIRST </div> after the button start with </button>
            # But only if it hasn't been replaced already.
            
            # Find all occurrences of the button start
            matches = list(re.finditer(r'<button class="menu-toggle"[^>]*>', content))
            
            if not matches:
                continue
                
            new_content = content
            # Process in reverse order to not mess up indices
            for match in reversed(matches):
                start_index = match.end()
                # Find the next </div>
                next_div = content.find('</div>', start_index)
                if next_div != -1:
                    # Check if there are any other opening divs between match and next_div
                    # There generally shouldn't be for <i class="..."></i>
                    # But let's be safe.
                    chunk = content[start_index:next_div]
                    if '<div' not in chunk:
                        # Safe to replace
                        new_content = new_content[:next_div] + '</button>' + new_content[next_div+6:]
            
            if new_content != content:
                print(f"Fixing {filename}")
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == '__main__':
    fix_menu_toggle()
