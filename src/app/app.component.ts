import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SomeComponent } from './some/some.component';
import { TypedDirective } from './typed.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TypedDirective, SomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recursive-type-bug';
}
