import {IObserver} from "../../interfaces/iobserver";

const Lcd = require('lcd');

export class LCDObserver implements IObserver {

  //Properties
  private lcd: any;

  //Constructor
  constructor() {
    this.initaialize();
  }

  //Initialize the Display
  initaialize(): void {

    //clean up the previous display if it exists
    if(typeof this.lcd !== 'undefined') {
      this.lcd.close();
    }

    //initialize the display
    this.lcd = new Lcd({rs: 26, e: 19, data: [0, 5, 6, 13], cols: 16, rows: 2});
  }

  //Method to write to the Display
  write(col: number, row: number, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.lcd.setCursor(col, row);
      this.lcd.print(message, (err: string) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  }


    //Method to update the Display when temperature or configuration changes
  Update(): void {
    throw new Error("Method not implemented.");
  }
}

