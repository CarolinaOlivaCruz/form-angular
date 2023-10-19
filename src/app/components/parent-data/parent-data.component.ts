import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  color: string ='red';
  sobrenome: string = 'Cruz'

  @Input() name: string = '';
  @Input() userData!: { email: string; phone: number };


  constructor() {}

  ngOnInit(): void {}
}
