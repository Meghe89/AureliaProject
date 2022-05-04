import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)


export class About {
  constructor(router){
    this.router = router;
    this.heading = 'Movie';
    this.subheading = 'Ecco la lista dei film. Cliccando sul tasto corrispettivo, potrai modificare i dati';

    let token = window.localStorage.getItem('token');

    //console.log(token);

    fetch('http://kamaji2.dev.netbuilder.it/00900001/movies',{
      method: 'GET',
      headers: {
      Authorization: `Bearer ${token}`,
      },   
    })
    .then(response=>response.json())
    .then(data=>{
      //console.log(data);
      this.data = data;
    })
  }

  updateContent(data) {
    console.log(data.id);
    let token = window.localStorage.getItem('token');
    fetch(`http://kamaji2.dev.netbuilder.it/00900001/movies/${data.id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'raw',
        Authorization: `Bearer ${token}`,
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      //console.log(data);
      this.router.navigateToRoute(`edit`);

      window.localStorage.setItem(
        'movieData', JSON.stringify({
          'title' : data.title,
          'director' : data.director,
          'year' : data.year
        }),                
      )
      window.localStorage.setItem(        
        'movieId', data.id
      )     
    }) 
    
  }
}
