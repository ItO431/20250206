// 獲取所有的圖片和按鈕
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const songNameElement = document.getElementById('song-name'); // 獲取歌曲名稱顯示的元素

let currentIndex = 0;
const totalSlides = slides.length;

// 更新圖片顯示
function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active'); // 顯示當前圖片
        } else {
            slide.classList.remove('active'); // 隱藏其他圖片
        }
    });
    updateSongName(); // 更新歌曲名稱
}

// 更新歌曲名稱顯示
function updateSongName() {
    const activeSlide = slides[currentIndex]; // 獲取當前顯示的圖片
    songNameElement.textContent = activeSlide.alt; // 使用圖片的 alt 屬性來更新歌曲名稱
}

// 上一張圖片
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
});

// 下一張圖片
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
});

// 初始顯示第一張圖片並更新歌曲名稱
updateSlides();





