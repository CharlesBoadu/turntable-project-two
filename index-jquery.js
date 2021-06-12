$(document).ready(function(){

    $.ajax({
        // http may be used instead of https if required
        url: "https://sheetlabs.com/GENE/contactdetails",
        crossDomain : true,
        beforeSend: function(xhr, settings) {
          xhr.setRequestHeader("Authorization","Basic "+btoa("charles.boadu@stu.ucc.edu.gh:t_32d874ee070e906ebe4e7c60080ff7c2"));
        }
      })

      .done(function(data) {
        $.each(data, function(key, value) {
            let td_11 = $("#td-11");
            $('#td-1').css('cursor', 'pointer');

            $("#td-1").click(function(){
                if (value.name == "Charles") { 
                    td_11.append("<h3>" +value.phonenumber+ "</h3>")
                    td_11.append("<h3>" +value.residence+ "</h3>")
                    td_11.append("<h3>" +value.university+ "</h3>")
                }
            })

            let td_22 = $("#td-22");
            $('#td-2').css('cursor', 'pointer');

            $("#td-2").click(function(){
                if (value.name == "Emmanuel") { 
                    td_22.append("<h3>" +value.phonenumber+ "</h3>")
                    td_22.append("<h3>" +value.residence+ "</h3>")
                    td_22.append("<h3>" +value.university+ "</h3>")
                }
            })

            let td_33 = $("#td-33");
            $('#td-3').css('cursor', 'pointer');

            $("#td-3").click(function(){
                if (value.name == "Francisca") { 
                    td_33.append("<h3>" +value.phonenumber+ "</h3>")
                    td_33.append("<h3>" +value.residence+ "</h3>")
                    td_33.append("<h3>" +value.university+ "</h3>")
                }
            })

            let td_44 = $("#td-44");
            $('#td-4').css('cursor', 'pointer');

            $("#td-4").click(function(){
                if (value.name == "Frank") { 
                    td_44.append("<h3>" +value.phonenumber+ "</h3>")
                    td_44.append("<h3>" +value.residence+ "</h3>")
                    td_44.append("<h3>" +value.university+ "</h3>")
                }
            })

            let td_55 = $("#td-55");
            $('#td-5').css('cursor', 'pointer');

            $("#td-5").click(function(){
                if (value.name == "Desmond") { 
                    td_55.append("<h3>" +value.phonenumber+ "</h3>")
                    td_55.append("<h3>" +value.residence+ "</h3>")
                    td_55.append("<h3>" +value.university+ "</h3>")
                }
            })
        });
      });
});