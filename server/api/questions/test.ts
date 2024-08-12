import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event: Event) => {
    const client = await serverSupabaseClient(event);

    const { data } = await client.from('Questions')
        .select('*');

    console.log(data);

    return { questions: data }
})
