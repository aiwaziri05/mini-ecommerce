import postgres from 'postgres';

const globalForPostgres = global as unknown as {
  sql: postgres.Sql | undefined;
};

const sql =
  globalForPostgres.sql ??
  postgres(process.env.PRISMA_DATABASE_URL!, {
    ssl: 'require',
    max: 10,
  });

if (process.env.NODE_ENV !== 'production') globalForPostgres.sql = sql;

export default sql;
