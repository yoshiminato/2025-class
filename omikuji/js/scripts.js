// This file is intentionally left blank.
document.getElementById('draw').addEventListener('click', function(){
    const omikujiResults = [
        '大吉', '中吉', '小吉', '末吉', '凶', '大凶'
    ];
    const colors = [
        "red", "blue", "yellow", "green", "gray", "pink"
    ];
    const idx = Math.floor(Math.random() * omikujiResults.length);
    const result = omikujiResults[idx];
    const resultElm = document.getElementById('result');
    resultElm.textContent = `あなたの運勢は... ${result}!`;
    resultElm.style.color = colors[idx];

    console.log('tapped');
})