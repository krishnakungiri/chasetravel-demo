import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent implements OnInit {
  @Output() confirmDeleteEvent = new EventEmitter<any>();
  @Output() closeModalEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }
}
