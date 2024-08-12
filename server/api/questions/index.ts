import questions from "~/data/questions.json";

export default defineEventHandler((event: Event) => {
    const id = getRouterParam(event, 'id');
    console.log(id);

    if (!id) {
        return {
            questions
        }
    } else {
        console.log(questions);
        return questions.find(que => que.id === parseInt(id));
    }
});
