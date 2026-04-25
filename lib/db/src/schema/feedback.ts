import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const feedbackTable = pgTable("feedback", {
  id: uuid("id").primaryKey().defaultRandom(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  name: text("name"),
  email: text("email"),
  rating: integer("rating").notNull(),
  type: text("type").notNull(),
  message: text("message").notNull(),
});

export const insertFeedbackSchema = createInsertSchema(feedbackTable).omit({
  id: true,
  created_at: true,
});
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type Feedback = typeof feedbackTable.$inferSelect;
