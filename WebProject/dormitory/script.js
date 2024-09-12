const getThreshold = () => {
    let data = [];
  
    for (let i = 0; i <= 1.0; i += 0.005) {
      data.push(i);
    }
  
    return data;
  };
  
  const mountObserver = ({ target, handler, threshold }) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold };
  
  
    const observer = new IntersectionObserver(handler, options);
  
    observer.observe(target);
  };
  
  const handleChanges = entries => {
    entries.forEach(({ target, intersectionRatio }) => {
      const element = target.querySelector('.percentage__value');
      const view = target.className.split(' ')[1];
      const percentage = Math.ceil(intersectionRatio * 100);
  
      element.firstChild.data = percentage;
  
      scaleLegendBg({
        bg: document.querySelector(`.legend__item--${view}`).querySelector('.legend__bg'),
        percentage: percentage / 100 });
  
    });
  };
  
  const scaleLegendBg = ({ bg, percentage }) => {
    bg.style.transform = `scaleX(${percentage})`;
  };
  
  document.addEventListener('DOMContentLoaded', event => {
    const views = ['.home', '.about', '.contact', '.services'];
  
    views.map(view => {
      mountObserver({
        target: document.querySelector(view),
        handler: handleChanges,
        threshold: getThreshold() });
  
    });
  });

  window.addEventListener('DOMContentLoaded', function() {
    var viewHome = document.querySelector('.view.home');
    var viewContact = document.querySelector('.view.contact');
    var viewAbout = document.querySelector('.view.about');
    var viewServices = document.querySelector('.view.services');
  
    var content = document.querySelector('.container');
  
    function adjustViewHeight(view, content) {
      var contentHeight = content.offsetHeight;
      var adjustedHeight = contentHeight + 50; 
      view.style.height = adjustedHeight + 'px';
    }
  
    function handleResize() {
      if (window.innerWidth <= 768) { // 화면이 축소될 때
        adjustViewHeight(viewHome, content);
        adjustViewHeight(viewContact, content);
        adjustViewHeight(viewAbout, content);
        adjustViewHeight(viewServices, content);
      } else { // 화면이 축소되지 않았을 때
        viewHome.style.height = ''; 
        viewContact.style.height = ''; 
        viewAbout.style.height = ''; 
        viewServices.style.height = '';
      }
    }
  
    handleResize(); 
    // 창 크기가 변경될 때마다 handleResize 함수를 실행
    window.addEventListener('resize', handleResize);
  });
  