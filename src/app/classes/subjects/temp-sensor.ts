import {ISubject} from "../../interfaces/isubject";
import {IObserver} from "../../interfaces/iobserver";

export class TempSensor implements ISubject {

  //Members
  private currentTemp: number = 0;

  //Initialize the Temperature Sensor
  sensor = require('ds18b20-raspi');

  //Methods to register and unregister observers
  RegisterObserver(o: IObserver): void {
    throw new Error("Method not implemented.");
  }

  RemoveObserver(o: IObserver): void {
    throw new Error("Method not implemented.");
  }

  //Method to notify observers of change
  NotifyObservers(): void {
    throw new Error("Method not implemented.");
  }

  //Method to get the current temperature
  GetTemperature(): number {
    return this.currentTemp;
  }

  //Method to read the current temperature
  ReadTemperature(): void {

    let tmpTemp: number
    tmpTemp = this.sensor.readSimpleC(1);

    if (1 < tmpTemp && tmpTemp < 50) {
      this.currentTemp = tmpTemp;
    }

  }
}
