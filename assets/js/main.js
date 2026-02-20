
document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    // 2. Inject Mobile Menu Overlay if missing
    if (!document.getElementById('menuOverlay')) {
        document.body.insertAdjacentHTML('beforeend', `<div id="menuOverlay" class="menu-overlay"></div>`);
    }

    // 3. Unified Mobile Navigation Logic
    // Use let/const at top scope if checking existence, or re-query for current context
    const mainMenuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const menuOverlay = document.getElementById('menuOverlay');

    // Set ID for the mobile menu container for easier targeting
    if (navLinks) {
        navLinks.id = 'mobileMenu';
    }

    function openMenu() {
        if (navLinks) navLinks.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.classList.add('panel-open');
        if (mainMenuToggle) mainMenuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        if (navLinks) navLinks.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.classList.remove('panel-open');
        if (mainMenuToggle) mainMenuToggle.setAttribute('aria-expanded', 'false');
    }

    // Toggle click listener (Use mainMenuToggle const from above)
    if (mainMenuToggle) {
        mainMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (navLinks && navLinks.classList.contains('active')) closeMenu();
            else openMenu();
        });
    }

    // Inject Only Close Button into Header Controls if not present
    // Inject Only Close Button into Header Controls if not present
    let currentMenuToggle = document.getElementById('menuToggle');
    let currentWrapper = document.querySelector('.menu-toggle-wrapper');
    const controlsContainer = document.querySelector('.mobile-header-controls');

    // Auto-wrap menuToggle if it exists but is unwrapped
    if (currentMenuToggle && !currentWrapper) {
        if (currentMenuToggle.parentElement && currentMenuToggle.parentElement.classList.contains('mobile-header-controls')) {
            currentWrapper = document.createElement('div');
            currentWrapper.className = 'menu-toggle-wrapper';
            // Insert wrapper before toggle
            currentMenuToggle.parentNode.insertBefore(currentWrapper, currentMenuToggle);
            // Move toggle inside
            currentWrapper.appendChild(currentMenuToggle);
        } else if (currentMenuToggle.parentElement && currentMenuToggle.parentElement.classList.contains('menu-toggle-wrapper')) {
            currentWrapper = currentMenuToggle.parentElement;
        }
    }

    // If wrapper still not found but we have controls, create it
    if (!currentWrapper && controlsContainer) {
        if (!currentMenuToggle) {
            const wrapperHTML = `
                <div class="menu-toggle-wrapper">
                    <button id="menuToggle" class="menu-toggle" type="button" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <!-- Close button will be added below -->
                </div>
             `;
            controlsContainer.insertAdjacentHTML('beforeend', wrapperHTML);
            currentWrapper = controlsContainer.querySelector('.menu-toggle-wrapper');
            currentMenuToggle = document.getElementById('menuToggle'); // Refresh ref

            if (currentMenuToggle) {
                currentMenuToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (navLinks && navLinks.classList.contains('active')) closeMenu();
                    else openMenu();
                });
            }
        }
    }

    // Now inject Close Button safely
    if (currentWrapper) {
        // Remove any existing duplicate close buttons inside wrapper
        const existingClose = currentWrapper.querySelectorAll('.menu-close-btn, #menuClose');
        if (existingClose.length > 0) {
            if (existingClose.length > 1) {
                for (let i = 1; i < existingClose.length; i++) existingClose[i].remove();
            }
        } else {
            const closeBtnHTML = `<button id="menuClose" class="menu-close-btn" aria-label="Close Menu"><i class="fas fa-times"></i></button>`;
            currentWrapper.insertAdjacentHTML('beforeend', closeBtnHTML);
        }

        const menuClose = document.getElementById('menuClose');
        if (menuClose) {
            menuClose.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
            };
        }
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            closeMenu();
        });
    }

    // Close on link click (Delegation)
    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                // If it's a real navigation link, close menu and let browser navigate
                closeMenu();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // 4. Data Renders (Safe Checks)
    if (typeof properties !== 'undefined') renderProperties(properties);
    if (typeof cityData !== 'undefined') renderCities(cityData);
    if (typeof services !== 'undefined') renderServices(services);
    if (typeof team !== 'undefined') renderTeam(team);
    if (typeof blogPosts !== 'undefined') renderBlog(blogPosts);
    if (typeof messages !== 'undefined') renderMessages(messages);

    // 5. Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');
            handleFilterChange(filterValue);
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 6. Profile Dropdown (Desktop)
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            profileDropdown.classList.toggle('active');
            if (profileDropdown.innerHTML.trim() === '') {
                profileDropdown.innerHTML = `<a href="login.html">Log In</a><a href="signup.html">Sign Up</a>`;
            }
        });
        document.addEventListener('click', (e) => {
            if (!profileTrigger.contains(e.target)) profileDropdown.classList.remove('active');
        });
    }

    // FAQ
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
    });

    // Inject Mobile Account Panel if missing
    if (!document.getElementById('mobileAccountPanel')) {
        const panelHTML = `
            <div id="mobileAccountPanel" class="mobile-account-panel">
                <div class="account-panel-header">
                    <h3>Account Access</h3>
                    <button id="closeAccountPanel" class="panel-close-x"><i class="fas fa-times"></i></button>
                </div>
                <div class="account-panel-content">
                    <p>Log in to manage your properties and saved listings.</p>
                    <div class="account-actions">
                        <a href="login.html" class="btn">Log In</a>
                        <a href="signup.html" class="btn-outline">Sign Up</a>
                    </div>
                </div>
            </div>
            <div id="accountOverlay" class="account-overlay"></div>
        `;
        document.body.insertAdjacentHTML('beforeend', panelHTML);
    }

    const mobileAccountBtn = document.getElementById('mobileAccountBtn');
    const mobileAccountPanel = document.getElementById('mobileAccountPanel');
    const accountOverlay = document.getElementById('accountOverlay');
    const closeAccountPanel = document.getElementById('closeAccountPanel');

    function openAccountPanel() {
        if (mobileAccountPanel) mobileAccountPanel.classList.add('active');
        if (accountOverlay) accountOverlay.classList.add('active');
        document.body.classList.add('account-panel-open');
        // Close nav menu if open
        closeMenu();
    }

    function closeAccountPanelFunc() {
        if (mobileAccountPanel) mobileAccountPanel.classList.remove('active');
        if (accountOverlay) accountOverlay.classList.remove('active');
        document.body.classList.remove('account-panel-open');
    }

    if (mobileAccountBtn) {
        mobileAccountBtn.addEventListener('click', (e) => {
            // Updated: Open panel on both Mobile AND Tablet (<=1024px)
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                e.stopPropagation();
                openAccountPanel();
            }
            // For Desktop (>1024px), let the default link (href="login.html") work naturally
        });
    }

    if (closeAccountPanel) {
        closeAccountPanel.addEventListener('click', closeAccountPanelFunc);
    }

    if (accountOverlay) {
        accountOverlay.addEventListener('click', closeAccountPanelFunc);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
            closeAccountPanelFunc();
        }
    });
});

