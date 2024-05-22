import { Hello } from '../models/helloModel';

export class HelloService {
  getHelloMessage(name: string): Hello {
    return { message: `Hello, ${name}!` };
  }
}