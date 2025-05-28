for (let i=9; i>0; i--){
    let num = i;
    let elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");
    elm.setAttribute("onclick", "remove(" + num +")");

    let left_pos = 10;
    let top_pos  = 100;

    left_pos = left_pos + Math.floor(Math.random() * 400);
    top_pos  = top_pos  + Math.floor(Math.random() * 500);

    elm.style.left = "" + left_pos + "px";
    elm.style.top  = "" + top_pos  + "px";

    document.getElementById("main").appendChild(elm);
}

let target_num = 1;
document.remove = function(id){
    if(id !== target_num) return;
    document.getElementById("main").removeChild(document.getElementById(target_num));
    target_num++;
}