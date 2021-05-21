import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() title: string = '';
  @Input() number: number = 0;
  @Input() class: string = '';

  constructor() {}

  ngOnInit() {}
}
