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

async function getQuestionById(questionId: number) {
    const question = await questionRepository.selectQuestionById(questionId);
    return question;
}

const questionService = {
    create,
    getAllQuestions,
    getQuestionById
};
export default questionService;