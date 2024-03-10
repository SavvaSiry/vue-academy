import questions from "~/data/questions.json";
import {H3Event} from "h3";

export default defineEventHandler((event: H3Event) => {
    const randomQuestionId = getRandomIntInclusive(0, questions.length);
    return questions.find(que => que.id === randomQuestionId);
})

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
