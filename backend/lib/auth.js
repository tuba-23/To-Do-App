const { betterAuth } = require('better-auth');
const { prismaAdapter } = require('better-auth/adapters/prisma');
const { PrismaClient } = require('../generated/prisma/client');

const prisma = new PrismaClient();
exports.auth = betterAuth({
   trustedOrigins: [
  "http://localhost:3000",
  "https://*.your-domain.com"
],
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
});