import { Component, ElementRef, ViewChild } from '@angular/core';
// import AOS from '../../../node_modules/@types/aos/index';
import { AnimationController } from '@ionic/angular';

// import * as AOS from 'aos'; //AOS - 1
declare var google: any;
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import * as AOS from 'aos/dist/aos.js';
// import { AOS } from 'aos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild("squareA", { read: ElementRef, static: true }) squareA: ElementRef | any;
  @ViewChild("squareB", { read: ElementRef, static: true }) squareB: ElementRef | any;
  @ViewChild("squareC", { read: ElementRef, static: true }) squareC: ElementRef | any;

  constructor(private animationCtrl: AnimationController) {
  }

  ngOnInit() {
    // AOS.init({
    //   duration: 2000,
    //   once: true,
    // });//AOS - 2
    // this.handleRefresh(0);
    this.showChart2();
    this.showLineChart();
    // this.play();
  }
  ionViewWillEnter() {
    this.play();
    console.log("called-------constry----will-");
  }

  handleRefresh(event: any) {
    //calling an API

    setTimeout(() => {
      google.charts.load('current', { packages: ['corechart'] });
      var self = this;
      google.charts.setOnLoadCallback(function () {
        self.showChart2();
      });
      if (event != 0)
        event.target.complete();
    }, 2000);
  }

  showChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' }],
      ['t', 12.94, '#b87333'], // RGB value
      ['w', 19.49, 'silver'], // English color name
      ['t', 8.3, 'gold'],
      ['f', 10.3, 'gold'],
      ['s', 16.3, 'gold'],
      ['s', 9.3, 'gold'],
      ['m', 5.3, 'gold'],

    ]);

    var options = {
      // title: 'My Daily Activities',
      vAxis: {
        ticks: [2, 4, 6, 8, 10],
      },
      hAxis: {
        textStyle: { color: 'red' }
      },
      width: 200,
      height: 150,
    };

    var chart = new google.visualization.ColumnChart(
      document.getElementById('piechart1')
    );

    chart.draw(data, options);

    var chart2 = new google.visualization.ColumnChart(
      document.getElementById('piechart2')
    );

    chart2.draw(data, options);

    var chart3 = new google.visualization.ColumnChart(
      document.getElementById('piechart3')
    );

    chart3.draw(data, options);
  }

  showLineChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', '');
    data.addRows([
      ['t', 6.0],
      ['w', 4.9],
      ['t', 7.5],
      ['f', 3.0],
      ['s', 6.5],
      ['s', 5.8],
      ['m', 6.1]
    ]);

    // Set chart options
    var options = {
      legend: { position: 'none' },
      width: 300,
      height: 200,
      pointsVisible: true,
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.LineChart(
      document.getElementById('linechart')
    );
    chart.draw(data, options);
  }

  public play() {
  const squareA = this.animationCtrl.create()
  .addElement(this.squareA.nativeElement)
  .duration(800)
  .keyframes([
    { offset: 0, transform: 'translateX(100px)' },
    { offset: 1, transform: 'translateX(0)' }
  ]);

const squareB = this.animationCtrl.create()
  .addElement(this.squareB.nativeElement)
  .duration(900)
  .keyframes([
    { offset: 0, transform: 'translateX(100px)' },
    { offset: 1, transform: 'translateX(0)' }
  ]);

const squareC = this.animationCtrl.create()
  .addElement(this.squareC.nativeElement)
  .duration(1000)
  .keyframes([
    { offset: 0, transform: 'translateX(100px)' },
    { offset: 1, transform: 'translateX(0)' }
  ]);

const parent = this.animationCtrl.create()
  .iterations(1)
  .addAnimation([squareA, squareB, squareC]);
  parent.play();

  }
}
