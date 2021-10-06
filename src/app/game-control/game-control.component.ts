import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberCreated = new EventEmitter<number>();
  interval;
  number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.number++;
      this.numberCreated.emit(this.number);
    }, 1000);
  }
  onEndGame() {
    clearInterval(this.interval);
  }
}
