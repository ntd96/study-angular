import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { localStorageService} from './services/localStorage-service/local-storage-service.service';
import { ToggleComponent } from './toggle/toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(ToggleComponent) toggleComp?: QueryList<ToggleComponent>
  @ViewChild('toggleButton', {static: true}) toggleButton?: ElementRef<HTMLInputElement>
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
  showlast: boolean = false
  constructor ( private localStorageService: localStorageService ) {

  }
  
  ngOnInit () {
   this.data =  this.localStorageService.getItem('list-users')
  //  console.log('Đây là Toggle BUTTON:', this.toggleButton?.nativeElement.focus());
   
    setTimeout(() => {
      this.toggleButton?.nativeElement.focus()
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log(this.toggleComp);
    // this.toggleComp?.onToggleViewTemplate()
    this.toggleComp?.changes.subscribe(console.log)
  }

}
