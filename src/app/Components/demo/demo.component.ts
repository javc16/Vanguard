import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { City } from 'src/app/Models/City';
import { DemoService } from 'src/app/Services/demo/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Output('statusSlectedChange') statusSelectedChange: EventEmitter<any> = new EventEmitter(); 
  city!: City[];
  displayedColumns: string[] = ['id', 'name', 'description'];
  constructor(private cityservice: DemoService) { }

  ngOnInit() {
    this.cityservice.getData().subscribe((res: any[])=>{
      this.city= res;
    })
    console.log(this.city)  
  }
}
