let todos = [];
setTodos();
function addTodo() {
  let input = document.getElementById("input");
  todos.push(input.value);
  setTodos();
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
}
//untuk daftar kata
function setTodos() {
  let result = "";
  todos.forEach((todo) => {
    result += "<li>" + todo + "</li>";
  });
  document.getElementById("todos").innerHTML = result;
}
//untuk mengclose kata
function setTodos() {
    let result = "";
    todos.forEach((todo)=> {
        result +="<li>"; 
        result += todo;
        result +="<button style='margin-left: 10px' onclick='removeTodos(`"
        result +=todo + "`)'>-</botton> </li>";
    });
    document.getElementById("todos").innerHTML = result
}
function removeTodos(str){
    let idx = todos.indexOf(str);
        todos.splice(idx, 1);
        setTodos();
}

