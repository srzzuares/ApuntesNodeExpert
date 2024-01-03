import { loadUsers } from "../use-cases/load-Users"


const state = {
    currentPage: 0,
    users: []

}

const loadNextPage = async () => {
    await loadUsers(1);
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
};