export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = false;

    if (authenticated) {
        return navigateTo('/', {replace:true})
    }
})
