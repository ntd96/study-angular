import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() checked: boolean = false;
  @Output() checkChange = new EventEmitter<boolean>();
  onChangeToggle() {
    this.checkChange.emit(this.checked)
  }

  onToggleViewTemplate() {
    console.log('Toggle template');
    this.checked = !this.checked
  }

}
