import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("squareA", { read: ElementRef, static: true }) squareA: ElementRef | any;
  @ViewChild("squareB", { read: ElementRef, static: true }) squareB: ElementRef | any;
  @ViewChild("squareC", { read: ElementRef, static: true }) squareC: ElementRef | any;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.handleRefresh(0);
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
        self.showChart();
      });
      if (event != 0)
        event.target.complete();
    }, 2000);
  }

  showChart() {
    var data = google.visualization.arrayToDataTable([
      ['Element', 'Density', { role: 'style' }],
      ['t', 8.94, '#b87333'], // RGB value
      ['w', 10.49, 'silver'], // English color name
      ['t', 19.3, 'gold'],
      ['f', 10.3, 'gold'],
      ['s', 5.3, 'gold'],
      ['s', 12.3, 'gold'],
      ['m', 8.3, 'gold'],

    ]);

    var options = {
      // title: 'My Daily Activities',
      vAxis: { ticks: [2, 4, 6, 8, 10] },
    };

    var chart = new google.visualization.ColumnChart(
      document.getElementById('piechart')
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
