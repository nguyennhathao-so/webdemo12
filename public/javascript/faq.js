/* =========================== Làm xuất hiện câu trả lời =================== */
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".cau-hoi");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = question.querySelector("p");
            const isVisible = answer.style.display === "block";

            // Ẩn tất cả câu trả lời khác
            document.querySelectorAll(".cau-hoi p").forEach((p) => {
                p.style.display = "none";
            });

            // Mở rộng hoặc thu gọn câu trả lời được nhấn
            answer.style.display = isVisible ? "none" : "block";
        });
    });
});
