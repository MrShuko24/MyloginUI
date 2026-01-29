document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');

    if (toggleIcon) {
        toggleIcon.addEventListener('click', () => {
            // Kiểm tra xem đang là password hay text để đổi
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Đổi icon mắt (gạch chéo hoặc mở)
            toggleIcon.classList.toggle('fa-eye');
            toggleIcon.classList.toggle('fa-eye-slash');
        });
    }

    // Thêm hiệu ứng submit cho vui (anh có thể bỏ nếu không thích)
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Đăng nhập thành công! (Demo thôi nha anh Siro 🍓)');
        });
    }
});