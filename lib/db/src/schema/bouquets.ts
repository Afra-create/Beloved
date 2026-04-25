import { pgTable, uuid, text, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const bouquetsTable = pgTable("bouquets", {
  id: uuid("id").primaryKey().defaultRandom(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  expires_at: timestamp("expires_at").notNull(),
  bouquet_json: jsonb("bouquet_json").notNull(),
  is_premium: boolean("is_premium").default(false).notNull(),
  recipient_name: text("recipient_name").notNull(),
  recipient_email: text("recipient_email").notNull(),
  sender_name: text("sender_name"),
  sender_email: text("sender_email"),
  occasion: text("occasion"),
  letter_text: text("letter_text"),
  audio_url: text("audio_url"),
  photo_urls: text("photo_urls").array(),
  music_track: text("music_track"),
  payment_id: text("payment_id"),
});

export const insertBouquetSchema = createInsertSchema(bouquetsTable).omit({
  id: true,
  created_at: true,
});
export type InsertBouquet = z.infer<typeof insertBouquetSchema>;
export type Bouquet = typeof bouquetsTable.$inferSelect;
