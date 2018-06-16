$('#banner').mixItUp();

$.ajax({
  type: "GET",
  url:"got.json",
  mimeType: "application/json",
  success: function(data){
    var bookTemplate = $("#got_actors").html();
    var compiledTemplate = Handlebars.compile(bookTemplate);
    var html = compiledTemplate(data);
    $(".banner").append(html);
    

    $(".showdetails").click(function(){
        var i=$(this).attr('id');
        var modal_id="#modal-"+i;
        $(modal_id).modal();
        var body_id= "#body-" +i;
         var x="";
       traverse(data.characters[i],x,body_id);
	
    });

function traverse(o,x,body_id) {
    for (i in o) {
        if(typeof(o[i])!="object")
        { 
                if(i!=="characterImageThumb")
		{
                 x = "<h6>"+i + " " + o[i] + "</h6>";
		//console.log(x);
                if(i!=="characterImageFull")
                 $(body_id).append(x);
                x="";
		}
                    
         }
        if (!!o[i] && typeof(o[i])=="object") {
            traverse(o[i] );
        }
    }
}

  }
});








