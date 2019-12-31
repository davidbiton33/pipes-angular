import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  text:any = 'HELLO PIPES'; 

  textAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('20/10/10')
    }, 3000);
  })



  ngOnInit() {

    // this.textAsync.then(data => this.text = data)
  }

}
