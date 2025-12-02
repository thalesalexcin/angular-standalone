import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatMessageService {
  private subject = new Subject<Message>();

  sendMessage(sender: string, msg: string) {
    this.subject.next({ sender: sender, message: msg });
  }

  getMessage() {
    return this.subject;
  }
}
