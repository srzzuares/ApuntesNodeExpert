import { createTodoHTML } from "./create-html-todo"

let element;
/**
 * 
 * @param {String} elementId Identificador de la tarea
 * @param {Array} todos Arreglo de tareas
 */
export const renderTodos = (elementId, todos = []) => {
    //TODO: referencia
    if (!element) element = document.querySelector(elementId);
    if (!element) throw new Error(`Element ${elementId} not found`);
    element.innerHTML = '';
    todos.forEach(todo => {
        element.append(createTodoHTML(todo))
    })
}