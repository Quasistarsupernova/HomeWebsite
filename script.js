let articles = [
    {
        title: "Hello world!",
        text: `
        <font face="omoriScared"><span style="font-family: omoriNormal;"><font style="font-size: 25px;"><span style="font-family: omoriNormal;">Welcome to my website! I built this from scratch and <span style="font-family: omoriScared;">most definitely</span> <span style="font-family: omoriScared;">did not </span>use AI for the majority of this project, <span style="font-family: omoriScared;"><span style="font-family: omoriNormal;">what do you mean</span></span>. Anyways, I hope you like it and enjoy the definitely human created project that is here. Right now I am yapping a lot because I want to fill in space, so uhh so be it! Alright I think that's enough space wasted, I'm going to continue coding the actually important things now (no offense).</span></font></span></font>
        `,
        images: ["https://i.redd.it/3e5zjadn7qra1.png"],
        lang: "EN"
    },
    {
        title: "Another example article?",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        images: [],
        lang: "EN"
    },
    {
        title: "你好世界！2025/11/26",
        text: `
        恭喜你，，，你能看懂中文。太厉害了吧。嗯，，，，，，，，我应该说什么呢。。天地玄黄　宇宙洪荒
日月盈昃　辰宿列张
寒来暑往　秋收冬藏
闰余成岁　律召调阳
云腾致雨　露结为霜
金生丽水　玉出昆冈
剑号巨阙　珠称夜光
果珍李柰　菜重芥姜
海咸河淡　鳞潜羽翔
龙师火帝　鸟官人皇
始制文字　乃服衣裳
推位让国　有虞陶唐
吊民伐罪　周发殷汤
坐朝问道　垂拱平章
爱育黎首　臣伏戎羌
遐迩壹体　率宾归王
鸣凤在树　白驹食场
化被草木　赖及万方
盖此身发　四大五常
恭惟鞠养　岂敢毁伤
女慕贞絜　男效才良
知过必改　得能莫忘
罔谈彼短　靡恃己长
信使可覆　器欲难量
墨悲丝淬　诗赞羔羊
景行维贤　克念作圣
德建名立　形端表正
空谷传声　虚堂习听
祸因恶积　福缘善庆
尺璧非宝　寸阴是竞。
对不起，我现在有一点懒哈哈哈；真的不想用脑子想出来东西。
        `,
        images: [
            "https://i.redd.it/all-of-the-calendar-illustrations-d-v0-7jpco52ly4g91.jpg?width=3540&format=pjpg&auto=webp&s=f475bc783385713e03411e97134d3d15f651e5ea"
        ],
        lang: "中"
    },
    {
        title: "嘿哟！2025/10/26",
        text: `
	化被草木　赖及万方
盖此身发　四大五常
恭惟鞠养　岂敢毁伤
女慕贞絜　男效才良
知过必改　得能莫忘
罔谈彼短　靡恃己长
信使可覆　器欲难量
墨悲丝淬　诗赞羔羊
景行维贤　克念作圣
德建名立　形端表正
空谷传声　虚堂习听
祸因恶积　福缘善庆
尺璧非宝　寸阴是竞。
        `,
        images: [
	    "https://i.redd.it/everyone-we-have-happy-ralsei-in-r-place-but-lets-add-splat-v0-ghkkzk75pxq81.jpg?width=282&format=pjpg&auto=webp&s=e9e9e32aba1389412e1b66c34fd21ee044e1c358"
        ],
        lang: "中"
    },
    {
        title: "咕咕嘎嘎，，，，我精神崩溃了",
        text: `
	嘎哈哈哈，，，，卧槽我已经花了这么多时间创造这个网站。。。嗯，，希望我会使用这个网站而已。。如果我不会使用这个网站，这前几个小时就是一大堆浪费的时间(kek)。好的，我必须说88-超星星。
        `,
        images: [
        ],
        lang: "中"
    },
    {
        title: "Articles",
        text: `
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
            `,
        images: ["https://cdn.shopify.com/s/files/1/0014/1962/products/product_dr_begin_poster_designview.png?v=1570137674"
        ],
        lang: "EN"
    },
    {
        title: "Articles",
        text: `
            I'm just writing more articles for the fun of it lmao. I just want this website to look as full as possible, I think that it looks better with more things ig. Anyways, this is a test article, meaning that there is no substance to be gained from reading it... I guess you're actually reading this,, hunh. Oh well, welcome to blank sp- Wait wrong reference! Uhhhh, alrightly, I think that all of this should be able to fill up all the space that I need. Farewell. 
            `,
        images: [
        ],
        lang: "EN"
    },
];

const CHUNK = 3;
let offset = 0;
let loading = false;

create();
restart_.addEventListener('click', create);

function create() {
    articles_.innerHTML = "";
    offset = 0;
    extend();
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
            <h2 style="font-family: ${fontFamily}; font-size: 40px;">
		${a.title}
	    </h2>
        </div>
        <p style="font-family: ${fontFamily}; font-size: 25px; line-height: 25px;">
            ${a.text}
        </p>
    `;

    articles_.appendChild(container);

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
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        if (offset < articles.length) {
            extend();
        }
    }
    if(window.scrollY <= 20){
        if(!inProgress){
            console.log("begin");
            beginAnimation();
        }
    }
});


//website heading animation

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

let diffT = [
    "Website",
    "Website, by quasi",
    "Website, by quasi.",
    "Website, by Quasistarsupernova.",
    "Welcome to my website!",
    "Website",
    "Website.",
    "Website...",
    "Website.....",
    "Welp...",
    "I feel like Toby Fox",
    "Writing this flavour text.",
    "Writing this flavour text...",
    "Website",
];
let inProgress = false;

async function beginAnimation(){
    inProgress = true;
    for(let i = 0; i < diffT.length; ++i){
        let newT = diffT[i];
        while(titleH.textContent.length > 0 && titleH.textContent != newT.slice(0, titleH.textContent.length)){
            titleH.textContent = titleH.textContent.slice(0,-1);
            console.log(titleH.textContent);
            await sleep(100);
        }
        await sleep(200);
        for(let j = titleH.textContent.length; j < newT.length; ++j){
            titleH.textContent += newT[j];
            console.log(titleH.textContent);
            await sleep(100);
        }
        await sleep(1000);
    }
    inProgress = false;
}

//alright