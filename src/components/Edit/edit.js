import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)

export class edit{
  constructor(router) {
    this.router = router;
  }

  activate(params) {
    this.params = params;
  }

  attached() {
    if (this.params.id) {
      let token = window.localStorage.getItem('token');
      fetch(`http://kamaji2.dev.netbuilder.it/00900001/movies/${this.params.id}`,{
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.data = data;
      }) 
    }
  }
  
  update() {
    let token = window.localStorage.getItem('token');
    fetch(`http://kamaji2.dev.netbuilder.it/00900001/movies/${this.params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: this.data.title,
        director: this.data.director,
        year: this.data.year
      })
    })
    .then((res) => res.json())
    .then((data) => {
      this.router.navigateToRoute(`about`);
    }); 
  }
}
