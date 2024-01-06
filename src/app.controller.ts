// chat.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @Post()
  async handleMessage(@Body('userMessage') userMessage: string): Promise<{ response: string }> {
    try {
      let response = '';

      if (userMessage.toLowerCase().includes('hello')) {
        response = 'Hi there!,how are you??';
      }
      else if (userMessage.toLowerCase().includes('hi')) {
        response = 'Hi there!,how are you??';
      } 
      else if (userMessage.toLowerCase().includes('fine')) {
        response = 'Great to know that!';
      }
      else if(userMessage.toLowerCase().includes('what do you know about')) {
        response = 'I know how to greet people in general';
      }
       else if (userMessage.toLowerCase().includes('how are you')) {
        response = 'I am fine!';
      }
       else if (userMessage.toLowerCase().includes('bye')) {
        response = 'Goodbye!';
      }
       else {
        response = 'I do not understand that yet, but would definitely learn it in future.';
      }

      return { response };
    } catch (error) {
      console.error('Error while processing user message:', error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
