document.addEventListener("DOMContentLoaded", () => {

    // 모든 Recommended 배지 숨기기
    document.querySelectorAll(".badge").forEach(badge=>{
        badge.style.display="none";
    });

    const lang = navigator.language.toLowerCase();

    if(lang.startsWith("ko")){

        document.getElementById("ko-badge").style.display="inline-block";

    }

    else if(lang.startsWith("ja")){

        document.getElementById("ja-badge").style.display="inline-block";

    }

    else if(lang.startsWith("zh")){

        document.getElementById("zh-badge").style.display="inline-block";

    }

    else{

        document.getElementById("en-badge").style.display="inline-block";

    }

});
