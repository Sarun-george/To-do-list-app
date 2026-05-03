import { Project, addProject, projects } from "./todo-project.js";
import { TodoItem } from "./todo-item.js";


const project_dialog = document.getElementById("project-dialog");
const projectBtn = document.getElementById("project-button");
const project_form = document.getElementById("project-form");
const project_cancelBtn = document.getElementById("cancel-btn");

const renderProject = (project) => {
    const sidebarContent = document.querySelector(".sidebar-content");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
        sidebarContent.removeChild(div);
    });
    h3.textContent = project.title;
    div.appendChild(h3);
    div.appendChild(del);
    sidebarContent.appendChild(div);
};


projectBtn.addEventListener("click", () => {
    project_dialog.showModal();
});

// when form submitted, USE the Project class   
project_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;
    const dueDate = document.getElementById("project-due-date").value;
    const priority = document.getElementById("project-priority").value;
    const newProject = new Project(title, description, dueDate, priority);
    addProject(newProject);
    renderProject(newProject);
    project_dialog.close();
    project_form.reset();
});

project_cancelBtn.addEventListener("click", () => {
    project_dialog.close();
    project_form.reset();
});

const todo_dialog = document.getElementById("todo-dialog");
const todo_btn = document.getElementById("todo-button");
const todo_form = document.getElementById("todo-form");
const todo_cancelBtn = document.getElementById("cancel-todo-btn");

todo_btn.addEventListener("click", () => {
    todo_dialog.showModal();
});

todo_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;
    const newTodo = new TodoItem(title, description, dueDate, priority);
    todo_dialog.close();
    todo_form.reset();
});

todo_cancelBtn.addEventListener("click", () => {
    todo_dialog.close();
    todo_form.reset();
});
     