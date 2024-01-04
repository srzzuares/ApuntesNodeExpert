import usersStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th>#Id</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeader, tableBody)
    return table;
}

export const renderTable = (element) => {
    const users = usersStore.getUsers();
    if (!table) {
        table = createTable();
        element.append(table);

    }
    let tableHtml = '';
    users.forEach(us => {
        tableHtml += `
        <tr>
            <td>${us.id}</td>
            <td>${us.balance}</td>
            <td>${us.firstName}</td>
            <td>${us.lastName}</td>
            <td>${us.isActive}</td>
            <td>
                <a  href ="#/" data-id = "${us.id}">Select</a>
                |
                <a  href ="#/" data-id = "${us.id}">Delete</a>
            </td>
        </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHtml;
}
