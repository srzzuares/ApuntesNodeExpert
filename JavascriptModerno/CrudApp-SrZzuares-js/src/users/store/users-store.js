import { loadUsers } from "../use-cases/load-Users"


const state = {
    currentPage: 0,
    users: []

}

const loadNextPage = async () => {
    const arrayUsers = await loadUsers(state.currentPage + 1);
    // console.log(arrayUsers)
    if (arrayUsers === 0) return;
    state.currentPage += 1;
    state.users = arrayUsers;
}

const loadPreviousPage = async () => {

}

const onUserChange = () => { }

const reloadPage = async () => { }

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
};