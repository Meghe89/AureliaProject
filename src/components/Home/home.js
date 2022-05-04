import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';


@inject(Router)

export class home{
  constructor(router) {
    this.heading = 'Benvenuto';
    this.subheading = 'Inserisci le credenziali per accedere'   
    this.userName = '',
    this.password = ''
    this.router = router;
  }
  login(){
    //console.log('email',this.userName,'password',this.password)
    
    fetch('http://kamaji2.dev.netbuilder.it/00900001/auth',{
    method: 'POST',
    headers: {'Content-Type': 'raw'},
    body: JSON.stringify({
      "username":this.userName,
      "password":this.password,
      "grant_type":"password"
    })
  })
  .then(response=>response.json())
  .then(data=>{    
    this.userName = '';
    this.password = '';
    //console.log(data);
    if (data.access_token) {
      window.localStorage.setItem(
        'token', data.access_token
        )
        this.router.navigateToRoute('about');
      } else {
        console.log('no');
        alert('Credenziali errate! Riprova.');
      }
    }); 
  }  
}

