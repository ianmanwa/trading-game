
let bank = 20


//Function to update the Balance
async function showBalance() {
    const balance = document.getElementById("Balance")
    balance.innerHTML = `<p> Coins: 🪙${bank} </p>`
}
showBalance()


const gameDiv = document.getElementById("game-div")
const winScreen = document.getElementById("win-id")
const loserScreen = document.getElementById("lose-id")
const noFunds = document.getElementById("broke")
const noCheat = document.getElementById("cheat")



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

        
        
        // When the player enters ammount larger than their balance
        if( amount > bank )
        {
            noCheat.style.display = " flex "
            gameDiv.style.display = "none"
        }

        // When the player is out of coins
        else if( bank >= 0 ){  
            noFunds.style.display = "flex"
            gameDiv.style.display = "none"

            bank = 0
            showBalance()
        }
        // When the player wins
        else if (button.id == arrayOption) 
        {
            winScreen.style.display = "flex"
            gameDiv.style.display = "none"
            

            bank = amount + bank
            showBalance()

        }
        //When the player loses
        else 
        {
            loserScreen.style.display = "flex"
            gameDiv.style.display = "none"

            bank = bank - amount
            showBalance()
        }

        e.target.reset()
    })

    

// BUTTON LISTENER FOR THE WINNING SCREEN 
document.getElementById("play-again1").addEventListener("click", function (e){
    winScreen.style.display = "none"
    gameDiv.style.display = "flex"
    form()
})

// BUTTON LISTENER FOR THE LOSING SCREEN
document.getElementById("play-again2").addEventListener("click", function (e){
    loserScreen.style.display = "none"
    gameDiv.style.display = "flex"
    form()
})

// BUTTON LISTENER FOR THE CHEAT SCREEN
document.getElementById("play-again3").addEventListener("click", function (e){
    noCheat.style.display = "none"
    gameDiv.style.display = "flex"
    form()
})


// BUTTON LISTENER FOR OUT OF MONEY SCREEN
document.getElementById("buy-more").addEventListener("click", function (e){
    
})



