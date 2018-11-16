$(document).ready(function(){
    $('#link2').on("click", function(){
       // $('button').css("backgroundColor", "black");
       // $('input').css("backgroundColor", "black");
        $('input, button').css("backgroundColor", "black");
    });


    $('button').on("click", function(){
       // $('tr').hide(this);
       $(this).closest('tr').remove()
    });



});


