import { Todo } from "../models/todo.model";
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error("A TODO object is requeried");
    const html = `
    <li class="${todo.done ? 'checked' : ''}" data-id="abc">
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
        <label>${todo.description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>
    `;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);
    if (todo.done) liElement.classList.add('completed');
    return liElement;
}