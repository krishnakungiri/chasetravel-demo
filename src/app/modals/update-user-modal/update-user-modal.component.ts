import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.css']
})
export class UpdateUserModalComponent implements OnInit, OnChanges {
  @Input() user!: IUser;
  @Output() userUpdated = new EventEmitter<any>();
  @Output() closeModalEvent = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("chnages :", changes);
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalEvent.emit()
  }

  onSubmit() {
    this.userService.updateUser(this.user.id, this.user).subscribe((data: any) => {
      this.userUpdated.emit(this.user);
      this.closeModal();
    }, (error) => {
      alert("Failed updating user");
    })

  }
}
