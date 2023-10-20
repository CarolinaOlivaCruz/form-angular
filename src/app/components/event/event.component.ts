import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMensage(): void {
    // sem toggle = this.show = true; com toggle = evento de click e desclick
    this.show = !this.show;
  }
}
