import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Ama-modal',
  templateUrl: './Ama-modal.component.html',
  styleUrls: ['./Ama-modal.component.scss']
})
export class AmaModalComponent implements OnInit {

  /* Datos entrada */
  @Input() titulo! : string;
  @Input() ocultarHeader : boolean = false;
  @Input() content : string = "";
  @Input() hideClose : boolean = true;
  @Output() emmiterClose : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    document.body.classList.add('modal-open');
  }

  cerrarModal() {
    document.body.classList.remove('modal-open');
    this.emmiterClose.emit();
  }

}
