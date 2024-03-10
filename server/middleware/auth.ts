export default defineEventHandler((event) => {
    event.context.auth = { user: 123 }
    // console.log(event);
    // console.log(event);
    // console.log(event.headers);
    // console.log(getRouteRules(event));
})
