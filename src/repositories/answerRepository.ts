import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

async function insertAnswer(createAnswerData: CreateAnswerData) {
    await prisma.answer.create({ data: createAnswerData })
}

const answerRepository = {
    insertAnswer
};

export default answerRepository;