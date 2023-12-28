import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";
import { Todo } from "./models/todo.model";

const elementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '.new-todo',
    ClearCompleted: '.clear-completed',
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

    //Referencias HTML
    const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
    const todoListUL = document.querySelector(elementIDs.TodoList);
    const clearCompletedBtn = document.querySelector(elementIDs.ClearCompleted);
    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        // console.log(event)
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });
    todoListUL.addEventListener('click', (event) => {
        const elementoIdLI = event.target.closest('[data-id]');
        todoStore.toggleTodo(elementoIdLI.getAttribute('data-id'));
        displayTodos();
    })
    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]')
        if (!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'))
        displayTodos();
    })
    clearCompletedBtn.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    })
}