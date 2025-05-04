const pages = {
    account: `<div class='account-page center'>
                <div class='info-container'>
                    <h2 class='text-content vip vanban'>Thông tin tài khoản</h2>
                    <div class='separator'></div>
                </div>
                <div class='form-group-container'>
                    <div class='form-group'>
                        <label>Họ và tên</label>
                        <input type='text' placeholder='Nhập họ và tên'>
                    </div>
                    <div class='form-group'>
                        <label>Email</label>
                        <input type='email' placeholder='Nhập email'>
                    </div>
                    <div class='form-group'>
                        <label>Số điện thoại</label>
                        <input type='tel' placeholder='Nhập số điện thoại'>
                    </div>
                    <div class='form-group'>
                        <label>Ngày tháng năm sinh</label>
                        <input type='date'>
                    </div>
                    <div class='form-group'>
                        <label>Giới tính</label>
                        <div class ='form-group-gioi-tinh'>
                            <label>Nam <input type='radio' name='gender' checked></label>
                            <label>Nữ <input type='radio' name='gender'></label>
                            <label>Khác <input type='radio' name='gender'></label>
                        </div>
                    </div>
                    <div class='button-container'>
                        <button>Cập nhật</button>
                    </div>
                </div>
            </div>`,
    tickets: `<div class="ticket-container center">
                <div class='info-container'>
                    <h2 class='text-content vip vanban'>Vé đã mua</h2>
                    <div class='separator'></div>
                </div>
                <div class="ticket">
                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; text-align:center;">Vé Thứ Bảy</h2>
                    <div class="ticket-in">
                        <div class="ticket-info">
                            <p>📍 Sky Expo - Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</p>
                            <p>🏛 Thứ Bảy & Chủ Nhật, Ngày 02-03 tháng 11 năm 2024</p>
                        </div>
                        <div class="ticket-date">
                            <p class="month">T11, 2024</p>
                            <p class="day">2-3</p>
                            <p class="weekend">Thứ Bảy, CN</p>
                        </div>
                    </div>
                    <p style="font-style: italic; color: #ccc; text-align:center">Vui lòng kiểm tra chi tiết trong mail của bạn</p>
                </div>
                <div class="ticket">
                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; text-align:center;">Vé Thứ Chủ Nhật</h2>
                    <div class="ticket-in">
                        <div class="ticket-info">
                            <p>📍 Sky Expo - Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</p>
                            <p>🏛 Thứ Bảy & Chủ Nhật, Ngày 02-03 tháng 11 năm 2024</p>
                        </div>
                        <div class="ticket-date">
                            <p class="month">T11, 2024</p>
                            <p class="day">2-3</p>
                            <p class="weekend">Thứ Bảy, CN</p>
                        </div>
                    </div>
                    <p style="font-style: italic; color: #ccc; text-align:center">Vui lòng kiểm tra chi tiết trong mail của bạn</p>
                </div>
                <div class="ticket">
                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; text-align:center;">Vé Tuần</h2>
                    <div class="ticket-in">
                        <div class="ticket-info">
                            <p>📍 Sky Expo - Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</p>
                            <p>🏛 Thứ Bảy & Chủ Nhật, Ngày 02-03 tháng 11 năm 2024</p>
                        </div>
                        <div class="ticket-date">
                            <p class="month">T11, 2024</p>
                            <p class="day">2-3</p>
                            <p class="weekend">Thứ Bảy, CN</p>
                        </div>
                    </div>
                    <p style="font-style: italic; color: #ccc; text-align:center">Vui lòng kiểm tra chi tiết trong mail của bạn</p>
                </div>
            </div>`
};

const accountLink = document.getElementById("accountLink");
const dropdown = document.getElementById("dropdown");
let dropdownVisible = false;

accountLink.addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn điều hướng
    dropdownVisible = !dropdownVisible;
    if (dropdownVisible) {
        dropdown.style.display = "block";
        setTimeout(() => { 
            dropdown.style.opacity = "1"; 
            dropdown.style.visibility = "visible"; 
            dropdown.style.transform = "translateX(0)"; /* Mở rộng từ phải sang trái */
        }, 10);
    } else {
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
        dropdown.style.transform = "translateX(100%)"; /* Thu nhỏ về phải */
        setTimeout(() => { dropdown.style.display = "none"; }, 700);
    }
});

document.addEventListener("click", function(event) {
    if (!accountLink.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
        dropdown.style.transform = "translateX(100%)";
        setTimeout(() => { dropdown.style.display = "none"; }, 700);
        dropdownVisible = false;
    }
});

document.querySelectorAll(".dropdown a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let page = this.getAttribute("data-page");
        document.getElementById("content").innerHTML = pages[page];
        history.pushState({ page }, "", "#" + page);
    });
});

window.addEventListener("popstate", function(event) {
    if (event.state && event.state.page) {
        document.getElementById("content").innerHTML = pages[event.state.page];
    }
});

// Xử lý tải trang khi reload
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.hash.substring(1);
    if (pages[currentPage]) {
        document.getElementById("content").innerHTML = pages[currentPage];
    }
});