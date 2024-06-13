$(function(){

    //gnb  스크립트
    let gnb = $('#gnb'),
        dep1 =  gnb.children('li'),
        dep2 =  dep1.children('ul');
    
    dep1.on('mouseenter',function(){
        $(this).addClass('show')
        $(this).children('.dep2').stop().fadeIn(500)
    })
    dep1.on('mouseleave',function(){
        $(this).removeClass('show')
        $(this).children('.dep2').stop().fadeOut(300)
    })


    //탭메뉴
    let tabMenu = $('#fac-tap li a');

    tabMenu.on('click',function(e){
        e.preventDefault();
        let activeCon = $(this).attr('href')

        console.log(activeCon)

        $('#sec-enjoy .wrap').hide()
        $(activeCon).show()

        tabMenu.removeClass('active')
        $(this).addClass('active')

        

    })

    //스와이퍼 슬라이드
    const swiper = new Swiper('#main-slide', {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

})