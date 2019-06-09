import { Perifericos } from './periferico';
import { Token } from './token';
export class Sesion {
  constructor (
  public token: Token,
  public usr: Perifericos,
 ){}


}
