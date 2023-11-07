import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'First App';
  url1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  url2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxogjBpkk4EDnaqvwBhdj4vYwTkzZ08V0tlIQpC0&s';
  url = this.url1;
  showLogo = true;

  mois = [
    'Janvier',
    'Février',
    'Mars',
    '...'];

  changeLogo(){
    console.log('Bouton cliqué!!!');
    this.url = (this.url === this.url1)?this.url2:this.url1;
  }

  toggleLogo(){
    this.showLogo = this.showLogo?false:true;
  }
}
