import { Router, Response } from "express";

import { Task } from "../entities/Task";

const router = Router();

router.get("/", async (req, res): Promise<Response> => {
  const tasks = await Task.find();

  return res.json(tasks);
});

router.post("/", async (req, res): Promise<Response> => {
  const newTask = new Task();

  newTask.title = req.body.title;

  const savedTask = await newTask.save();

  return res.status(201).json(savedTask);
});

export default router;
