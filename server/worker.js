import { Router } from 'itty-router';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Create a new router
const router = Router();

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS,PUT,DELETE',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Credentials': 'true',
};

// Options handler for CORS
router.options('*', () => new Response(null, { headers: corsHeaders }));

// Add routes
router.all('/api/users/*', userRoutes);
router.all('/api/orders/*', orderRoutes);

// 404 handler
router.all('*', () => new Response('Not Found', { status: 404 }));

// Connect to database
connectDB();

// Export for Workers
export default {
  fetch: (request, env, ctx) => {
    return router.handle(request).then((response) => {
      // Add CORS headers to all responses
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
      return response;
    });
  }
};