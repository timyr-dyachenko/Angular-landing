
    document.addEventListener("DOMContentLoaded", function(){
      window.addEventListener('scroll', function() {
          if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('custom-header');
            navbar_height = document.querySelector('.navbar').offsetHeight;
          } else {
            document.getElementById('navbar_top').classList.remove('custom-header');
          } 
      });
    }); 


    // $(function(){
    //   $('.nav-link').on('click', function(e){
    //     $('html,body').stop().animate({ 
    //       scrollTop: $('#about_us').offset().top }, 700);e.preventDefault();
    //   });
    // });
