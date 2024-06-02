import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLogService } from './my-log.service';
import { Task2Service } from './task2.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Task3Service } from './task3.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  providers: [MyLogService, Task2Service],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  title = 'HwServer';
  // task1

//  products:string[]=[];
//  filteredProducts: string[] = [];
//   filterText: string = '';
//  constructor(private mylog:MyLogService){};
 
//  ngOnInit(): void {
//   this.products = this.mylog.getProducts();
//   this.filteredProducts = this.products;
//  } 
//  applyFilter() {
//   this.filteredProducts = this.products.filter(product =>
//     product.toLowerCase().includes(this.filterText.toLowerCase())
//   );
// }

// task2
// max:number=0;
// constructor(private hw2:Task2Service){};
// getNumbers(){
//   return this.hw2.getNumbers();
// }
// sortInc(){
//   this.hw2.inc();
// }
// sortDes(){
//   this.hw2.des();
// }
// findMax(){
//  this.max= this.hw2.getMax();
// }


// task3
products: any = [];
  filteredProducts:any = [];
  filter = '';
  maxPriceProduct: any;
  constructor(private task3: Task3Service) { }
ngOnInit(): void {
  this.products=this.task3.getProducts();
  this.filteredProducts=this.task3.getProducts();
  this.maxPriceProduct=this.task3.getMaxPriceProduct();
}
onFilterChange() {
  this.filteredProducts = this.products.filter((product: { name: string; }) =>
    product.name.toLowerCase().includes(this.filter.toLowerCase())
  );
}
sortAsc(){
  this.filteredProducts=this.task3.sortAsc();
}
sortDes(){
  this.filteredProducts=this.task3.sortDes();
}

}
