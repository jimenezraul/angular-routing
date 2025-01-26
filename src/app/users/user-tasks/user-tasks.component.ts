import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import type { User } from '../user/user.model';
import { TasksService } from '../../tasks/tasks.service';
import { NewTaskComponent } from '../../tasks/new-task/new-task.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  id = input.required<string>();
  private userService = inject(UsersService);
  
  user = computed(() => this.userService.users.find((user: User) => user.id === this.id()) ?? null);
}
