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

}

const loadStore = () => {

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
}
/**
 * 
 * @param {String} todoId Todo Identificador
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) todo.done = !todo.done;
        else throw new Error(" Error in toggleTodo ");
        return todo;
    })
}

/**
 * 
 * @param {String} todoId Todo Identificador
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}
/**
 * 
 * @param {Filters} newFilter Recibe un objeto de Filters que quiere seleccionar
 */
const setFilter = (newFilter = Filters.All) => {
    Object.keys(Filters).includes(newFilter);
    state.filter = newFilter;
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