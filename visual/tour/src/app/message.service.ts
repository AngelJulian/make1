import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  /** Log a HeroService message with the MessageService */
  //private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
  //}
  

  clear() {
    this.messages = [];
  }
}