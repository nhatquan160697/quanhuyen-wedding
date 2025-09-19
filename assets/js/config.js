let biicore = {
  templatePremium: false,
  isPremium: true,
  bgMusic: "assets/audio/BeautifulInWhite-ShaneFilan.mp3",
  effect: { type: "snow" },
  logo: "https://iwedding.info/common/imgs/bii.png?v=20210131",
  isAutoPlay: true,
};

// Force Enable Right Click CSS
const enableRightClickCSS = `
  * {
    user-select: auto !important;
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    pointer-events: auto !important;
  }
  
  body, html {
    user-select: auto !important;
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    pointer-events: auto !important;
  }
  
  /* Override any contextmenu blocking */
  html, body, div, span, img, a, p, h1, h2, h3, h4, h5, h6 {
    user-select: auto !important;
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    pointer-events: auto !important;
  }
`;

// Apply CSS immediately
const style = document.createElement('style');
style.textContent = enableRightClickCSS;
document.head.appendChild(style);

// Force Enable Right Click JavaScript
function enableRightClick() {
  // Force enable right click by overriding all possible prevention methods
  document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing contextmenu event listeners
    document.oncontextmenu = null;
    
    // Override any contextmenu prevention
    document.addEventListener('contextmenu', function(e) {
      e.stopPropagation();
      return true;
    }, true);
    
    // Also enable text selection
    document.body.style.userSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
    document.body.style.mozUserSelect = 'auto';
    document.body.style.msUserSelect = 'auto';
    
    // Enable pointer events
    document.body.style.pointerEvents = 'auto';
    
    // Override any keydown prevention for F12 and right click
    document.addEventListener('keydown', function(e) {
      // Allow F12 (Developer Tools)
      if (e.keyCode === 123) {
        return true;
      }
      // Allow other developer keys
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I
        return true;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) { // Ctrl+Shift+C
        return true;
      }
    }, true);
    
    console.log('Right click has been force enabled!');
  });
  
  // Also run immediately
  document.oncontextmenu = null;
  document.addEventListener('contextmenu', function(e) {
    return true;
  }, true);
}

// Execute immediately
enableRightClick();

// Photo Galleries Data
var photoGalleries = [
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a5f7c65c763d2ef0e2/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a5f7c65c763d2ef0e2/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a0d5c0e352ac024b43/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902a0d5c0e352ac024b43/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199029c1ca1d308fe5da284/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199029c1ca1d308fe5da284/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990291c41d7b37de534632/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990291c41d7b37de534632/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028d8d8a4918ca205514/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028d8d8a4918ca205514/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028adb8f76231c132062/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199028adb8f76231c132062/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990285d5c0e352ac024b42/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/61990285d5c0e352ac024b42/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902821ca1d308fe5da283/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/619902821ca1d308fe5da283/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu</h4></div>"
  },
  {
    src: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199027ed7e97a1853119578/large.jpg",
    thumb: "https://cdn.biihappy.com/ziiweb/default/website/galleries/6199027ed7e97a1853119578/small.jpg",
    subHtml: "<div class='lg-sub-html'><h4>Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó</h4></div>"
  }
];

// Data Wishes
var dataWishes = [];
