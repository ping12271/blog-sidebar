$(function () {
    /**
     * Blog UI Script Initialize.
     */
    blog.init();
})

const blog = {
    init: function () {
        blog.handleSideMenu()
        blog.toggleSlideMenu()
        blog.getScroll()
        blog.backTop();
    },

    handleSideMenu: function () {
        $('.btn-menu').on('click', function () {
            $('html').addClass('open-side-menu');
        })
        $('.screen').on('click', function () {
            $('html').removeClass('open-side-menu');
        })
    },


    toggleSlideMenu: function () {
        $('.sidebar-item h3').on('click', function () {
            $(this).next('ul, .tags-list').slideToggle();
        });

        $('.side-header .name').on('click', function () {
            $(this).next('.dropdown').slideToggle();
            $(this).closest('li').siblings().find('.dropdown').slideUp();
        });
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