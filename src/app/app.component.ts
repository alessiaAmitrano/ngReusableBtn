import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = 'Click on a button';
  textBtnConfig = {
    styles: {
      position: 'relative',
      width: '150px',
      height: '60px',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px'
    },
    text: 'Click Here'
  };

  imgBtnConfig = {
    styles: {
      position: 'relative',
      width: '50px',
      height: '50px'
    },
    src: './assets/user-shape.png'
  };

  onClickEventReceived(event: string) {
    this.message = event;
  }
}
