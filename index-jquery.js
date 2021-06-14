$(document).ready(function(){

    $('td').css('cursor', 'pointer');

    $.get("https://sheetlabs.com/MENC/euros", 
    function(data) {
        
       handleClickEvent = function (id) {

        window.location.reload(); 
        
           for (d in data) {

            
            
            if (d == id) {
                $("#p1").append("<h2> Match Number: "+data[d].matchnumber+"</h2>")
                $("#p2").append("<h2> Round Number: "+data[d].roundnumber+"</h2>")
                $("#p3").append("<h2> Date: "+data[d].date+"</h2>")
                $("#p4").append("<h2> Location: "+ data[d].location+"</h2>")
                $("#p5").append("<h2> Group: "+ data[d].group+"</h2>")
                $("#p6").append("<h2> result: "+ data[d].result+"</h2>")
                          
        }
        }
    }
    
})


})


    
