// // loader
// var loader = document.querySelector('.loader');

// var scrollPosition = [
//   self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
//   self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
// ];
// var html = jQuery('html');
// html.data('scroll-position', scrollPosition);
// html.data('previous-overflow', html.css('overflow'));
// html.css('overflow', 'hidden');
// window.scrollTo(scrollPosition[0], scrollPosition[1]);

// $(document).ready(function () {
//   setTimeout(function () {
//     var html = jQuery('html');
//     var scrollPosition = html.data('scroll-position');
//     html.css('overflow', html.data('previous-overflow'));
//     window.scrollTo(scrollPosition[0], scrollPosition[1]);
//     loader.style.display = "none";
//   }, 2000);

// });

// loader end
// calendar
 // Cari tarixi alırıq
 const currentDate = new Date();

 // Tarixi formatlayırıq: Gün/Ay/İl, Saat:Dəqiqə
 const formattedDate = currentDate.toLocaleString('tr-TR', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
     hour: '2-digit',
     minute: '2-digit',
     hour12: false
 });

 // Tarixi DOM-a əlavə edirik
 document.getElementById('date-blog').textContent = formattedDate;

// asasas
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link');
  var currentURL = window.location.href;
  navLinks.forEach(link => {
    if (currentURL.includes(link.href)) {
      link.classList.add('active');
    }

    link.addEventListener('click', function () {
      removeActiveClasses();
      this.classList.add('active');
    });
  });

  function removeActiveClasses() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  }
});
// nav border-bottom end

document.querySelectorAll('.electronic-service-blog').forEach(blog => {
  const img = blog.querySelector('.electronic-service-img');

  blog.addEventListener('mouseover', () => {
    img.style.filter = 'brightness(0) saturate(100%) invert(47%) sepia(79%) saturate(3594%) hue-rotate(158deg) brightness(92%) contrast(87%)';
  });

  blog.addEventListener('mouseout', () => {
    img.style.filter = 'none';
  });
});
const colorMax = 192;

const scrollBreakpoint = window.innerHeight * 0.9;

document.addEventListener('DOMContentLoaded', () => {
  randomizeBackgrounds();
  setupScrollListener();
  setupScrollEvent();
});

// scrolls window to top
function setupScrollEvent() {
  const scrollButton = document.querySelector('.scroll-top');

  scrollButton.addEventListener('click', (e) => {
    smoothVerticalScrolling(scrollButton.parentElement, 250, "top");
  });
}

function setupScrollListener() {
  window.addEventListener('scroll', (e) => {
    const scrollButton = document.querySelector('.scroll-top');

    const scrollOffset = window.scrollY;

    if (scrollOffset >= scrollBreakpoint) {
      scrollButton.classList.add('visible');
    } else if (scrollOffset <= 0) {
      scrollButton.classList.remove('visible');
    }
  });
}

function randomizeBackgrounds() {
  const contentContainers = document.querySelectorAll('.content-container');

  [].forEach.call(contentContainers, container => {
    container.style.background = `rgb(${randVal(colorMax)},${randVal(colorMax)},${randVal(colorMax)})`;
  });
}

function randVal(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function smoothVerticalScrolling(duration) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scroll() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  scroll();
}

function setupScrollEvent() {
  const scrollButton = document.querySelector('.scroll-top');

  scrollButton.addEventListener('click', () => {
    smoothVerticalScrolling(500);
  });
}


function SVS_B(eAmt, where) {
  if (where == "center" || where == "") {
    window.scrollBy(0, eAmt / 2);
  }
  if (where == "top") {
    window.scrollBy(0, eAmt);
  }
}


// owl-carousel
// $(function () {
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 3,
//     margin: 10,
//     loop: true,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 2
//       },
//       1000: {
//         items: 3
//       }
//     }
//   });
// });


$(document).ready(function () {
  $('.custom-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.custom-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });
});
// police mobile-navbar
function handleSidebar() {
  let sidebarList = document.getElementById('sidebar-list');
  let sidebarOpener = document.getElementById('sidebar-expand-icon');

  if (sidebarOpener.classList.contains("sidebar-expanding-open")) {
    sidebarList.style.display = "none"
    sidebarOpener.classList.remove("sidebar-expanding-open");
  } else {
    sidebarList.style.display = "block";
    sidebarOpener.classList.add('sidebar-expanding-open');
  }
}

// aaaaaaaaaaaaaaaaaaaaaaaa
