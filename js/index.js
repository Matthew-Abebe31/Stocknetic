import { getMatchingStocks } from "../js/data.js"

var root = window.location.protocol + '//' + window.location.host + '/';
var currentURL = window.location.href
var homeViewEl = document.querySelector('[data-view="home"]')
var homeView = homeViewEl.getAttribute("data-view")
var watchlistsViewEl = document.querySelector('[data-view="watchlists"]')
var watchlistsView = watchlistsViewEl.getAttribute("data-view")
var registrationViewEl = document.querySelector('[data-view="registration"]')
var registrationView = registrationViewEl.getAttribute("data-view")
var signInViewEl = document.querySelector('[data-view="sign-in"]')
var signInView = signInViewEl.getAttribute("data-view")

function showHomePage() {

    homeViewEl.classList.remove("hidden")
    homeViewEl.classList.add("view")
}

function renderRegistrationForm() {

    var registrationForm = document.createElement("form")
    registrationForm.setAttribute("id", "registration-form")
    var registrationContainer = document.createElement("div")
    registrationContainer.className = "registration-container"
    var registrationHeader = document.createElement("h2")
    registrationHeader.setAttribute("id", "registration-header")
    registrationHeader.textContent = "Registration"
    var registrationFirstNameLabel = document.createElement("label")
    registrationFirstNameLabel.textContent = "First Name"
    var registrationFirstNameInput = document.createElement("input")
    registrationFirstNameInput.setAttribute("placeholder", "First Name")
    var registrationLastNameLabel = document.createElement("label")
    registrationLastNameLabel.textContent = "Last Name"
    var registrationLastNameInput = document.createElement("input")
    registrationLastNameInput.setAttribute("placeholder", "Last Name")
    var registrationAddressOneLabel = document.createElement("label")
    registrationAddressOneLabel.textContent = "Address 1"
    var registrationAddressOneInput = document.createElement("input")
    registrationAddressOneInput.setAttribute("placeholder", "Street Address")
    var registrationAddressTwoLabel = document.createElement("label")
    registrationAddressTwoLabel.textContent = "Address 2"
    var registrationAddressTwoInput = document.createElement("input")
    registrationAddressTwoInput.setAttribute("placeholder", "City, State, ZIP")
    var registrationPhoneNumberLabel = document.createElement("label")
    registrationPhoneNumberLabel.textContent = "Phone Number"
    var registrationPhoneNumberInput = document.createElement("input")
    registrationPhoneNumberInput.setAttribute("placeholder", "10 Digit Phone Number")
    var registrationEmailAddressLabel = document.createElement("label")
    registrationEmailAddressLabel.textContent = "Email Address"
    var registrationEmailAddressInput = document.createElement("input")
    registrationEmailAddressInput.setAttribute("placeholder", "Email Address")
    var registrationPasswordLabel = document.createElement("label")
    registrationPasswordLabel.textContent = "Password"
    var registrationPasswordInput = document.createElement("input")
    registrationPasswordInput.setAttribute("placeholder", "Password")
    var registrationConfirmPasswordLabel = document.createElement("label")
    registrationConfirmPasswordLabel.textContent = "Confirm Password"
    var registrationConfirmPasswordInput = document.createElement("input")
    registrationConfirmPasswordInput.setAttribute("placeholder", "Confirm Password")
    var authbuttonsContainerTwo = document.createElement("div")
    authbuttonsContainerTwo.className = "auth-buttons-container-two"
    var linkToPreviousPageFromRegistration = document.createElement("a")
    linkToPreviousPageFromRegistration.setAttribute("href", "/")
    linkToPreviousPageFromRegistration.setAttribute("id", "previous-page-from-registration-link")
    linkToPreviousPageFromRegistration.textContent = "Previous"
    var previousPageFromRegistrationButton = document.createElement("button")
    previousPageFromRegistrationButton.className = "previous-page-from-registration-button"
    var linkToHomePageFromRegistrationForm = document.createElement("a")
    linkToHomePageFromRegistrationForm.setAttribute("href", "/")
    linkToHomePageFromRegistrationForm.setAttribute("id", "home-page-from-registration-link")
    linkToHomePageFromRegistrationForm.textContent = "Continue"
    var registerNewCustomerButton = document.createElement("button")

    registrationContainer.appendChild(registrationHeader)

    registrationContainer.appendChild(registrationFirstNameLabel)
    registrationContainer.appendChild(registrationFirstNameInput)

    registrationContainer.appendChild(registrationLastNameLabel)
    registrationContainer.appendChild(registrationLastNameInput)

    registrationContainer.appendChild(registrationAddressOneLabel)
    registrationContainer.appendChild(registrationAddressOneInput)

    registrationContainer.appendChild(registrationAddressTwoLabel)
    registrationContainer.appendChild(registrationAddressTwoInput)

    registrationContainer.appendChild(registrationPhoneNumberLabel)
    registrationContainer.appendChild(registrationPhoneNumberInput)

    registrationContainer.appendChild(registrationEmailAddressLabel)
    registrationContainer.appendChild(registrationEmailAddressInput)

    registrationContainer.appendChild(registrationPasswordLabel)
    registrationContainer.appendChild(registrationPasswordInput)

    registrationContainer.appendChild(registrationConfirmPasswordLabel)
    registrationContainer.appendChild(registrationConfirmPasswordInput)

    previousPageFromRegistrationButton.appendChild(linkToPreviousPageFromRegistration)
    registerNewCustomerButton.appendChild(linkToHomePageFromRegistrationForm)

    authbuttonsContainerTwo.appendChild(previousPageFromRegistrationButton)
    authbuttonsContainerTwo.appendChild(registerNewCustomerButton)

    registrationContainer.appendChild(authbuttonsContainerTwo)

    registrationForm.appendChild(registrationContainer)
    registrationViewEl.appendChild(registrationForm)

    console.log("see registration page")
}

