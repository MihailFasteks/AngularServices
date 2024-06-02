import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {
  
  numbers:number[]=[1, 25,37,21,18,13,22];
  constructor() { }
  getNumbers(): number[] {
    return this.numbers;
  }
  inc(){
    this.numbers.sort((a,b)=>a-b);
  }
  des(){
    this.numbers.sort((a,b)=>b-a);
  }
  getMax():number {
    return Math.max(...this.numbers);
  }
 
}
