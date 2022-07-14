import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question }: { question: string } = req.body;
  await questionService.create(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const questionId = Number(id);
  const { answer }: { answer: string } = req.body;
  await answerService.answer(answer, questionId);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
