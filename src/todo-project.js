const projects = [];

export class Project {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export const addProject = (project) => {
    projects.push(project);
}

