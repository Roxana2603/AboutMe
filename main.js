$(document).ready(function(){
    var bottom=$("header").outerHeight();
    var header=$("header").offset().top + bottom;
 $(window).scroll(function(){
      // header fixed only when window width greater than 991px
     if($(window).width()>991){
     if($(window).scrollTop()>=header){
         $("header").addClass("sticky")
     }
     else{
      $("header").removeClass("sticky")	
     }
 }
 })

 // navbar active link

 $(".navbar ul li a").click(function(){
      $(".navbar ul li a").removeClass("active")
      $(this).addClass("active");
 })

$(".ham-burger").click(function(){
    $(this).toggleClass("active")
    $(".navbar").toggleClass("open");
})

// typer
$(function() {
    let index = 0,
        count = 0;
    let word = '';
    let words = ["a developer", "a challenge-seeker", "a space enthusiast", "looking for work!"];
    untype();

    function type(word) {
        setTimeout(function() {
            if (word.length > 0) {
                $('.typer').append(word.shift());
                type(word);
            } else if (word.length === 0) {
                pause();
            }
        }, 180)
    }

    function untype() {
        setTimeout(function() {
            word = $('.typer').html().split('');
            word.pop();
            if (word.length > 0) {
                $('.typer').empty().append(word);
                untype();
            } else if (word.length === 0) {
                $('.typer').empty();
                nextWord();
            }
        }, 100);
    }

    function pause() {
        setTimeout(function() {
            untype();
        }, 300);
    }

    function nextWord() {
        index = count % 6;
        count++;
        word = words[index].split('');
        type(word);
    }
});
})