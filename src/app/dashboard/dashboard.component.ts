import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthenticationService) {this.loadScripts() ; }

  ngOnInit() {
  }
  loadScripts() {
    const dynamicScripts = [
      'https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js',
      'https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js',
      '../../assets/vendor/jquery/jquery.min.js',
      '../../assets/vendor/bootstrap/js/bootstrap.min.js',
      '../../assets/vendor/metisMenu/metisMenu.min.js',
      '../../assets/vendor/datatables/js/jquery.dataTables.min.js',
      '../../assets/vendor/datatables-plugins/dataTables.bootstrap.min.js',
      '../../assets/vendor/datatables-responsive/dataTables.responsive.js',
      '../../assets/dist/js/sb-admin-2.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
