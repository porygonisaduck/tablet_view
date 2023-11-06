function myShow(name) {
    const hide = document.getElementsByClassName('hide');
    for (let i = 0; i < hide.length; i+=2) {
        if (hide[i].getAttribute('id') == name) {
            hide[i].style.display = "block";
            hide[i+1].style.display = "block";
        }
    }
}

function myHide(name) {
    const hide = document.getElementsByClassName('hide');
    for (let i = 0; i < hide.length; i+=2) {
        if (hide[i].getAttribute('id') == name) {
            hide[i].style.display = "none";
            hide[i+1].style.display = "none";
        }
    }
}

onload = function(){
    let parent = document.getElementById("main");
    let children = parent.children;
    let length = parent.children.length;

    for (let i = 0; i < length; ++i) {
        parent.append(children[Math.floor(Math.random() * length)])
    }

    this.document.querySelector("body").style.display = "block";
}