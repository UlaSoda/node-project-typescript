import { Request, Response } from 'express';
import { HelloService } from '../services/helloService';

export class HelloController {
  private helloService: HelloService;

  constructor() {
    this.helloService = new HelloService();
  }

  public getHello = (req: Request, res: Response): void => {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: 'Name is required' });
      return;
    }
    const message = this.helloService.getHelloMessage(name);
    res.json(message);
  }
}
