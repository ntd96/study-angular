import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress (val: number) {   
       this._progress = val
  }
  @Input() backgroundColor: string = '#ccc';
  @Input() progressColor: string = 'tomato';

  private _progress: number = 50;
  get progress () {
    return this._progress;
  }

  constructor () {
      
  }

  ngOnInit(): void {
      console.log('OnInit is', this.progress);
      
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('OnChange is', this.progress);
      
  } 

}
