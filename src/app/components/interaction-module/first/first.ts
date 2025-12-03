import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../services/message';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class FirstComponent {
  msg = '';
  messageService = inject(MessageService);
  envoyer() {
    this.messageService.sendMessage(this.msg);
  }
}
