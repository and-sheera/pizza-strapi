module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://86679.web.hosting-russia.ru/',
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
