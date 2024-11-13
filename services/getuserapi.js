export const getUsersapi = async () => {

    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data

}