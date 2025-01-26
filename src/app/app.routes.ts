import { Routes } from "@angular/router";
import { routes as userRoutes } from "./users/user.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    {
        path: 'users/:id',
        loadComponent: () => import('./users/user-tasks/user-tasks.component').then(m => m.UserTasksComponent),
        children: userRoutes
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    }
]