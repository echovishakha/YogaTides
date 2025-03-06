import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertEnrollmentSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/enroll", async (req, res) => {
    try {
      const data = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createEnrollment(data);
      res.json(enrollment);
    } catch (error) {
      res.status(400).json({ error: "Invalid enrollment data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const message = await storage.createContact(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  return createServer(app);
}