var registerButton = document.getElementById("register-button")
registerButton.addEventListener("click", function () {
    // event.preventDefault()
    
    showRegistrationPage()
})

function showRegistrationPage() {

    if (sessionStorage.getItem("id") !== null) {
        // window.location.hash = "/"
        history.back()
        return
    }

    renderRegistrationForm()

    registrationViewEl.classList.remove("hidden")
    registrationViewEl.classList.add("view")
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")

    window.location.hash = "/registration"
    
}

function renderSignInForm() {
    console.log("Show sign in page.")

    var signInForm = document.createElement("form")
    signInForm.setAttribute("id", "sign-in-form")
    var signInContainer = document.createElement("div")
    signInContainer.className = "sign-in-container"
    var signInHeader = document.createElement("h2")
    signInHeader.setAttribute("id", "sign-in-header")
    signInHeader.textContent = "Please sign in."
    var signInEmailInputLabel = document.createElement("label")
    signInEmailInputLabel.textContent = "Enter your email address."
    var signInEmailInput = document.createElement("input")
    signInEmailInput.setAttribute("placeholder", "Email")
    var signInPasswordInputLabel = document.createElement("label")
    signInPasswordInputLabel.textContent = "Enter your password"
    var signInPasswordInput = document.createElement("input")
    signInPasswordInput.setAttribute("placeholder", "Password")
    var authButtonsContainerThree = document.createElement("div")
    authButtonsContainerThree.className = "auth-buttons-container-three"
    var previousPageFromSignInButton = document.createElement("button")
    var linkToPreviousPageFromSignIn = document.createElement("a")
    linkToPreviousPageFromSignIn.setAttribute("href", "/")
    linkToPreviousPageFromSignIn.setAttribute("id", "previous-page-from-sign-in-link")
    linkToPreviousPageFromSignIn.textContent = "Previous"
    var watchlistsPageFromSignInButton = document.createElement("button")
    var linkToWatchlistsFromSignIn = document.createElement("a")
    linkToWatchlistsFromSignIn.setAttribute("href", "#/watchlists")
    linkToWatchlistsFromSignIn.setAttribute("id", "watchlists-page-from-sign-in-link")
    linkToWatchlistsFromSignIn.textContent = "Continue"

    signInContainer.appendChild(signInHeader)

    signInContainer.appendChild(signInEmailInputLabel)
    signInContainer.appendChild(signInEmailInput)

    signInContainer.appendChild(signInPasswordInputLabel)
    signInContainer.appendChild(signInPasswordInput)

    previousPageFromSignInButton.appendChild(linkToPreviousPageFromSignIn)
    watchlistsPageFromSignInButton.appendChild(linkToWatchlistsFromSignIn)

    authButtonsContainerThree.appendChild(previousPageFromSignInButton)
    authButtonsContainerThree.appendChild(watchlistsPageFromSignInButton)

    signInContainer.appendChild(authButtonsContainerThree)

    signInForm.appendChild(signInContainer)
    signInViewEl.appendChild(signInForm)

    linkToWatchlistsFromSignIn.addEventListener("click", function () {

        if (sessionStorage.getItem("id") === null) {
            alert("Welcome to Stocknetic!")
            window.location.hash = "/watchlists"
            sessionStorage.setItem("id", "user")
            // linkToWatchlistsFromSignIn.setAttribute("href", "#/watchlists")
        } else if (sessionStorage.getItem("id") !== null) {
            alert("User is already signed in!")
            window.location.replace(root)
            // linkToWatchlistsFromSignIn.setAttribute("href", "/")
            } 
    })

}

