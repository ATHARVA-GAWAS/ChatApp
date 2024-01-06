import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private messages: { text: string; sender: string }[] = [];

  getMessages() {
    return [...this.messages];
  }

  sendMessage(message: string) {
    this.messages.push({ text: message, sender: 'user' });
    return `AI: ${message}`;
  }
}
