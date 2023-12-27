import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";

const elementIDs = {
    TodoList: '.todo-list',
}
/**
 * 
 * @param {String} elementId De tipo String
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todo = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todo);
    }
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}