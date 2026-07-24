document.addEventListener("DOMContentLoaded", () => {

    // 모든 Recommended 배지 숨기기
    const badges = document.querySelectorAll(".badge");

    badges.forEach((badge) => {
        badge.style.display = "none";
    });

    // 브라우저 언어 가져오기
    const lang = (navigator.language || navigator.userLanguage).toLowerCase();

    let targetBadge = "en-badge";

    if (lang.startsWith("ko")) {

        targetBadge = "ko-badge";

    } else if (lang.startsWith("ja")) {

        targetBadge = "ja-badge";

    } else if (lang.startsWith("zh")) {

        targetBadge = "zh-badge";

    }

    // 추천 배지만 표시
    const badge = document.getElementById(targetBadge);

    if (badge) {

        badge.style.display = "inline-flex";

    }

});
