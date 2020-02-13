import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-playground-area',
  templateUrl: './playground-area.component.html',
  styleUrls: ['./playground-area.component.css']
})
export class PlaygroundAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const arr = [1, 2, 3];
    const arr2 = [9];

    const result = _.flatMap(arr, x => [x, x]);
    const result2 = arr.concat(arr2);


    console.log('flatMap result: ' + result);
    console.log('concat result: ' + result2);

    const arr3 = [
      {
        x: 20,
        y: 30,
        z: 200
      },
      {
        x: 50,
        y: 40,
        z: 5000
      }
    ];

    const arr4 = [
      {
        x: 50,
        y: 60
      },
      {
        x: 20,
        y: 40
      }
    ];
debugger;
    const result3 = _(arr4).concat(arr3).unionBy('x').value();
    console.log('unionBy result: ' + result3);
  }

}
