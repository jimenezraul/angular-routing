import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { Task } from "./task/task.model";
import { TasksService } from "./tasks.service";
import { UsersService } from "../users/users.service";

export const TaskComponentResolver: ResolveFn<Task[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const taskService = inject(TasksService);
    const id = route.paramMap.get('id');
    return taskService.allTasks().filter((task) => task.userId === id);
};

export const UserNameResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const taskService = inject(UsersService);
    const id = route.paramMap.get('id');
    const user = taskService.users.find((user) => user.id === id);
    return user ? `${user.name} Tasks` : '';
}