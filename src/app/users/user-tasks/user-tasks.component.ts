import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import type { User } from '../user/user.model';
import { TasksService } from '../../tasks/tasks.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  id = input.required<string>();
  private userService = inject(UsersService);
  private taskService = inject(TasksService);

  user = computed(() => this.userService.users.find((user: User) => user.id === this.id()) ?? null);
  tasks = computed(() => this.taskService.allTasks().filter((task) => task.userId === this.id()));
}