// --- Helper Functions ---

window.handleFilterChange = function (filterValue) {
    if (typeof properties === 'undefined') return;
    const grid = document.getElementById('property-grid');
    if (!grid) return;

    let filtered = properties;
    if (filterValue !== 'all') {
        filtered = properties.filter(prop => prop.city === filterValue || prop.type === filterValue);
        // Also update banner if city
        if (typeof cityData !== 'undefined' && cityData[filterValue]) {
            renderCityBanner(cityData[filterValue], filterValue);
        } else {
            const banner = document.getElementById('city-banner-area');
            if (banner) banner.classList.add('hidden');
        }
    } else {
        const banner = document.getElementById('city-banner-area');
        if (banner) banner.classList.add('hidden');
    }

    grid.style.opacity = '0';
    setTimeout(() => {
        renderProperties(filtered);
        grid.style.opacity = '1';
    }, 300);
};

window.renderProperties = function (data) {
    const grid = document.getElementById('property-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Limit for home page if needed? Current logic: just render all passed
    // If we want home page limit, caller should slice. 
    // But existing code checked for 'portfolio' section presence.
    const isHomePage = !!document.getElementById('portfolio');
    const displayData = (isHomePage && data.length > 3) ? data.slice(0, 3) : data;

    displayData.forEach(prop => {
        const card = document.createElement('a');
        card.href = `property-details.html?id=${prop.id}`;
        card.className = 'property-card';
        card.style.textDecoration = 'none';

        const imgUrl = (prop.image && prop.image.trim()) ? prop.image : 'assets/images/hero.png';

        card.innerHTML = `
            <div class="property-image">
                <span class="property-tag">${prop.type}</span>
                <span class="property-status">${prop.status}</span>
                <img src="${imgUrl}" alt="${prop.title}" onerror="this.onerror=null;this.src='assets/images/hero.png';">
            </div>
            <div class="property-details">
                <span class="property-price">${prop.price}</span>
                <h3 class="property-title">${prop.title}</h3>
                <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${prop.location}</div>
                <div class="property-features">
                    <div class="feature"><i class="fas fa-bed"></i> ${prop.beds} Beds</div>
                    <div class="feature"><i class="fas fa-bath"></i> ${prop.baths} Baths</div>
                    <div class="feature"><i class="fas fa-ruler-combined"></i> ${prop.sqft} sqft</div>
                </div>
            </div>
         `;
        grid.appendChild(card);
    });
};

window.renderCities = function (data) {
    const grid = document.getElementById('city-grid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.keys(data).forEach(city => {
        const item = data[city];
        const card = document.createElement('a');
        card.href = `city-details.html?city=${encodeURIComponent(city)}`;
        card.className = 'city-card';
        card.innerHTML = `
            <img src="${item.images[0]}" alt="${city}" onerror="this.onerror=null;this.src='assets/images/hero.png';">
            <div class="overlay"><span class="city-name">${city}</span></div>
        `;
        grid.appendChild(card);
    });
};

