// ================= DATA =================

let articles = [
    {
        title: "Hello world!",
        text: `
        Welcome to my website! I built this from scratch and most definitely did not use AI for the majority of this project, what do you mean. Anways, I hope you like it and enjoy the definitely human created project that is here. Right now I am yapping a lot because I want to fill in space, so uhh so be it! Alright I think that's enough space wasted, I'm going to continue coding the actually important things now (no offense).
        `,
        images: ["https://i.redd.it/3e5zjadn7qra1.png"],
        lang: "EN"
    },
    {
        title: "你好世界！",
        text: `
        你好，欢迎来到我的网站！在这边我会写一下我的日记，分享一些有趣的事情。 今天我去了公园，天气非常好，阳光明媚，微风轻拂。我看到很多人在跑步、骑自行车，还有一些人在草地上野餐。孩子们在游乐场玩耍，笑声充满了整个公园。 我还遇到了一只可爱的狗狗，它非常友好，摇着尾巴向我跑来我和它玩了一会儿，感觉非常开心。 总的来说，这是一个美好的一天，我很享受在公园的时光。希望以后还能有更多这样的日子！
        `,
        images: [
            "https://s3-us-west-1.amazonaws.com/ehq-production-us-california/f40c5f18b3a36e49a6f5d3dd1d9526ce36e91002/original/1690314651/a70e88521a19164d83f4e559b6474274_thumbnail_image1.jpg?1690314651"
        ],
        lang: "中"
    }
];

// How many articles to load at a time
const CHUNK = 3;

// Track how many have been loaded
let offset = 0;

// Cooldown so extend() doesn't spam
let loading = false;


// ================= INITIAL SETUP =================

create();
restart_.addEventListener('click', create);


// ================= RENDER FUNCTIONS =================

function create() {
    articles_.innerHTML = "";
    offset = 0;
    extend(); // load first chunk
}

function extend() {
    if (loading) return;
    loading = true;

    setTimeout(() => {
        
        const end = Math.min(offset + CHUNK, articles.length);

        for (let i = offset; i < end; i++) {
            renderArticle(i);
        }

        offset = end;
        loading = false;

    }, 600);
}


function renderArticle(index) {
    const a = articles[index];
    let fontFamily = "omoriNormal";
    if (a.lang === "中") fontFamily = "chineseNormal";

    let container = document.createElement("div");
    container.className = "article";
    container.id = "article_" + index;

    container.innerHTML = `
        <div id="article_header">
            <h2>${a.title}</h2>
        </div>
        <p style="font-family: ${fontFamily}; font-size: 25px; line-height: 25px;">
            ${a.text}
        </p>
    `;

    articles_.appendChild(container);

    // Add all images (if any)
    if (a.images && a.images.length > 0) {
        a.images.forEach((src, j) => {
            container.insertAdjacentHTML(
                "beforeend",
                `<img src="${src}" class="article-image" alt="Article image ${j}">`
            );
        });
    }
}

window.addEventListener("scroll", () => {

    // If user reached bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        
        // Only extend if there are more articles
        if (offset < articles.length) {
            extend();
        }
    }
});