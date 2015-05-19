$(document).ready(function(){
  $('#facebook_icon').click(function(){
    ga('send', 'event', 'Facebook', 'Click', 'facebook');
  });
  $('#twitter_icon').click(function(){
    ga('send', 'event', 'Twitter', 'Click', 'twitter');
  });
  $('#google_icon').click(function(){
    ga('send', 'event', 'Google', 'Click', 'google');
  });
  $('#linkedIn_icon').click(function(){
    ga('send', 'event', 'LinkedIn', 'Click', 'linkedIn');
  });
});
