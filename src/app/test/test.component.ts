import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public todo= ["Học Type", "Học Angular", "Học Html"]

  constructor() { }

  ngOnInit(): void {
  }

}