window.renderCityBanner = function (city, name) {
    const banner = document.getElementById('city-banner-area');
    if (!banner) return;
    banner.classList.remove('hidden');
    banner.innerHTML = `
        <div class="city-intro-banner" style="position: relative; height: 350px; border-radius: 15px; overflow: hidden; display: flex; align-items: center; border: 1px solid rgba(255,255,255,0.1);">
            <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: url('${city.images[0]}') center/cover; z-index: -1;"></div>
            <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(90deg, rgba(12,14,18,0.95) 30%, rgba(12,14,18,0.4) 100%); z-index: 0;"></div>
            <div style="position: relative; z-index: 1; padding: 40px; max-width: 600px;">
                <h2 style="font-size: 2.5rem; margin-bottom: 20px;">${name}</h2>
                <p style="color: #ccc; margin-bottom: 20px;">${city.description}</p>
            </div>
        </div>
    `;
};

window.renderServices = function (data) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(item => {
        grid.innerHTML += `
            <div class="feature-box text-center">
                <i class="fas ${item.icon} feature-icon"></i>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });
};

window.renderTeam = function (data) {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(member => {
        grid.innerHTML += `
            <div class="team-item">
                <img src="${member.image}" alt="${member.name}" class="team-img" onerror="this.onerror=null;this.src='assets/images/hero.png';">
                <h3>${member.name}</h3>
                <p style="color: var(--accent-color);">${member.role}</p>
            </div>
        `;
    });
};

window.renderBlog = function (data) {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    grid.innerHTML = '';
    data.forEach(post => {
        grid.innerHTML += `
            <div class="blog-card">
                <div class="blog-img">
                    <span class="blog-category-badge">${post.category}</span>
                    <a href="blog-details.html?id=${post.id}"><img src="${post.image}" alt="${post.title}" onerror="this.onerror=null;this.src='assets/images/hero.png';"></a>
                </div>
                <div class="blog-content">
                    <div class="blog-meta"><span><i class="far fa-calendar-alt"></i> ${post.date}</span></div>
                    <h3><a href="blog-details.html?id=${post.id}">${post.title}</a></h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="blog-details.html?id=${post.id}" class="read-more-btn">Read More</a>
                </div>
            </div>
        `;
    });
};

window.renderMessages = function (data) {
    const list = document.getElementById('messages-list');
    if (!list) return;
    list.innerHTML = '';
    data.forEach(msg => {
        list.innerHTML += `
            <div class="message-item">
                <h4>${msg.sender}</h4>
                <p>${msg.subject}</p>
            </div>
        `;
    });
};

