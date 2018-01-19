import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressbarService {

  public config:any = {};

  public selectedIndex = 0;

  constructor(public http:HttpClient) { }

  loadConfig() {
    // setTimeout(() => {
    //   this.config = {
    //     buttons : [27,41,-35,-31],
    //     bars : [78,52,62,34],
    //     limit : 160
    //   };
    // }, 100);

    this.http.get('http://pb-api.herokuapp.com/bars').subscribe(data => {
      this.config = data;
    });

  }

  public adjustValue(value) {
    let barvalue = this.config.bars[this.selectedIndex];
    let newValue =  barvalue + value;
    if(newValue < 0) {
      this.config.bars[this.selectedIndex] = 0;
    } else {
      if(newValue >= this.config.limit) {
        this.config.bars[this.selectedIndex] = this.config.limit;
      } else {
        this.config.bars[this.selectedIndex] = newValue;
      }
    }
  }

  public getPercentage(value) {
    let limit = this.config.limit;
    if(value <= 0) {
      return 0;
    } else if(value >= limit) {
      return 100;
    }
    return Math.ceil((value/limit) * 100);
  }
}