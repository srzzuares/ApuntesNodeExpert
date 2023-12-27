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

const getTodos = () => {

}

/**
 * 
 * @param {String} description Breve descripcion de tipo String
 */
const addTodo = (description) => {

}
/**
 * 
 * @param {String} todoId Todo Identificador
 */
const toggleTodo = (todoId) => {

}

/**
 * 
 * @param {String} todoId Todo Identificador
 */
const deleteTodo = (todoId) => {

}

const deleteCompleted = () => {

}
/**
 * 
 * @param {Object} newFilter Recibe un objeto de Filters que quiere seleccionar
 */
const setFilter = (newFilter = Filters.All) => {

}
// Para ttener un control del metodo State
const getCurrentFilter = () => {

}

export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    inintStore,
    loadStore,
    setFilter,
    toggleTodo
}