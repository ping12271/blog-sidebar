$(function () {
    /**
     * Blog UI Script Initialize.
     */
    blog.init();
})

const blog = {
    init: function () {
        blog.toggleSlideMenu()
        blog.getScroll()
        blog.backTop()
        blog.visualSlide();
    },
    toggleSlideMenu: function () {
        $('.sidebar-item').on('click', function () {
            $(this).find('ul, .tags-list').slideToggle();
        })
    },

    getScroll: function () {
      $(window).on('scroll', function () {
            const scrollTop = $(Window).scrollTop();
            const visualHeight = $('.visual').innerHeight();
            if(scrollTop > 100) {
                $('html').addClass('get-scroll')
            } else {
                $('html').removeClass('get-scroll')
            }
          if(scrollTop > visualHeight) {
              $('html').addClass('show-header')
          } else {
              $('html').removeClass('show-header')
          }
      })
    },


    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400)
        })
    }
}