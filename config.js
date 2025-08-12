/**
 * Application Configuration
 * GOOD: Proper documentation and organization
 */

const CONFIG = {
    // GOOD: Well-organized constants with clear naming
    APP_NAME: 'Todo List Application',
    VERSION: '1.0.0',
    MAX_TODO_LENGTH: 100,
    
    // GOOD: Organized settings object
    UI: {
        ANIMATION_DURATION: 300,
        THEME: 'light'
    },
    
    // GOOD: Environment-based configuration
    API: {
        BASE_URL: process.env.API_URL || 'http://localhost:3000',
        TIMEOUT: 5000
    }
};

// GOOD: Proper export for module usage
export default CONFIG; 