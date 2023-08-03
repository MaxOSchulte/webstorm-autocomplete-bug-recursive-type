import { Directive, Input } from '@angular/core';
import { RecursiveKeyof } from './recursive.type';


export interface Foo {
  bar1: string,
  bar2: {
    baz: string;
  };
}

@Directive({
  selector: '[appTyped]',
  standalone: true
})
export class TypedDirective {
  @Input({required: true}) appTyped!: RecursiveKeyof<Foo>;

}
