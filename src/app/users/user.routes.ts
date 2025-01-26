import { Routes } from "@angular/router";
import { TaskComponentResolver, TasksComponent, UserNameResolver } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix'
    },
    {
        path: 'tasks',
        component: TasksComponent,
        resolve: {
            userTasks: TaskComponentResolver
        },
        title: UserNameResolver
    },
    {
        path: 'new-task',
        component: NewTaskComponent
    }
]
    