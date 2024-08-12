import questions from "~/data/questions.json";

export default defineEventHandler((event: Event) => {
    const id = getRouterParam(event, 'id');

    if (!id) {
        return {
            questions
        }
    } else {
        return questions.find(que => que.id === parseInt(id));
    }
});
