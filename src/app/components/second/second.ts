import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../services/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class SecondComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  messageService = inject(MessageService);
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.messageService
      .getMessage()
      .subscribe((text) => this.messages.push(text));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
