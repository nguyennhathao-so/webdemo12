// Tạo một phần tử <style> để chứa CSS
const style = document.createElement('style');
style.textContent = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .terms-link,.privacy-link a {
        text-decoration: none;
        color:white;
        cursor: pointer; /* Luôn hiển thị con trỏ khi hover vào link */
    }
    .terms-link,.privacy-link a:hover !important {
        color: rgba(49, 46, 46, 0.7); 
    }
    .overlay-bg {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7); /* Tăng độ mờ lên 0.7 */
        z-index: 999;
    }
    .overlay-bg.active {
        display: block;
    }
    .form-container {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
    .form-container.active {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #login-form, #register-form, #forgot-password-email-form, #forgot-password-code-form, #forgot-password-new-form {
        width: 400px;
        height: 580px;
        background-color: #F1A001;
        border-radius: 30px;
        position: relative;
    }
    .form-header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        z-index: 0;
        user-select: none;
    }
    .form-header img {
        width: 105.14px;
    }
    .form-title {
        color: #000;
        font-size: 40px;
        font-weight: 700;
        z-index: 2;
    }
    .form-content {
        background-color: #0F1419;
        position: absolute;
        top: 100px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 0 0 30px 30px;
        user-select: none;
    }
    .text {
        color: #FFF;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }
    .input-group {
        margin: 35px 30px 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .input-group label {
        color: #FFF;
        font-size: 15px;
        font-weight: 500;
        user-select: none;
    }
    .input-field {
        width: 100%;
        height: 40px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 1.3rem;
        outline: none;
    }
    .input-field::placeholder {
        opacity: 0.6;
        
    }
    .submit-btn {
        background-color: #F1A001;
        color: #000000;
        font-size: 20px;
        font-weight: 700;
        padding: 10px 15px;
        border-radius: 10px;
        margin-top: 20px;
        display: block;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
    }
    .submit-btn:hover {
        background-color: #fff383;
    }
    .forgot-password {
        margin-top: 14px;
        margin-bottom: 10px;
    }
    .signup-link span {
        color: #ADADAD;
    }
    .policy-text {
        font-size: 12px;
        position: absolute;
        bottom: 13px;
        left: 15%;
    }
    .terms-link, .privacy-link {
        text-decoration: underline;
    }
    .register-field {
        margin-top: 20px !important;
    }
`;

// Tạo HTML cho các form
const authFormsHTML = `
    <div id="overlay-bg" class="overlay-bg"></div>
    <div id="register-container" class="form-container">
        <form action="" class="form-box" id="register-form">
            <div class="form-header">
                <h1 class="form-title">Đăng ký</h1>
                <img src="/public/icons/Ảnh đại diện.svg" alt="Ảnh đại diện">
            </div>
            <div class="form-content">
                <div class="input-group register-field">
                    <label for="full-name">Họ và tên</label>
                    <input type="text" id="full-name" class="input-field" placeholder="Nhập họ và tên">
                </div>
                <div class="input-group register-field">
                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" class="input-field" placeholder="Nhập Email">
                </div>
                <div class="input-group register-field">
                    <label for="register-password">Mật khẩu</label>
                    <input type="password" id="register-password" class="input-field" placeholder="Nhập mật khẩu">
                </div>
                <div class="input-group register-field">
                    <label for="confirm-password">Nhập lại mật khẩu</label>
                    <input type="password" id="confirm-password" class="input-field" placeholder="Nhập lại mật khẩu">
                </div>
                <button class="submit-btn">Đăng ký</button>
                <div class="signup-link text" style="padding-top:14px">
                    <span>Đã có tài khoản?</span>
                    <a id="toggle-login">Đăng nhập</a>
                </div>
                <p class="policy-text text">
                    <a href="https://ticketbox.vn/customer-terms-of-use" class="terms-link" target="_blank">Điều khoản sử dụng</a>
                     và 
                    <a href="https://ticketbox.vn/information-privacy-policy" class="privacy-link" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                </p>
            </div>
        </form>
    </div>
    <div id="login-container" class="form-container">
        <form action="" id="login-form">
            <div class="form-header">
                <h1 class="form-title">Đăng Nhập</h1>
                <img src="/public/icons/Ảnh đại diện.svg" alt="Ảnh đại diện">
            </div>
            <div class="form-content">
                <div class="input-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" class="input-field" placeholder="Nhập email">
                </div>
                <div class="input-group">
                    <label for="login-password">Mật khẩu</label>
                    <input type="password" id="login-password" class="input-field" placeholder="Nhập mật khẩu">
                </div>
                <button class="submit-btn">Đăng nhập</button>
                <p class="forgot-password text"><a id="toggle-forgot-password">Quên mật khẩu</a></p>
                <div class="signup-link text">
                    <span>Bạn chưa có tài khoản?</span>
                    <a id="toggle-register">Đăng ký</a>
                </div>
                <p class="policy-text text">
                    <a href="https://ticketbox.vn/customer-terms-of-use" class="terms-link" target="_blank">Điều khoản sử dụng</a> và 
                    <a href="https://ticketbox.vn/information-privacy-policy" class="privacy-link" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                </p>
            </div>
        </form>
    </div>
    <div id="forgot-password-email-container" class="form-container">
        <form action="" id="forgot-password-email-form">
            <div class="form-header">
                <h1 class="form-title">Quên mật khẩu</h1>
                <img src="/public/icons/Ảnh đại diện.svg" alt="Ảnh đại diện">
            </div>
            <div class="form-content">
                <div class="input-group" style="margin-top: 85px">
                    <label for="forgot-email">Email</label>
                    <input type="email" id="forgot-email" class="input-field" placeholder="Nhập email">
                </div>
                <button class="submit-btn" id="next-to-code-btn" style="margin-top:40px">Tiếp theo</button>
                <div class="signup-link text" style="padding-top:14px">
                    <span>Bạn chưa có tài khoản?</span>
                    <a id="toggle-register-from-forgot-email">Đăng ký</a>
                </div>
                <p class="policy-text text">
                    <a href="https://ticketbox.vn/customer-terms-of-use" class="terms-link" target="_blank">Điều khoản sử dụng</a> và 
                    <a href="https://ticketbox.vn/information-privacy-policy" class="privacy-link" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                </p>
            </div>
        </form>
    </div>
    <div id="forgot-password-code-container" class="form-container">
        <form action="" id="forgot-password-code-form">
            <div class="form-header">
                <h1 class="form-title">Quên mật khẩu</h1>
                <img src="/public/icons/Ảnh đại diện.svg" alt="Ảnh đại diện">
            </div>
            <div class="form-content">
                <div class="input-group" style="margin-top: 85px">
                    <label for="code">Mã</label>
                    <input type="number" id="code" class="input-field" placeholder="Nhập mã" pattern="\\d*" inputmode="numeric">
                </div>
                <button class="submit-btn" id="next-to-new-password-btn" style="margin-top:40px">Tiếp theo</button>
                <div class="signup-link text" style="padding-top:14px">
                    <span>Bạn chưa có tài khoản?</span>
                    <a id="toggle-register-from-forgot-code">Đăng ký</a>
                </div>
                <p class="policy-text text">
                    <a href="https://ticketbox.vn/customer-terms-of-use" class="terms-link" target="_blank">Điều khoản sử dụng</a> và 
                    <a href="https://ticketbox.vn/information-privacy-policy" class="privacy-link" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                </p>
            </div>
        </form>
    </div>
    <div id="forgot-password-new-container" class="form-container">
        <form action="" id="forgot-password-new-form">
            <div class="form-header">
                <h1 class="form-title">Quên mật khẩu</h1>
                <img src="/public/icons/Ảnh đại diện.svg" alt="Ảnh đại diện">
            </div>
            <div class="form-content">
                <div class="input-group">
                    <label for="new-password">Mật khẩu mới</label>
                    <input type="password" id="new-password" class="input-field" placeholder="Nhập mật khẩu mới">
                </div>
                <div class="input-group">
                    <label for="confirm-new-password">Nhập lại mật khẩu</label>
                    <input type="password" id="confirm-new-password" class="input-field" placeholder="Nhập lại mật khẩu">
                </div>
                <button class="submit-btn">Hoàn tất</button>
                <div class="signup-link text" style="padding-top:14px">
                    <span>Bạn chưa có tài khoản?</span>
                    <a id="toggle-register-from-forgot-new">Đăng ký</a>
                </div>
                <p class="policy-text text">
                    <a href="https://ticketbox.vn/customer-terms-of-use" class="terms-link" target="_blank">Điều khoản sử dụng</a> và 
                    <a href="https://ticketbox.vn/information-privacy-policy" class="privacy-link" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
                </p>
            </div>
        </form>
    </div>
`;

// Chèn CSS và HTML vào trang
document.head.appendChild(style);
document.getElementById('auth-forms-container').innerHTML = authFormsHTML;

// Logic JS
document.addEventListener('DOMContentLoaded', function() {
    const loginToggleBtn = document.getElementById('login-toggle-btn');
    const registerToggleBtn = document.getElementById('register-toggle-btn');
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const forgotPasswordEmailContainer = document.getElementById('forgot-password-email-container');
    const forgotPasswordCodeContainer = document.getElementById('forgot-password-code-container');
    const forgotPasswordNewContainer = document.getElementById('forgot-password-new-container');
    const overlayBg = document.getElementById('overlay-bg');
    const toggleLogin = document.getElementById('toggle-login');
    const toggleRegister = document.getElementById('toggle-register');
    const toggleForgotPassword = document.getElementById('toggle-forgot-password');
    const toggleRegisterFromForgotEmail = document.getElementById('toggle-register-from-forgot-email');
    const toggleRegisterFromForgotCode = document.getElementById('toggle-register-from-forgot-code');
    const toggleRegisterFromForgotNew = document.getElementById('toggle-register-from-forgot-new');
    const nextToCodeBtn = document.getElementById('next-to-code-btn');
    const nextToNewPasswordBtn = document.getElementById('next-to-new-password-btn');

    loginToggleBtn.addEventListener('click', function(event) {
        loginContainer.classList.add('active');
        overlayBg.classList.add('active');
        registerContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        event.preventDefault();
    });

    registerToggleBtn.addEventListener('click', function(event) {
        registerContainer.classList.add('active');
        overlayBg.classList.add('active');
        loginContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        event.preventDefault();
    });

    toggleLogin.addEventListener('click', function(event) {
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    toggleRegister.addEventListener('click', function(event) {
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    toggleForgotPassword.addEventListener('click', function(event) {
        loginContainer.classList.remove('active');
        registerContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.add('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    toggleRegisterFromForgotEmail.addEventListener('click', function(event) {
        forgotPasswordEmailContainer.classList.remove('active');
        registerContainer.classList.add('active');
        loginContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    toggleRegisterFromForgotCode.addEventListener('click', function(event) {
        forgotPasswordCodeContainer.classList.remove('active');
        registerContainer.classList.add('active');
        loginContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    toggleRegisterFromForgotNew.addEventListener('click', function(event) {
        forgotPasswordNewContainer.classList.remove('active');
        registerContainer.classList.add('active');
        loginContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    nextToCodeBtn.addEventListener('click', function(event) {
        forgotPasswordEmailContainer.classList.remove('active');
        forgotPasswordCodeContainer.classList.add('active');
        loginContainer.classList.remove('active');
        registerContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    nextToNewPasswordBtn.addEventListener('click', function(event) {
        forgotPasswordCodeContainer.classList.remove('active');
        forgotPasswordNewContainer.classList.add('active');
        loginContainer.classList.remove('active');
        registerContainer.classList.remove('active');
        forgotPasswordEmailContainer.classList.remove('active');
        overlayBg.classList.add('active');
        event.preventDefault();
    });

    document.addEventListener('click', function(event) {
        if (!loginContainer.contains(event.target) && 
            !registerContainer.contains(event.target) && 
            !forgotPasswordEmailContainer.contains(event.target) && 
            !forgotPasswordCodeContainer.contains(event.target) && 
            !forgotPasswordNewContainer.contains(event.target) && 
            !loginToggleBtn.contains(event.target) && 
            !registerToggleBtn.contains(event.target)) {
            loginContainer.classList.remove('active');
            registerContainer.classList.remove('active');
            forgotPasswordEmailContainer.classList.remove('active');
            forgotPasswordCodeContainer.classList.remove('active');
            forgotPasswordNewContainer.classList.remove('active');
            overlayBg.classList.remove('active');
        }
    });
});