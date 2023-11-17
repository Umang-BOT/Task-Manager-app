const input = document.querySelector("#input");
const button = document.querySelector("#delete");
const outputt = document.querySelector("#list-container");
const all = document.querySelector("form");

//remove
const removetask = (id) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks", tasks));
  }
  tasks = tasks.filter((task) => {
    return task.id !== +id;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  gettasks();
};

//get items
const gettasks = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  console.log(tasks);
  //display to document OM
  let output;
  const alltasks = tasks.map((task) => {
    return `
      <li id="item">
                <span>${task.title}</span>
                <button onclick="removetask('${task.id}')" id="delete">X</button>
              </li>
      `;
  });
  output = alltasks.join("");
  console.log(output);
  outputt.innerHTML = output;
};
gettasks();
const addtask = (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter the task");
  }
  //get the item
  const task = input.value;
  if (task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
      console.log(tasks);
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks);
    }
    tasks.push({
      id: Date.now(),
      title: task,
    });
    //save to storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
  }
};
all.addEventListener("submit", addtask);
