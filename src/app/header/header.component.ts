import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBarModalComponent } from '../side-bar-modal/side-bar-modal.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink,SideBarModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() MenuOpen:boolean = false;
  @Output() toggleMenu = new EventEmitter<void>();

  onToggleMenu() {
    this.toggleMenu.emit()
  }
}
