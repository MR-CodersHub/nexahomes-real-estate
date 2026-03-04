
const fs = require('fs');
const path = require('path');

const directoryPath = '.';

function addIdsToMenu() {
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

                    let newData = data;

                    // 1. Add id="menuToggle" to the menu-toggle button if not present
                    if (!newData.includes('id="menuToggle"')) {
                        const toggleRegex = /<button class="menu-toggle"/g;
                        newData = newData.replace(toggleRegex, '<button id="menuToggle" class="menu-toggle"');
                    }

                    // 2. Ensure mobile-user-icon has id="userIcon" or standardized class? 
                    // User didn't explicitly ask for id="userIcon", but it helps. Let's stick to class for that.

                    // 3. Ensure proper closing of the button (already done in previous steps, but good to check)

                    if (newData !== data) {
                        fs.writeFile(filePath, newData, 'utf8', (err) => {
                            if (err) console.log(err);
                            else console.log(`Updated IDs in ${file}`);
                        });
                    }
                });
            }
        });
    });
}

addIdsToMenu();
