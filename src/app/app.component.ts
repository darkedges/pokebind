import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tiles: Tile[] = [
    { text: '1', cols: 1, rows: 3, color: 'lightgreen' },
    { text: '2', cols: 1, rows: 3, color: 'lightblue' },
    { text: '3', cols: 1, rows: 3, color: 'lightblue' },
    { text: '4', cols: 1, rows: 3, color: 'lightblue' },
    { text: '5', cols: 1, rows: 3, color: 'lightblue' },
    { text: '6', cols: 1, rows: 3, color: 'lightblue' },
    { text: '7', cols: 1, rows: 3, color: 'lightblue' },
    { text: '8', cols: 1, rows: 3, color: 'lightblue' },
    { text: '9', cols: 1, rows: 3, color: 'lightblue' },
  ];
  value = 1;
  oldValue = 0;
  update() {
    this.tiles[this.oldValue].color = 'lightblue'
    this.oldValue = (this.value - 1) % 9
    this.tiles[this.oldValue].color = 'lightgreen'
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}
