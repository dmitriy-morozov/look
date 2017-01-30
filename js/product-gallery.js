 $(document).ready(function() {
     $("#thumbs img").hover(function() {
         $('#largeImage').attr('src', $(this).attr('src').replace());
     });
     var imgSwap = [];
     $("#thumbs img").each(function() {
         imgUrl = this.src.replace();
         imgSwap.push(imgUrl);
     });


     $(imgSwap).preload();
 });
 $.fn.preload = function() {
     this.each(function() {
         $('<img/>')[0].src = this;
     });
 }