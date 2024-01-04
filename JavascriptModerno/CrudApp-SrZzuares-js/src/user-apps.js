import { renderTable } from "./users/presetations/render-table/render-table";
import usersStore from "./users/store/users-store";

/**
 * 
 * @param {HTMLDivElement} elementHtml ElementoHtml
 */
export const UsersApp = async (elementHtml) => {
    elementHtml.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    elementHtml.innerHTML = '';

    renderTable(elementHtml)
}