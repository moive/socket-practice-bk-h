import { v7 as uuidv7 } from 'uuid';

export class Band {
  id: string;
  name: string;
  votes: number;

  constructor(name: string) {
    this.id = uuidv7();
    this.name = name;
    this.votes = 0;
  }
}
