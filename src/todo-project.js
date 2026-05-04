export const projects = [];

export class Project {
    constructor(title, todos = []) {
        this.title = title;
        this.todos = todos;
    }
}   

export const addProject = (project) => {
    projects.push(project);
}

