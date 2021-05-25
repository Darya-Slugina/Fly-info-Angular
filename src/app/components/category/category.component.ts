import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/models/enum';
import {Flight, Milestones} from '../../shared/models/flight.model'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit{
  @Input() flight!: Flight;
  @Input() title: string = '';
  @Input() type: string = '';

  public flightCount: any;

  ngOnInit() {
    this.flightCount = this.flight.milestones.reduce(function(counts, el) {
      if (el.status === Status.AtRisk) {
        counts['atRisk']++;
      } else if (el.status === Status.Failed) {
        counts['failed']++;
      } else if (el.status === Status.Success) {
        counts['success']++;
      } else if (el.status === Status.Missing) {
        counts['missing']++;
      } else if (el.status === Status.Upcoming) {
        counts['upcoming']++;
      }
      return counts;
    }, { atRisk: 0, failed: 0, success:0, missing: 0, upcoming: 0 });
  }
}
