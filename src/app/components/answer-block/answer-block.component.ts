import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-block',
  templateUrl: './answer-block.component.html',
  styleUrls: ['./answer-block.component.css']
})
export class AnswerBlockComponent implements OnInit {
  @Input() solution: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
