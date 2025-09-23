export default defineNuxtRouteMiddleware(() => {
    const { loggedIn } = useUserSession();
    console.log('loggedIn', loggedIn)
  
    // redirect the user to the login screen if they're not authenticated
    if (!loggedIn.value) {
      return navigateTo('/login')
    }
  })