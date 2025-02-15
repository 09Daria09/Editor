import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component';
@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, TextEditorComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Editor';
}
