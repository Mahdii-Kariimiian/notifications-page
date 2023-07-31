const markAll = document.querySelector(".nav__mark")
const notifCount = document.querySelector(".notif-count")
const redCircle = document.querySelectorAll(".red-circle")
const boxMessage = document.querySelectorAll(".box__message")

markAll.addEventListener ( 'click' , markAllAsRead)

function markAllAsRead() {
    for (red of redCircle) {
    red.classList.add("hidden")
    }
    for (b of boxMessage) {
        b.classList.remove ("box-bg-color")
    }

    notifCount.innerText = "0"
}