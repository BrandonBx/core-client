import {Deserialize} from '../../shared/interfaces/deserialize';

export class User implements Deserialize{
  id: number;
  username: string;
  email: string;
  password: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
