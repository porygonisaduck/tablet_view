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

