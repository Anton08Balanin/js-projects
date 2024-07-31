const todoList = []

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todoListObject = todoList[i];
        const todo = todoListObject.todo
        const time = todoListObject.time

        const html = `
      <div>${todo}</div>
      <div>${time}</div>
      <button 
      onclick="todoList.splice(${i}, 1)
      renderTodoList()"
      class="delete-button">
      Delete</button>
    `

        todoListHTML += html
    }

    document.querySelector('.js-div')
        .innerHTML = todoListHTML
}

function addTodo() {
    const inputElement = document.querySelector('.todo-input')
    const inputValue = inputElement.value
    const timeInput = document.querySelector('.input-time')
    const time = timeInput.value

    todoList.push({
        todo: inputValue,
        time
    })
    console.log(todoList)

    renderTodoList();
}