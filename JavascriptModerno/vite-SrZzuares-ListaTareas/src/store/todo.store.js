import { Todo } from "../todos/models/todo.model";
const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

/**
 * Data de la tarea
 */
const state = {
    todos: [
        new Todo('Hola Mundo'),
        new Todo('Hola Mundo2'),
        new Todo('Hola Mundo3'),
    ],
    filter: Filters.All
}

const inintStore = () => {
    loadStore();
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw Error(`Option filter ${filter} is not invalid`)
    }
}

/**
 * 
 * @param {String} description Breve descripcion de tipo String
 */
const addTodo = (description) => {
    if (!description) throw Error("Description is required");
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}
/**
 * 
 * @param {String} todoId Todo Identificador
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) todo.done = !todo.done;
        return todo;
    })
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId Todo Identificador
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}
/**
 * 
 * @param {Filters} newFilter Recibe un objeto de Filters que quiere seleccionar
 */
const setFilter = (newFilter = Filters.All) => {
    Object.keys(Filters).includes(newFilter);
    state.filter = newFilter;
    saveStateToLocalStorage();
}
// Para ttener un control del metodo State
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    inintStore,
    getTodos,
    loadStore,
    setFilter,
    toggleTodo,
    addTodo
}