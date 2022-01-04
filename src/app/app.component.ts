import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  celsiusNumber;
  fahrenheitNumber;

  celToFah(cel) {
    console.log(typeof cel);

    let temp = cel * 1.8 + 32;
    this.fahrenheitNumber = (temp * 10) / 10;
  }

  FahToCel(fah) {
    let temp = (fah - 32) * (5 / 9);
    this.celsiusNumber = (temp * 10) / 10;
  }
}
