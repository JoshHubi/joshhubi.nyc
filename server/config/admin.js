module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7addcb0ffd7d1078934abdadd93c5176'),
  },
});
