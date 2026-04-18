const lodTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayTodo(data);
        });
};

const displayTodo = (todos) => {
    //    1.create todo container

    const todoContainer = document.getElementById("todo_container");
    // console.log(todoContainer);
    todoContainer.innerHTML = "";


    // 2 create loop

    todos.forEach((todo) => {
        // 3 create html element
        const todoCard = document.createElement("div");
        // console.log(todoCard);
        todoCard.innerHTML = `
    
    <div class = "todo-card">
    <p>${todo.completed == true ? ` <i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`} 
   </p>
    <h3> ${todo.title}</h3>
    </div>

    `;
        todoContainer.append(todoCard);
    });
    // todoContainer.append(todo);


}

lodTodo();