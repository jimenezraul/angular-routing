import { Routes } from "@angular/router";
import { TaskComponentResolver, UserNameResolver } from "../tasks/tasks.resolver";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix'
    },
    {
        path: 'tasks',
        loadComponent: () =>
            import('../tasks/tasks.component').then(m => m.TasksComponent),
        resolve: {
            userTasks: TaskComponentResolver
        },
        title: UserNameResolver
    },
    {
        path: 'new-task',
        loadComponent: () =>
            import('../tasks/new-task/new-task.component').then(m => m.NewTaskComponent)
    }
]
