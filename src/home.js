import { Project, addProject, projects } from "./todo-project.js";
import { TodoItem } from "./todo-item.js";


let selectedProject = null;
const project_dialog = document.getElementById("project-dialog");
const projectBtn = document.getElementById("project-button");
const project_form = document.getElementById("project-form");
const project_cancelBtn = document.getElementById("cancel-btn");
const taskList = document.getElementById("task-list");
const sidebarContent = document.querySelector(".sidebar-content");

const saveProjects = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
};

const initProjects = () => {
    const saved = localStorage.getItem("projects");

    if (saved) {
        const parsed = JSON.parse(saved);

        parsed.forEach(p => {
            const project = new Project(p.title);

            p.todos.forEach(t => {
                const todo = new TodoItem(
                    t.title,
                    t.description,
                    t.dueDate,
                    t.priority
                );
                project.todos.push(todo);
            });

            addProject(project);
        });

    } else {
        const personal = new Project("Personal");
        const work = new Project("Work");

        addProject(personal);
        addProject(work);
        saveProjects();
    }

    // render everything
    projects.forEach(project => renderProject(project));

    // select first project
    selectedProject = projects[0];

    const firstProjectDiv = sidebarContent.firstChild;
    if (firstProjectDiv) {
        firstProjectDiv.classList.add("active");
    }

    renderTodos();
};



const renderProject = (project) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const del = document.createElement("button");
    div.addEventListener("click", () => {
    selectedProject = project;

    document.querySelectorAll(".sidebar-content div")
        .forEach(d => d.classList.remove("active"));

    div.classList.add("active");

    renderTodos();
});

    del.textContent = "Del";

    del.addEventListener("click", () => {
    const index = projects.indexOf(project);
    if (index > -1) {
        projects.splice(index, 1);
    }

    if (selectedProject === project) {
        selectedProject = null;
        taskList.innerHTML = "";
    }
    saveProjects();
    sidebarContent.removeChild(div);
});

    h3.textContent = project.title;
    div.appendChild(h3);
    div.appendChild(del);
    sidebarContent.appendChild(div);
};

const renderTodos = () => {
    taskList.innerHTML = "";

    if (!selectedProject) return;

    selectedProject.todos.forEach(todo => renderTodo(todo));
};

const renderTodo = (todo) => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const del = document.createElement("button");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");

    description.textContent = todo.description;
    dueDate.textContent = todo.dueDate;
    priority.textContent = todo.priority;

    del.textContent = "Del";

    del.addEventListener("click", () => {
        const index = selectedProject.todos.indexOf(todo);
        if (index > -1) {
            selectedProject.todos.splice(index, 1);
        }

        saveProjects();
        renderTodos();
    });

    h3.textContent = todo.title;

    div.appendChild(h3);
    div.appendChild(description);
    div.appendChild(dueDate);
    div.appendChild(priority);
    div.appendChild(del);

    taskList.appendChild(div);
};


projectBtn.addEventListener("click", () => {
    project_dialog.showModal();
});

// when form submitted, USE the Project class   
project_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("project-title").value;
    const newProject = new Project(title);
    addProject(newProject);
    saveProjects();
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

      if (!selectedProject) {
        alert("Select a project first");
        return;
    }

    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;
    const newTodo = new TodoItem(title, description, dueDate, priority);
    selectedProject.todos.push(newTodo);
    saveProjects();
    renderTodos();
    todo_dialog.close();
    todo_form.reset();
});

todo_cancelBtn.addEventListener("click", () => {
    todo_dialog.close();
    todo_form.reset();
});
     

initProjects();