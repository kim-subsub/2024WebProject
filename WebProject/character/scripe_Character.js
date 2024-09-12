
const gallery = document.getElementById("gallery");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}
function moveImage() {
      var img = document.getElementById('snitch');
      var newX = img.offsetLeft + (Math.random() - 0.5) * 100; // 현재 위치에서 -50px ~ 50px 사이로 변경
      var newY = img.offsetTop + (Math.random() - 0.5) * 100; // 현재 위치에서 -50px ~ 50px 사이로 변경
  
      // 화면 경계를 넘지 않도록 조정
      newX = Math.max(0, Math.min(newX, window.innerWidth - img.offsetWidth));
      newY = Math.max(0, Math.min(newY, window.innerHeight - img.offsetHeight));
  
      img.style.left = newX + 'px';
      img.style.top = newY + 'px';
  
      // 흔적 생성
      createTrail(newX, newY);
  
      requestAnimationFrame(moveImage); // 더 부드러운 애니메이션을 위해 requestAnimationFrame 사용
  }
  
  function createTrail(x, y) {
      var trail = document.createElement('span');
      trail.className = 'trail';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      trail.textContent = '--';
      document.getElementById('trail-container').appendChild(trail);
  
      // 흔적이 점차 사라지도록 설정
      setTimeout(function() {
          trail.remove();
      }, 5000); // 5초 후 흔적 삭제
  }
  
  // 움직임 시작
  requestAnimationFrame(moveImage);
  
  
  
  
  