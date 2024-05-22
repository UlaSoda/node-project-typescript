import { Hello } from '../models/helloModel';

export class HelloService {
  getHelloMessage(): Hello {
    return { message: 'Hello from the service!', name: 'Gina' };
  }
}