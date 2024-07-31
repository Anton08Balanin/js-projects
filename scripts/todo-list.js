const todoList = []



function addTodo() {
    const inputElement = document.querySelector('.todo-input')
    const inputValue = inputElement.value
    const timeInput = document.querySelector('.input-time')
    const time = timeInput.value

    todoList.push({
        todo: inputValue,
        time: time
    })
    console.log(todoList)
}