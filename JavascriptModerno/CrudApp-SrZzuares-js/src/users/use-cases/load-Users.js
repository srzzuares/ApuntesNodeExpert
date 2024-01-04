import { localhostUserToModel } from "../mappers/localhost-users.mappers";


/**
 * 
 * @param {Number} page idPage
 * @returns 
 */
export const loadUsers = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const users = data.map(localhostUserToModel);
    // console.log(data)
    // console.log(users)

    return users;
}