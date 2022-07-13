import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function insertQuestion(createQuestionData: CreateQuestionData) {
    await prisma.question.create({ data: createQuestionData });
}

const questionRepository = {
    insertQuestion
};

export default questionRepository;