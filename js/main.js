let scrollBar = document.getElementById("scroller");
let go = document.getElementById("gotop");


let sHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log("Web real height = " + document.documentElement.scrollHeight);
console.log("Web client height = " + document.documentElement.clientHeight);
console.log("Web height = " + sHeight);

document.addEventListener("scroll", () => {
    let s_Top = document.documentElement.scrollTop;//- document.documentElement.clientHeight;
    let scrollWidth = (s_Top / sHeight) * 100;
    scrollBar.style.width = `${scrollWidth}%`;

    if (scrollWidth > 15) {
        go.style.display = 'block';
    } else {
        go.style.display = 'none';
    }

    console.log("Web height = " + sHeight);
    console.log("Scroll = " + s_Top);
    console.log("ratio = " + scrollWidth);
})
