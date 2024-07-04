const useGetIsAdmin = () => {
    const user = JSON.parse(window.localStorage.getItem("token"))
    return user.role === "admin"
}

export default useGetIsAdmin
