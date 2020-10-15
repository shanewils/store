export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/fungeon',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecert',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}