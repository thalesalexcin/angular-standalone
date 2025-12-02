import { TestBed } from '@angular/core/testing';

import { ChatMessage } from './chat-message';

describe('ChatMessage', () => {
  let service: ChatMessage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMessage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
