import questions from "~/data/questions.json";

export default defineEventHandler((event: Event) => {
    const randomQuestionId = getRandomIntInclusive(0, questions.length);
    return questions.find(que => que.id === randomQuestionId);
})

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
