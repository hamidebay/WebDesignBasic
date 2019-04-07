$(document).ready(function(){

$('#enqueque-button').on('click', function(){
    let quequeFactory = new QuequeFactory();
    quequeFactory.enqueque();
    $('.queque-container').html(quequeFactory);
    console.log(quequeFactory);
})








})