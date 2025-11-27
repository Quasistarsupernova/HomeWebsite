let article = [
    [
        "Hello world!",
        `Welcome to my website!
        I built this from scratch and most definitely did not use AI for the majority of this project, what do you mean.
        Anways, I hope you like it and enjoy the definitely human created project that is here.
        Right now I am yapping a lot because I want to fill in space, so uhh so be it!
        Alright I think that's enough space wasted, I'm going to continue coding the actually important things now (no offense).`,
        ["https://i.redd.it/3e5zjadn7qra1.png"],
        "EN",
    ],
    [
        "你好世界！",
        `
            你好，欢迎来到我的网站！在这边我会写一下我的日记，分享一些有趣的事情。
        今天我去了公园，天气非常好，阳光明媚，微风轻拂。我看到很多人在跑步、骑自行车，还有一些人在草地上野餐。孩子们在游乐场玩耍，笑声充满了整个公园。
        我还遇到了一只可爱的狗狗，它非常友好，摇着尾巴向我跑来我和它玩了一会儿，感觉非常开心。
        总的来说，这是一个美好的一天，我很享受在公园的时光。希望以后还能有更多这样的日子！
        `,
        ["https://s3-us-west-1.amazonaws.com/ehq-production-us-california/f40c5f18b3a36e49a6f5d3dd1d9526ce36e91002/original/1690314651/a70e88521a19164d83f4e559b6474274_thumbnail_image1.jpg?1690314651"],
        "中",
    ],
];

let off = 0;

create();

restart_.addEventListener('click', function(){
    create();
});

function load_(i){
    articles_.innerHTML += `
        <div `+`id="article`+i+`_" class="article">`+`
            <div id="article_header">
                <h2>`+article[i][0]+`</h2>
            </div>
            <p style="font-family: omoriNormal; Font-size: 25px; line-height: 25px;">`+article[i][1]+`</p>
        </div>
    `;

    for(let j = 0; j < article[i][2].length; j++) {
        document.getElementById("article"+i+"_").innerHTML += `<img src="`+article[i][2][j]+`" alt="Article Image `+j+`" class="article-image">`;
    }
}

function create() {
    articles_.innerHTML = "";
    for(let i = 0; i < 3; i++) {
        load_(i);
    }
    off = 3;
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        setTimeout(() => {
            extend();
        }, 1000); 
    }
});


function extend(){
    if(off+3 > article.length){
        for(let i = off; i < article.length; i++) {
            load_(i);
        }
        off = article.length;
        return;
    }
    for(let i = off; i < off+3; i++) {
        load_(i);
    }
    off += 3;
}