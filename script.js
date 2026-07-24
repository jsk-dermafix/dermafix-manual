const langs = [
    {
        code: "ko",
        flag: "🇰🇷",
        name: "한국어",
        file: "korea.pdf"
    },
    {
        code: "en",
        flag: "🇺🇸",
        name: "English",
        file: "eng.pdf"
    },
    {
        code: "ja",
        flag: "🇯🇵",
        name: "日本語",
        file: "japan.pdf"
    },
    {
        code: "zh",
        flag: "🇨🇳",
        name: "中文",
        file: "china.pdf"
    }
];

const current = (navigator.language || "en").slice(0,2);

langs.sort((a,b)=>{
    if(a.code===current) return -1;
    if(b.code===current) return 1;
    return 0;
});

const cards = document.querySelector(".cards");

langs.forEach(lang=>{

    const card = document.createElement("a");

    card.className = "card";

    card.href = lang.file;

    card.target = "_blank";

    card.innerHTML = `
        <span class="flag">${lang.flag}</span>

        <div class="info">
            <strong>${lang.name}</strong>
            ${lang.code===current ? '<span class="badge">Recommended</span>' : ''}
        </div>

        <span class="arrow">›</span>
    `;

    cards.appendChild(card);

});
