var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var check = 0

addFriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends" // change name
        istatus.style.color = "green" // change color
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.color = "red"
        // console.log("request")
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger" // change name
        istatus.style.color = "red" // change color
        addFriend.innerHTML = "Add Friend"
        addFriend.style.color = "white"
        check = 0
    }
})

// removeFriend.addEventListener("click", function () {
//     istatus.innerHTML = "Stranger" // change name
//     istatus.style.color = "red" // change color
// })