/* =========================== animation ảnh ở cuối =================== */
const marquee = document.querySelector('.marquee-content');


let speed ;

// Hàm cập nhật tốc độ chạy
function updateSpeed(newSpeed) {
    speed = newSpeed; // Lưu tốc độ mới
    marquee.style.animationDuration = `${speed}s`; // Áp dụng vào animation
}

// Dừng animation khi hover
marquee.addEventListener('mouseover', () => {
    marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseout', () => {
    marquee.style.animationPlayState = 'running';
});

// Gọi hàm updateSpeed() để thay đổi tốc độ khi cần
updateSpeed(40); 



/* =========================== animation ảnh ở đầu =================== */
const animate = document.querySelector('.animation-content');

let speed1; 

// Cập nhật tốc độ chạy
function updateSpeed1(newSpeed) {
    speed1 = newSpeed;
    animate.style.animationDuration = `${speed1}s`;
}

// Dừng animation khi hover
animate.addEventListener('mouseover', () => {
    animate.style.animationPlayState = 'paused';
});

animate.addEventListener('mouseout', () => {
    animate.style.animationPlayState = 'running';
});

// Thiết lập tốc độ mặc định
updateSpeed1(40);



