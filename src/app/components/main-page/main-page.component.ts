import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() solution: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  showAnswer(answer: string) {
    this.solution = answer;
    console.log("this is anser", this.solution)
  }
}
