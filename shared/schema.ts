import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  program: text("program").notNull(),
  message: text("message"),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertEnrollmentSchema = createInsertSchema(enrollments).omit({ id: true });
export const insertContactSchema = createInsertSchema(contactMessages).omit({ id: true });

export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Enrollment = typeof enrollments.$inferSelect;
export type Contact = typeof contactMessages.$inferSelect;
