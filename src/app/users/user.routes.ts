import { Routes } from "@angular/router";
import { TaskComponentResolver, UserNameResolver } from "../tasks/tasks.resolver";
import { TasksComponent } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";

export const routes: Routes = [
    {
        path: '',
        providers: [TasksService],
        children: [
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
                loadComponent: () =>
                    import('../tasks/new-task/new-task.component').then(m => m.NewTaskComponent)
            }
        ]
    }
]
