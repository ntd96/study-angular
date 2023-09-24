import { Component } from '@angular/core';
import { localStorageService} from './services/localStorage-service/local-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public name = ''
  data: any
  user = {
    name: 'Duy',
    age: 27
  }

  isActiveBorder?: boolean
  isActiveBackground?: boolean

  handler = (_event: any) => {
    console.log('Click me', _event);
  }

  reduceOne = () => {
    this.user.age -= 1;
  }
  addOne = () => {
    this.user.age += 1;
  }

  currentProgress: number = 70;
  progressColor: string = 'blue'

  checks: boolean = false ;
  onHandleCheckChange(checkParam: any) {
    this.checks = !checkParam
  }

  constructor ( private localStorageService: localStorageService ) {

  }
  


  ngOnInit () {
   this.data =  this.localStorageService.getItem('list-users')
    
  }
}
