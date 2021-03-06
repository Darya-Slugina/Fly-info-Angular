import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() title: string = "";
  @Input() info: string[] = [];

  public isVisible:boolean = false;
  public filtered: string[] = [];

  ngOnInit() {
    this.filtered = this.info.filter(el => el !== this.info[0])
  }

  public tooltipToggle():void {
    this.isVisible = !this.isVisible;
  }
}
