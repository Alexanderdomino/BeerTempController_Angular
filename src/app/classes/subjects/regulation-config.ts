import { Gpio } from 'onoff';
import {ISubject} from "../../interfaces/isubject";
import { IObserver } from 'src/app/interfaces/iobserver';

export class RegulationConfig implements ISubject {

  //Properties
  private _targetTemperature: number = 20;
  private _hysteresis: number = 1;
  private _observers: IObserver[] = [];

  //GPIO Buttons
  private _upButton: number = 10;
  private _downButton: number = 22;
  private _confirmButton: number = 27;
  private _stopButton: number = 17;


  RegisterObserver(o: IObserver): void {
    throw new Error('Method not implemented.');
  }
  RemoveObserver(o: IObserver): void {
    throw new Error('Method not implemented.');
  }
  NotifyObservers(): void {
    throw new Error('Method not implemented.');
  }


}
