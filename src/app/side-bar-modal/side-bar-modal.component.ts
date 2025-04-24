import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-modal',
  imports: [CommonModule],
  templateUrl: './side-bar-modal.component.html',
  styleUrl: './side-bar-modal.component.css',
  standalone: true
})
export class SideBarModalComponent {
  @Input() MenuOpen:boolean = false;
  @Output() toggleMenu = new EventEmitter<void>();

  onToggleMenu() {
    this.toggleMenu.emit()
  }
}
