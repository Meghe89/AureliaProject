import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)


export class About {
  constructor(router){
    this.router = router;
    this.heading = 'Movie';
    this.subheading = 'Ecco la lista dei film. Cliccando sul tasto corrispettivo, potrai modificare i dati';
  }

  attached() {
    let token = window.localStorage.getItem('token');
    fetch('http://kamaji2.dev.netbuilder.it/00900001/movies',{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      this.data = data;
    })
  }

  updateContent(data) {
    this.router.navigateToRoute('edit', { id: data.id });
  }
}
