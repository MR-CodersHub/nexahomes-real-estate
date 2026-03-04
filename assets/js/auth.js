/**
 * NexaHomes Authentication & Role-Based Access Control
 */

const Auth = {
    // Current user role stored in localStorage
    STORAGE_KEY: 'nexahomes_user_role',
    USER_DATA_KEY: 'nexahomes_user_data',

    // Roles
    ROLES: {
        ADMIN: 'admin',
        USER: 'user'
    },

    /**
     * Set the login session
     * @param {string} role - 'admin' or 'user'
     * @param {object} userData - Optional user info
     */
    login: function(role, userData = {}) {
        localStorage.setItem(this.STORAGE_KEY, role);
        localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
    },

    /**
     * Clear the login session
     */
    logout: function() {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.USER_DATA_KEY);
        window.location.href = 'login.html';
    },

    /**
     * Get the current role
     * @returns {string|null}
     */
    getRole: function() {
        return localStorage.getItem(this.STORAGE_KEY);
    },

    /**
     * Get user data
     * @returns {object|null}
     */
    getUser: function() {
        const data = localStorage.getItem(this.USER_DATA_KEY);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Check if user is logged in
     * @returns {boolean}
     */
    isLoggedIn: function() {
        return !!this.getRole();
    },

    /**
     * Guard for Admin Dashboard
     */
    guardAdmin: function() {
        const role = this.getRole();
        if (!role) {
            window.location.href = 'admin-login.html';
        } else if (role !== this.ROLES.ADMIN) {
            // If user role is 'user', they shouldn't be here. 
            // Although the prompt says "if an admin tries to open user dashboard directly, they should be redirected to admin dashboard"
            // It doesn't explicitly say what to do if user tries to open admin dashboard.
            // Standard practice is redirect to login or show 403.
            window.location.href = 'admin-login.html';
        }
    },

    /**
     * Guard for User Dashboard
     */
    guardUser: function() {
        const role = this.getRole();
        if (!role) {
            window.location.href = 'login.html';
        } else if (role === this.ROLES.ADMIN) {
            // "if an admin tries to open the user dashboard directly, they should be redirected to the admin dashboard"
            window.location.href = 'admin-dashboard.html';
        }
    }
};

// Auto-run guard if the script is included with specific data attributes?
// Or just let the pages call it.
