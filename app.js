 const button1 = document.querySelector("#button1")
 const button3 = document.querySelector("#button3")
 const button2 = document.querySelector("#button2")
 const body = document.querySelector("body")

//  Prima rezolvare
// button1.addEventListener("click", () => {
//     chooseWinner(0);
// })

// button2.addEventListener("click", () => {
//     chooseWinner(1);
// })

// button3.addEventListener("click", () => {
//     chooseWinner(2);
// })



body.addEventListener('click', e => {
    if (e.target == button1) {
        chooseWinner(0);
    } else if (e.target == button2) {
        chooseWinner(1);
    } else if (e.target == button3) {
        chooseWinner(2);
    } else {
        return
    }
})


function chooseWinner(clickedButton) {
    let winner = Math.floor(Math.random() * 3)
    console.log(winner)
    console.log(clickedButton)
    if (winner == clickedButton) {
        alert("We have a winner!")
    } else {
        alert("Try again, you'll have more luck next time!")
    }
}
