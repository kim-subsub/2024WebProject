

//popup
function showPopup() { 
    window.open("popup1.html", "a", "fullscreen=yes"); 
}

//popup1
function move() {
    // 로딩 이미지 표시
    document.getElementById('loading').style.display = 'block';
    // 3초 후에 페이지 이동
    setTimeout(function() {
        window.open("popup2.html", "a", "fullscreen=yes"); 
    }, 3000); // 3초후에 실행
}

//popup2
// 이미지와 텍스트 데이터 배열
const contents = [
    { image: 'image/popup/gg.gif', text: 'Gryffindor!' },
    { image: 'image/popup/ss.gif', text: 'Slytherin!' },
    { image: 'image/popup/hh.gif', text: 'Hufflepuff!' },
    { image: 'image/popup/rr.gif', text: 'Ravenclaw!' }
];

// 랜덤한 인덱스 생성
const randomIndex = Math.floor(Math.random() * contents.length);

// 삽입
const randomContent = contents[randomIndex];
const container = document.getElementById('randomContent');

// 텍스트 
const textElement = document.createElement('p');
textElement.textContent = randomContent.text;
container.appendChild(textElement);

// 이미지
const imgElement = document.createElement('img');
imgElement.src = randomContent.image;
container.appendChild(imgElement);

