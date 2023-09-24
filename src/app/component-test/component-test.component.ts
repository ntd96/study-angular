import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.scss']
})


export class ComponentTestComponent {
  @Input()
  users!: { name: string; age: number; };
  
  ngOnInit() {
    console.log('This is', this.users);
  
  }
  
}
