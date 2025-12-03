import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Message } from '../../../models/message';
import { ChatMessageService } from '../../../services/chat-message';

@Component({
  selector: 'app-participant',
  imports: [FormsModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css',
})
export class ParticipantComponent implements OnInit, OnDestroy {
  name = input.required<string>();
  nextMessage: string = '';
  allMessages: Message[] = [];

  chatMessageService = inject(ChatMessageService);
  subscription!: Subscription;

  sendMessage() {
    this.chatMessageService.sendMessage(this.name(), this.nextMessage);
    this.nextMessage = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.chatMessageService.getMessage().subscribe((msg) => {
      if (msg.sender != this.name()) {
        this.allMessages.push(msg);
      }
    });
  }
}
