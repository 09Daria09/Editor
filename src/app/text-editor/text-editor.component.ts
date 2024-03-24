import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  execCommand(command: string) {
    document.execCommand(command, false);
  }
  toggleCase() {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return;
  
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    const isLower = selectedText === selectedText.toLowerCase();
  
    const span = document.createElement('span');
    span.textContent = isLower ? selectedText.toUpperCase() : selectedText.toLowerCase();
  
    range.deleteContents(); 
    range.insertNode(span); 
  
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    selection.addRange(newRange);
  }
  
}
