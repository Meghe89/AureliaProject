import classes from './components/About/about.css'

import { PLATFORM } from "aurelia-framework";


  
export class App {
  configureRouter(config) {
    config.title = 'Aurelia';
    //config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      {  route: ['', 'home'],   name: 'home',    moduleId: PLATFORM.moduleName('./components/Home/home'), nav:true, title:'Accedi',  settings: { roles: [] } },
      { route: 'admin', moduleId: 'admin', title: 'Admin', settings: { roles: ['admin'] } },
      { route: 'about',   name: 'about',    moduleId: PLATFORM.moduleName('./components/about/about'), nav:true, title:'about' },
      { route: `edit:id`,   name: 'edit',    moduleId: PLATFORM.moduleName('./components/edit/edit'), nav:true, title:'edit' },
    ]);
  }
}

/* class AuthorizeStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.roles.indexOf('admin') !== -1)) {
      var isAdmin =false;
      if (!isAdmin) {
        return next.cancel(new Redirect('about'));
      }
    }

    return next();
  }
} */


