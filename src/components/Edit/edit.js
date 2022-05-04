import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)

export class edit{
  constructor(router) {
    this.router = router;
    this.heading = 'Edit';
    this.subheading = 'Scegli il campo da modificare e poi clicca sul bottone.';    
    
    let moviDat = JSON.parse(localStorage.movieData);
    
    this.title = moviDat.title;
    this.director = moviDat.director;
    this.year = moviDat.year;
    this.id = localStorage.movieId;          
  }
  
  update(title,id) {
    let token = window.localStorage.getItem('token');   
    
    fetch(`http://kamaji2.dev.netbuilder.it/00900001/movies/${localStorage.movieId}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'raw',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      "title": title,
      "director" : this.director,
      "year" : this.year        
    })
  })
  .then((res)=>res.json())
  .then((data)=>{
    //console.log(data);
    this.router.navigateToRoute(`about`);
    localStorage.removeItem('movieData');
    localStorage.removeItem('movieId');      
  }); 
}
}
