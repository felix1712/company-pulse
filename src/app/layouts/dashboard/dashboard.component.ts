import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    // Pie
    public pieChartLabels: string[] = [
        'Sudah Isi Survey',
        'Belum Isi Survey'
    ];
    public pieChartData: number[] = [500, 100];
    public pieChartType: string = 'pie';
    public pieChartColor: Array<any> =[
    { // first color
      backgroundColor: ["#d8d8d8", "#460002"],
      legend:['right']
    }];

    public pieChartOptions:any = {
      legend: {position: 'right'}
    }

    //Pie 2
     public pieChartLabels2: string[] = [
      'Sudah Isi Feedback',
      'Belum Isi Feedback'
    ];
    public pieChartData2: number[] = [500, 100];
    public pieChartType2: string = 'pie';
    public pieChartColor2: Array<any> =[
    { // first color
      backgroundColor: ["#460002", "#d8d8d8"],
      legend:['right']
    }];

    //line chart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Feedback'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Survey'}
  ];
  public lineChartLabels:Array<any> = ['Week1', 'Week2', 'Week2', 'Week3', 'Week4', 'Week4', 'Week4'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: '#0360c5',
      pointBackgroundColor: '#0360c5',
      pointBorderColor: '#fff',
    },
    { // dark grey
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: '#5f151c',
      pointBackgroundColor: '#5f151c',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 100);
      }
    }
    this.lineChartData = _lineChartData;
  }


  constructor() { }

  ngOnInit() {
  }

}
