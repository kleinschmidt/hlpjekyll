var stickySidebar = $('.stickyside');

if (stickySidebar.length > 0) {
  var stickyHeight = stickySidebar.height(),
      sidebarTop = stickySidebar.offset().top;
}

// on scroll move the sidebar
$(window).scroll(function() {
  if (stickySidebar.length > 0) {
    var scrollTop = $(window).scrollTop();

    if (sidebarTop < scrollTop) {
      stickySidebar.css('top', (scrollTop - sidebarTop) + $('nav.top-bar').height());

      // stop the sticky sidebar at the footer to avoid overlapping
      var sidebarBottom = stickySidebar.offset().top + stickyHeight,
          stickyStop = $('.post-content').offset().top + $('.post-content').height();
      if (stickyStop < sidebarBottom) {
        var stopPosition = $('.post-content').height() - stickyHeight;
        stickySidebar.css('top', stopPosition);
      }
    }
    else {
      stickySidebar.css('top', '0');
    }
  }
});

$(window).resize(function() {
  if (stickySidebar.length > 0) {
    stickyHeight = stickySidebar.height();
  }
});
