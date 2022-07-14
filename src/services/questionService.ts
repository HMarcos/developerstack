import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">;

async function create(question: string) {
    const createQuestionData: CreateQuestionData = { question };
    await questionRepository.insertQuestion(createQuestionData);
}

async function getAllQuestions() {
    const questions = await questionRepository.selectAllQuestions();
    return questions;
}

const questionService = {
    create,
    getAllQuestions
};
export default questionService;