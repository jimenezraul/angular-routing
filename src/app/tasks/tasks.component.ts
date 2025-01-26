import { Component, inject, input} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { TasksService } from './tasks.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  id = input.required<string>();
  order = input<'asc' | 'desc'>();
  userTasks = input<Task[]>();
}

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
