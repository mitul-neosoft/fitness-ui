import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-popover-modal',
  templateUrl: './popover-modal.component.html',
  styleUrls: ['./popover-modal.component.scss'],
})
export class PopoverModalComponent {

  constructor(private modalCtrl: ModalController) {}

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

}
