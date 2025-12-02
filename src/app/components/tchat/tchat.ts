import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipantComponent } from '../participant/participant';

@Component({
  selector: 'app-tchat',
  imports: [FormsModule, ParticipantComponent],
  templateUrl: './tchat.html',
  styleUrl: './tchat.css',
})
export class TchatComponent {
  newParticipantName: string = '';
  participants: string[] = [];
  addParticipant() {
    this.participants.push(this.newParticipantName);
    this.newParticipantName = '';
  }
}
