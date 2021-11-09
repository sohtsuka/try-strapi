module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'host.docker.internal'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'password'),
        schema: env('DATABASE_SCHEMA', 'dev'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
