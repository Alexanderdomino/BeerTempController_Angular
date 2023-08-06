import {IObserver} from "./iobserver";

export interface ISubject {
  //Methods to register and unregister observers
  RegisterObserver(o: IObserver): void;
  RemoveObserver(o: IObserver): void;

  //Method to notify observers of change
  NotifyObservers(): void;
}
