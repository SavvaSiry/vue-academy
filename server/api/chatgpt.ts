import OpenAI from 'openai';

export default defineEventHandler(async (event: Event) => {
    // const body = await readBody(event);

    // Создаем экземпляр клиента OpenAI с использованием ключа API
    const openai = new OpenAI({
        apiKey: process.env.CHATGPT_API_KEY,
    });

    console.log(process.env.CHATGPT_API_KEY);
    console.log(openai);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // или 'gpt-4'
            messages: [
                { role: 'system', content: 'You are an expert in Vue.js, JavaScript, and Nuxt.js. Please provide concise and accurate responses in JSON format.' },
                { role: 'user', content: 'Дай случайный вопрос в формтае Json.' },
            ],
        });

        console.log(response);

        const chatResponse = response.choices[0].message.content;

        return {
            success: true,
            data: JSON.parse(chatResponse),
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
});
