var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var animation = document.querySelectorAll("div.animation");;
    var firstBox1 = document.querySelector("div.firstBox1");
    var firstBox2 = document.querySelector("div.firstBox2");

    function scrolling(e) {

      if (isFullyVisible(firstBox1)) {
        firstBox1.classList.add("active");
      }
    //   else {
    //     listItem.classList.remove("active");
    //   }

      if (isFullyVisible(firstBox2)) {
        firstBox2.classList.add("active");
      }

      for (var i = 0; i < animation.length; i++) {
        var listItem = animation[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } 
      }

    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }