import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> =  new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  };

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300)) //No ha
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  teclaPresionada( ){
    this.debouncer.next( this.termino );
  }

}
