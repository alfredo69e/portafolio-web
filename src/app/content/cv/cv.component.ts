import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  single: any[];
  single2: any[];
  view: any[] = [500, 200];


  colorScheme = {
    domain: ['#2A7B90'],
  };

  colorScheme2 = {
    domain: ['#666666', '#5597a7']
  };

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  legendPosition = 'below';
  legendTitle = '';
  tooltipDisabled = true;

  constructor() {
   }




  ngOnInit() {
    this.single = [
      {
        name: 'Manejo de Presion',
        value: 80
      },
      {
        name: 'Comunicacion',
        value: 60
      },
      {
        name: 'Enfoque',
        value: 40
      }
    ];

    this.single2 = [
      {
        name: 'Ingles Tecnico',
        value: 80
      },
      {
        name: 'Español',
        value: 100
      }
    ];
  }

}
