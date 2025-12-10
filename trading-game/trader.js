
let bank = 20


//Function to update the Balance
async function showBalance() {
    const balance = document.getElementById("Balance")
    balance.innerHTML = `<p> Balance: ${bank} Coins</p>`
}
showBalance()


const gameDiv = document.getElementById("game-div")
const winScreen = document.getElementById("win-id")
const loserScreen = document.getElementById("lose-id")


//FUNCTION TO GENERATE NEW RANDOM NUMBER
async function form() {

    let randomNumber = Math.round(Math.random() * 1)
    const options = ["up-btn", "down-btn"]
    arrayOption = options[randomNumber]
}
form()


//WHEN THE FORM IS SUBMITTED
    document.getElementById("form-div").addEventListener("submit", function (e) {
        e.preventDefault()

        const receivedAmount = document.getElementById("amount-id").value
        amount = Number(receivedAmount)
        const button = e.submitter

        if (button.id == arrayOption) 
        {
            winScreen.style.display = "flex"
            gameDiv.style.display = "none"
            
            bank = amount + bank
            showBalance()

        }else 
        {
            loserScreen.style.display = "flex"
            gameDiv.style.display = "none"

            bank = bank - amount
            showBalance()
        }

        e.target.reset()
    })

    

// PLAY AGAIN LISTENER FOR THE WINNING SCREEN 
document.getElementById("play-again1").addEventListener("click", function (e){
    winScreen.style.display = "none"
    gameDiv.style.display = "flex"
    form()
})

//PLAY AGAIN LISTENER FOR THE LOSING SCREEN
document.getElementById("play-again2").addEventListener("click", function (e){
    loserScreen.style.display = "none"
    gameDiv.style.display = "flex"
    form()
})




