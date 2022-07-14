import { Answer } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;

async function answer(answer: string, questionId: number) {
    const createAnswerData: CreateAnswerData = {
        answer,
        questionId
    }

    await answerRepository.insertAnswer(createAnswerData);
}

const answerService = {
    answer
};
export default answerService;