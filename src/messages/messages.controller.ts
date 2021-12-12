import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'messages';
  }

  @Post()
  createMessage() {
    return '';
  }

  @Get('/:id')
  getMessage() {
    return 'message';
  }
}
