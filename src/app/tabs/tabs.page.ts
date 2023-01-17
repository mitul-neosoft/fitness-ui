import { Component,ElementRef, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverModalComponent } from '../popover-modal/popover-modal.component';
import { Tab3Page } from '../tab3/tab3.page';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('popover') popover: any;
  @ViewChild("squareA", { read: ElementRef, static: true }) squareA: ElementRef | any;
  @ViewChild("squareB", { read: ElementRef, static: true }) squareB: ElementRef | any;
  @ViewChild("squareC", { read: ElementRef, static: true }) squareC: ElementRef | any;

  isOpen = false;

  
  constructor(
    private modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private animationCtrl: AnimationController
    ) {}

  // async openModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: PopoverModalComponent,
  //   });
  //   modal.present();

  //   const { data, role } = await modal.onWillDismiss();

  //   // if (role === 'confirm') {
  //   //   this.message = `Hello, ${data}!`;
  //   // }
  // }
  ionViewWillEnter() {
    this.play();
    console.log("called-------constry----will-");
  }
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: Tab3Page,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }


    async showPopover(event: any) {
      const popover = await this.popoverCtrl.create({
        component: PopoverModalComponent,
        event
      });
      await popover.present();
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
