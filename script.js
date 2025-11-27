let article = [
    [
        "你好世界！",
        `
        你好，欢迎来到我的网站！在这边我会写一下我的日记，分享一些有趣的事情。
        今天我去了公园，天气非常好，阳光明媚，微风轻拂。我看到很多人在跑步、骑自行车，还有一些人在草地上野餐。孩子们在游乐场玩耍，笑声充满了整个公园。
        我还遇到了一只可爱的狗狗，它非常友好，摇着尾巴向我跑来。我和它玩了一会儿，感觉非常开心。
        总的来说，这是一个美好的一天，我很享受在公园的时光。希望以后还能有更多这样的日子！
        `
    ],
    [
        "Example",
        "Welcome to my website, ermmm idk what to put here lmao!"
    ],
];

restart_.addEventListener('click', function(){
    create();
});

function create() {
    articles_.innerHTML = "";
    for(let i = 0; i < article.length; i++) {
        articles_.innerHTML += `
            <div `+`id="article`+i+`_" class="article">`+`
                <h2>`+article[i][0]+`</h2>
                <p>`+article[i][1]+`</p>
            </div>
        `;
    }
}