$(function() {
    $.scrollDepth({
    minHeight: 100,
    elements: ['#comments', 'footer'],
    percentage: true,
    userTiming: false,
    pixelDepth: false,
    nonInteraction: false,
    eventHandler: function(data) {
      ga('send', 'event', 'Page Scroll', 'Scrolling', 'scroll');
    }
  });
})
