$(document).ready(function()
{


        go();
        window.addEventListener('resize', go);

       function go(){
                $("#new").remove();
			 var event_titles="<?php echo event_titles; ?>"
			  var event_images="<?php echo event_images; ?>"

                var titles=event_titles.split(' ');
                var images=event_images.split(' ');

		 if( $(window).width()>1024  ){
                 var text='<div class="col-sm-12 col-xs-12" id="new" style="text-align: justify;">'

                  for(var i=0;i<titles.length;i++){
                         if(i%2==0){
                                text+='<div class="col-sm-12" id="event'+i+'">'
                                text+='<div class="col-sm-5"><img class="img-responsive img_1" src='+images[i]+'></div>'
                                text+='<div class="col-sm-7">'+titles[i]+'</div><hr></div><br><br>'
                         }
                         else{
                                text+='<div class="col-sm-12" id="event'+i+'">'
                                text+='<div class="col-sm-7">'+titles[i]+'</div>'
                                text+='<div class="col-sm-5"><img class="img-responsive img_1" src='+images[i]+'></div><hr></div><br><br>'

                         }

                  }
                  text+='</div>'
                 $("#area").append(text);

                }
        if( $(window).width()<1024 ){
                var text='<div id="new" class="col-sm-8 col-xs-12">'
                     for(var i=0;i<titles.length;i++){
                                text+='<div class="col-xs-12" id="event'+i+'"><img class="img-responsive img_1" src='+images[i]+'></div>'
                                text+='<div class="col-xs-12">'+titles[i]+'</div>'
                     }
                text+='</div>'
                $("#area").append(text);
        }
    }

});

