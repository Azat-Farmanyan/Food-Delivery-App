import { Injectable, Pipe } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message = '';
  position: 'top' | 'middle' | 'bottom' = 'top';
  constructor(private toastController: ToastController) {}

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

  showToast(message: string, position: 'top' | 'middle' | 'bottom' = 'top') {
    this.message = message;
    this.position = position;
    this.presentToast(this.message, this.position);
  }
}
