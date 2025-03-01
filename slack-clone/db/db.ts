import { profilesTable, todosTable } from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!);

const schema = { profilesTable, todosTable };

export const db = drizzle(client, { schema }); 