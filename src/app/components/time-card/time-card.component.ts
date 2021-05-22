import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss'],
})
export class TimeCardComponent implements OnInit {
  @Input() arrival: string = '';
  @Input() code?: string = '';
  @Input() type?: string = '';
  @Input() time: string = '';
  @Input() img: boolean = false;
  @Input() color!: string;
  @Input() status!: string;

  constructor() {}

  ngOnInit() {}
}
