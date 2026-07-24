document.addEventListener("DOMContentLoaded", () => {

    // 모든 Recommended 숨김
    document.querySelectorAll(".badge").forEach(badge => {
        badge.style.display = "none";
    });

    // 브라우저 언어
    const lang = (navigator.language || "en").toLowerCase();

    let target = "en-badge";

    if (lang.startsWith("ko")) {
        target = "ko-badge";
    } else if (lang.startsWith("ja")) {
        target = "ja-badge";
    } else if (lang.startsWith("zh")) {
        target = "zh-badge";
    }

    // 해당 언어만 표시
    const badge = document.getElementById(target);

    if (badge) {
        badge.style.display = "inline-flex";
    }

});