var signInButton = document.querySelector("#sign-in-button")
signInButton.addEventListener("click", showSignInPage)

function showSignInPage() {
    // event.preventDefault()
    
    renderSignInForm()
    
    var registrationButton = document.querySelector("#register-button")
    registrationButton.classList.add("hidden")
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    signInViewEl.classList.remove("hidden")
    signInViewEl.classList.add("view")

    window.location.hash = "/signIn"
}

var signOutButton = document.querySelector("#sign-out-button");
signOutButton.addEventListener("click", signOut)

function signOut() {
    sessionStorage.clear()

    // var registrationButton = document.querySelector("#register-button")
    // registrationButton.classList.remove("hidden")

    window.location.hash = "/"
}

function renderWatchListsPage() {

    var watchlistsContainerEl = document.createElement("div")
    watchlistsContainerEl.className = "watchlists-container"
    var searchStocksLabelEl = document.createElement("label")
    searchStocksLabelEl.textContent = "Search for stocks."
    var searchStocksInputEl = document.createElement("input")
    searchStocksInputEl.setAttribute("placeholder", "Search for Stocks")

    watchlistsContainerEl.appendChild(searchStocksLabelEl)
    watchlistsContainerEl.appendChild(searchStocksInputEl)

    watchlistsViewEl.appendChild(watchlistsContainerEl)

}

function showWatchlistsPage() {
    // event.preventDefault()

    renderWatchListsPage()

    var navItemsContainer = document.querySelector(".nav-items-container")
    
    navItemsContainer.classList.remove("hidden")
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("hidden")
    watchlistsViewEl.classList.add("view")
    
    console.log("watchlists page")
}

function showStatisticsPage() {
    // event.preventDefault()

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")
    console.log("statistcs page")
}

function showNewsPage(event) {
    event.preventDefault()

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")

}

function showProfilePage(event) {
    event.preventDefault()

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")
    
}

function displayNavItems(){
    
    var navItemsContainer = document.querySelector(".nav-items-container")
    
    if (sessionStorage.getItem("id") === null) {
    navItemsContainer.classList.add("hidden")
    } else if (sessionStorage.getItem("id") !== null) {
        navItemsContainer.classList.remove("hidden")
        navItemsContainer.classList.add("view")
    }
}

displayNavItems()

function hideScrollBar() {
    var pageWrapper = document.querySelector(".page-wrap")
    
    console.log(document.body.clientHeight)
    console.log(document.body.scrollHeight)

    if (document.body.clientHeight === document.body.scrollHeight) {
        document.body.style.overflow = "hidden"
    } else if (document.body.clientHeight !== document.body.scrollHeight) {
        document.body.style.overflow = "auto"
    }
}

hideScrollBar()

window.addEventListener("DOMContentLoaded", handleCurrentPageView )

function handleCurrentPageView() {

    var navItemsContainer = document.querySelector(".nav-items-container")
    
    if (sessionStorage.getItem("id") === null) {
    navItemsContainer.classList.add("hidden")
    } else if (sessionStorage.getItem("id") === null) {
        navItemsContainer.classList.remove("hidden")
        navItemsContainer.classList.add("view")
    }

    if (sessionStorage.getItem("id") === null) {
        var registrationButton = document.querySelector("#register-button")
        registrationButton.classList.remove("hidden")
    } else if (sessionStorage.getItem("id") !== null) {
        var registrationButton = document.getElementById("register-button")
        registrationButton.classList.add("hidden")
    }
    
    if (currentURL === root) {
        showHomePage()
        // return
    }
    
    if (currentURL === `${root}#/registration`) {
        showRegistrationPage()
        // return
    } 
    
    if (currentURL === `${root}#/signIn`) {
        showSignInPage()
        // return  
    }

    if (currentURL === `${root}#/watchlists`) {
        showWatchlistsPage()
        // return
    }
}

window.onpopstate = function () {
    location.reload()
}

// async function findBestMatches() {
    
//     var search = "apple"
//     var bestMatches = await getMatchingStocks(search)

//     console.log(bestMatches)

// }

// findBestMatches()