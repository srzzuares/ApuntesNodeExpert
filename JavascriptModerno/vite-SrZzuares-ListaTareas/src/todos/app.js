import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderPending, renderTodos } from "../todos/use-cases";
import { Todo } from "./models/todo.model";

const elementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '.new-todo',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count'
}
/**
 * 
 * @param {String} elementId De tipo String
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todo = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.TodoList, todo);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(elementIDs.PendingCountLabel);
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
    const todoFiltro = document.querySelectorAll(elementIDs.TodoFilters);
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
    todoFiltro.forEach(element => {
        element.addEventListener("click", element => {
            todoFiltro.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected');
            // console.log(element.target.id);
            switch (element.target.id) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;

                default:
                    break;
            }
            displayTodos();
        });
    });
}