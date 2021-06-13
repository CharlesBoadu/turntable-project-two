$(document).ready(function(){

    $.get("https://sheetlabs.com/MENC/euros", 
    function(data) {
        data.forEach(d => {
            let td_11 = $("#td-11");
            $('#td-1').css('cursor', 'pointer');

            $("#td-1").click(function(){
                if (d.__id == 1) { 
                    td_11.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_11.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_11.append("<h4> Date: " +d.date+ "</h4>")
                    td_11.append("<h4> Location: " +d.location+ "</h4>")
                    td_11.append("<h4>Group: " +d.group+ "</h4>")
                    td_11.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_22 = $("#td-22");
            $('#td-2').css('cursor', 'pointer');

            $("#td-2").click(function(){
                if (d.__id == 3) { 
                    td_22.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_22.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_22.append("<h4> Date: " +d.date+ "</h4>")
                    td_22.append("<h4> Location: " +d.location+ "</h4>")
                    td_22.append("<h4>Group: " +d.group+ "</h4>")
                    td_22.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_33 = $("#td-33");
            $('#td-3').css('cursor', 'pointer');

            $("#td-3").click(function(){
                if (d.__id == 5) { 
                    td_33.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_33.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_33.append("<h4> Date: " +d.date+ "</h4>")
                    td_33.append("<h4> Location: " +d.location+ "</h4>")
                    td_33.append("<h4>Group: " +d.group+ "</h4>")
                    td_33.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_44 = $("#td-44");
            $('#td-4').css('cursor', 'pointer');

            $("#td-4").click(function(){
                if (d.__id == 7) { 
                    td_44.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_44.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_44.append("<h4> Date: " +d.date+ "</h4>")
                    td_44.append("<h4> Location: " +d.location+ "</h4>")
                    td_44.append("<h4>Group: " +d.group+ "</h4>")
                    td_44.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_55 = $("#td-55");
            $('#td-5').css('cursor', 'pointer');

            $("#td-5").click(function(){
                if (d.__id == 9) { 
                    td_55.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_55.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_55.append("<h4> Date: " +d.date+ "</h4>")
                    td_55.append("<h4> Location: " +d.location+ "</h4>")
                    td_55.append("<h4>Group: " +d.group+ "</h4>")
                    td_55.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_66 = $("#td-66");
            $('#td-6').css('cursor', 'pointer');

            $("#td-6").click(function(){
                if (d.__id == 11) { 
                    td_66.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_66.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_66.append("<h4> Date: " +d.date+ "</h4>")
                    td_66.append("<h4> Location: " +d.location+ "</h4>")
                    td_66.append("<h4>Group: " +d.group+ "</h4>")
                    td_66.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_77 = $("#td-77");
            $('#td-7').css('cursor', 'pointer');

            $("#td-7").click(function(){
                if (d.__id == 13) { 
                    td_77.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_77.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_77.append("<h4> Date: " +d.date+ "</h4>")
                    td_77.append("<h4> Location: " +d.location+ "</h4>")
                    td_77.append("<h4>Group: " +d.group+ "</h4>")
                    td_77.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_88 = $("#td-88");
            $('#td-8').css('cursor', 'pointer');

            $("#td-8").click(function(){
                if (d.__id == 15) { 
                    td_88.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_88.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_88.append("<h4> Date: " +d.date+ "</h4>")
                    td_88.append("<h4> Location: " +d.location+ "</h4>")
                    td_88.append("<h4>Group: " +d.group+ "</h4>")
                    td_88.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_99 = $("#td-99");
            $('#td-9').css('cursor', 'pointer');

            $("#td-9").click(function(){
                if (d.__id == 17) { 
                    td_99.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_99.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_99.append("<h4> Date: " +d.date+ "</h4>")
                    td_99.append("<h4> Location: " +d.location+ "</h4>")
                    td_99.append("<h4>Group: " +d.group+ "</h4>")
                    td_99.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_110 = $("#td-110");
            $('#td-10').css('cursor', 'pointer');

            $("#td-10").click(function(){
                if (d.__id == 19) { 
                    td_110.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_110.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_110.append("<h4> Date: " +d.date+ "</h4>")
                    td_110.append("<h4> Location: " +d.location+ "</h4>")
                    td_110.append("<h4>Group: " +d.group+ "</h4>")
                    td_110.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_111 = $("#td-111");
            $('#td-11').css('cursor', 'pointer');

            $("#td-11").click(function(){
                if (d.__id == 21) { 
                    td_111.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_111.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_111.append("<h4> Date: " +d.date+ "</h4>")
                    td_111.append("<h4> Location: " +d.location+ "</h4>")
                    td_111.append("<h4>Group: " +d.group+ "</h4>")
                    td_111.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_112 = $("#td-112");
            $('#td-12').css('cursor', 'pointer');

            $("#td-12").click(function(){
                if (d.__id == 23) { 
                    td_112.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_112.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_112.append("<h4> Date: " +d.date+ "</h4>")
                    td_112.append("<h4> Location: " +d.location+ "</h4>")
                    td_112.append("<h4>Group: " +d.group+ "</h4>")
                    td_112.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_113 = $("#td-113");
            $('#td-13').css('cursor', 'pointer');

            $("#td-13").click(function(){
                if (d.__id == 25) { 
                    td_113.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_113.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_113.append("<h4> Date: " +d.date+ "</h4>")
                    td_113.append("<h4> Location: " +d.location+ "</h4>")
                    td_113.append("<h4>Group: " +d.group+ "</h4>")
                    td_113.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_114 = $("#td-114");
            $('#td-14').css('cursor', 'pointer');

            $("#td-14").click(function(){
                if (d.__id == 27) { 
                    td_114.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_114.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_114.append("<h4> Date: " +d.date+ "</h4>")
                    td_114.append("<h4> Location: " +d.location+ "</h4>")
                    td_114.append("<h4>Group: " +d.group+ "</h4>")
                    td_114.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_115 = $("#td-115");
            $('#td-15').css('cursor', 'pointer');

            $("#td-15").click(function(){
                if (d.__id == 29) { 
                    td_115.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_115.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_115.append("<h4> Date: " +d.date+ "</h4>")
                    td_115.append("<h4> Location: " +d.location+ "</h4>")
                    td_115.append("<h4>Group: " +d.group+ "</h4>")
                    td_115.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_116 = $("#td-116");
            $('#td-16').css('cursor', 'pointer');

            $("#td-16").click(function(){
                if (d.__id == 31) { 
                    td_116.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_116.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_116.append("<h4> Date: " +d.date+ "</h4>")
                    td_116.append("<h4> Location: " +d.location+ "</h4>")
                    td_116.append("<h4>Group: " +d.group+ "</h4>")
                    td_116.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_117 = $("#td-117");
            $('#td-17').css('cursor', 'pointer');

            $("#td-17").click(function(){
                if (d.__id == 33) { 
                    td_117.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_117.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_117.append("<h4> Date: " +d.date+ "</h4>")
                    td_117.append("<h4> Location: " +d.location+ "</h4>")
                    td_117.append("<h4>Group: " +d.group+ "</h4>")
                    td_117.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_118 = $("#td-118");
            $('#td-18').css('cursor', 'pointer');

            $("#td-18").click(function(){
                if (d.__id == 35) { 
                    td_118.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_118.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_118.append("<h4> Date: " +d.date+ "</h4>")
                    td_118.append("<h4> Location: " +d.location+ "</h4>")
                    td_118.append("<h4>Group: " +d.group+ "</h4>")
                    td_118.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_119 = $("#td-119");
            $('#td-19').css('cursor', 'pointer');

            $("#td-19").click(function(){
                if (d.__id == 37) { 
                    td_119.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_119.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_119.append("<h4> Date: " +d.date+ "</h4>")
                    td_119.append("<h4> Location: " +d.location+ "</h4>")
                    td_119.append("<h4>Group: " +d.group+ "</h4>")
                    td_119.append("<h4>Result: " +d.result+ "</h4>")
                }
            })

            let td_220 = $("#td-220");
            $('#td-20').css('cursor', 'pointer');

            $("#td-20").click(function(){
                if (d.__id == 39) { 
                    td_220.append("<h4> Match Number: " +d.matchnumber+ "</h4>")
                    td_220.append("<h4> Round Number: " +d.roundnumber+ "</h4>")
                    td_220.append("<h4> Date: " +d.date+ "</h4>")
                    td_220.append("<h4> Location: " +d.location+ "</h4>")
                    td_220.append("<h4>Group: " +d.group+ "</h4>")
                    td_220.append("<h4>Result: " +d.result+ "</h4>")
                }
            })
        })
    })
});