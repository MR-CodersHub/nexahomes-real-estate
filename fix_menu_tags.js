
const fs = require('fs');
const path = require('path');

const directoryPath = '.';

function fixMenuToggle() {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log('Unable to scan directory: ' + err);
            return;
        }

        files.forEach((file) => {
            if (path.extname(file) === '.html') {
                const filePath = path.join(directoryPath, file);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    // We need to replace the FIRST </div> after <button class="menu-toggle"...>
                    // BUT ONLY IF it hasn't been replaced.
                    // The problematic button looks like:
                    // <button class="menu-toggle" ...>
                    //    <i ...></i>
                    // </div>

                    // Regex match the opening button tag
                    const regex = /<button class="menu-toggle"[^>]*>([\s\S]*?)<\/div>/g;

                    // Replace with </button> 
                    // Capture group 1 is the content inside (icons etc)
                    const newData = data.replace(regex, (match, p1) => {
                        // Ensure there are no nested divs inside p1 that would make this match incorrect
                        if (p1.includes('<div')) {
                            // If there's a div inside, regex might have matched too far or correct.
                            // But for menu-toggle which just has <i> usually, it's fine.
                            // However, regex is greedy/lazy. [\s\S]*? is lazy.
                            // So it stops at the first </div>.
                            // If the content has a div, we might be breaking it.
                            // But menu-toggle content is: <i class="fas fa-bars"></i>
                            return match; // Don't touch if complex
                        }
                        return match.replace('</div>', '</button>');
                    });

                    if (newData !== data) {
                        fs.writeFile(filePath, newData, 'utf8', (err) => {
                            if (err) console.log(err);
                            else console.log(`Fixed ${file}`);
                        });
                    }
                });
            }
        });
    });
}

fixMenuToggle();
