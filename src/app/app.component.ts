import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./css/bootstrap.min.css','./css/simple-sidebar.css','./css/common.css']
})
export class AppComponent implements OnInit{
  title = 'LoginApp';



  isJqueryWorking: any; 

  hello(){
    alert("Hello shahriar");
  }


ngOnInit(){



    $("#btnDemo").click(function(){

       alert("Inside DemoCall");
    });


    $("#menu-toggle").click(function() {
  
        $("#main-wrapper").toggleClass("toggled");
        return false;
    });

 
    $(document).ready(() => { 
 
        this.isJqueryWorking = 'Jquery is working !!!';  


        var DemoCall =  function(){

          alert("Inside DemoCall");
        }

    });  

}
  

}
