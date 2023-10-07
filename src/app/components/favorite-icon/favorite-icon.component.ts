import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  template: `
    <ion-img
      class="heart-icon"
      [src]="isFavorite ? hearthPathActive : hearthPathNotActive"
      [@heartAnimation]="isFavorite ? 'active' : 'inactive'"
      (click)="isFavorite ? onRemove.emit() : onAdd.emit()"
    ></ion-img>
  `,
  styleUrls: ['./favorite-icon.component.scss'],
  animations: [
    trigger('heartAnimation', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1)', // Adjust the scale factor as needed
        })
      ),
      transition(
        'inactive => active',
        animate(
          '0.5s',
          keyframes([
            style({ transform: 'scale(1.2)', offset: 0.2 }), // Scale up at 50% of the animation
            style({ transform: 'scale(1)', offset: 0.9 }), // Return to original size at the end
          ])
        )
      ),
      transition('active <=> inactive', animate('0.2s ease-in-out')),
    ]),
  ],
})
export class FavoriteIconComponent implements OnInit {
  @Input() isFavorite: boolean = false;
  @Input() maxWidth: number = 34;

  @Output() onRemove = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  hearthPathActive = '../../../../assets/icon/active-heart-white.svg';
  hearthPathNotActive =
    '../../../../assets/icon/not-active-heart-white-bordered.svg';

  constructor() {}

  ngOnInit() {}
}
