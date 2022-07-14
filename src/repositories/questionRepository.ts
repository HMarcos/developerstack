import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function insertQuestion(createQuestionData: CreateQuestionData) {
    await prisma.question.create({ data: createQuestionData });
}

async function selectAllQuestions() {
    const questions = await prisma.question.findMany();
    return questions;
}

async function selectQuestionById(questionId: number) {
    const question = await prisma.question.findUnique({
        where: {
            id: questionId
        },
        include: {
            answers: {
                select: {
                    answer: true
                }
            }
        }
    });

    return question;
}

const questionRepository = {
    insertQuestion,
    selectAllQuestions,
    selectQuestionById
};

export default questionRepository;