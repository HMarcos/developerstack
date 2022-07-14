import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function insertQuestion(createQuestionData: CreateQuestionData) {
    await prisma.question.create({ data: createQuestionData });
}

async function selectAllQuestions() {
    const questions = await prisma.question.findMany();
    return questions;
}

const questionRepository = {
    insertQuestion,
    selectAllQuestions
};

export default questionRepository;