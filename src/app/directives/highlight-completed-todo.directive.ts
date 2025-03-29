import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  constructor() { }

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.classList.add('completed');
    } else {
        this.el.nativeElement.classList.remove('completed');
    }
  })

}
