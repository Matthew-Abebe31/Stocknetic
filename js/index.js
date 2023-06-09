import { getAllUsers, getUser, getMatchingStockTickerData, getMatchingStockOverviewData, getMatchingStockQuoteData, getMatchingStockIntradayPricingData, getMatchingStockPricingData, getMatchingStockOneMonthPriceData, getMatchingStockPriceCandles, getMatchingStockBasicFinancialData, getMatchingStockQuoteDataTwo, getMatchingStockProfileData, getMatchingStockEPSCalendarData, getMatchingStockCurrentVolume, getWatchlists, getUserWatchlists, getWatchlist, postWatchlist, putWatchlist, patchWatchlist, deleteWatchlist, postNewUser} from "../js/data.js"

var root = window.location.protocol + '//' + window.location.host + '/';
var currentURL = window.location.href
var cleanURL = window.location.href.replace("?", "")
var title = "Stocknetic"
var nextState = { additionalInformation: 'Updated the URL with JS' };

window.history.replaceState(nextState, title, cleanURL)
var homeViewEl = document.querySelector('[data-view="home"]')
var homeView = homeViewEl.getAttribute("data-view")
var watchlistsViewEl = document.querySelector('[data-view="watchlists"]')
var watchlistsView = watchlistsViewEl.getAttribute("data-view")
var createWatchlistsViewEl = document.querySelector('[data-view="create-watchlists"]')
var createWatchlistsView = createWatchlistsViewEl.getAttribute("data-view")
var searchStocksViewEl = document.querySelector('[data-view="search-stocks"]')
var searchStocksView = searchStocksViewEl.getAttribute("data-view")
var matchingStockOverviewViewEl = document.querySelector('[data-view="matching-stock"]')
var matchingStockOverviewView = matchingStockOverviewViewEl.getAttribute("data-view")
var matchingStockChartsViewEl = document.querySelector('[data-view="matching-stock-charts"]')
var matchingStockChartsView = matchingStockChartsViewEl.getAttribute("data-view")
var registrationViewEl = document.querySelector('[data-view="registration"]')
var registrationView = registrationViewEl.getAttribute("data-view")
var signInViewEl = document.querySelector('[data-view="sign-in"]')
var signInView = signInViewEl.getAttribute("data-view")

function displayNavItems(){
    var navContainer = document.querySelector(".nav-container")
    var navContainerHeight = navContainer.clientHeight + 78;
    var navContainerHeightTwo = navContainer.clientHeight + 90;
    var navContainerHeightStr = navContainerHeight.toString()
    var navContainerHeightTwoStr = navContainerHeightTwo.toString()
    var navItemsContainer = document.querySelector(".nav-items-container")
    var hamburgerMenu = document.querySelector(".hamburger")
    var navListItems = document.querySelector(".nav-list-items")
    var navListItemsTwo = document.querySelector(".nav-list-items-two")
    var navListItemsTwoHeight = navListItemsTwo.clientHeight
    var navListItemsTwoHeightStr = navListItemsTwoHeight.toString()
    var watchlistsHeaderContainer = document.querySelector(".watchlists-header-container")
    var watchlistsListContainer = document.querySelector(".watchlists-list-container")
    var finalHeight = navContainerHeight + navListItemsTwoHeight
    
    if (sessionStorage.getItem("id") === null) {
    navItemsContainer.classList.add("hidden")
    } else if (sessionStorage.getItem("id") !== null) {
        navItemsContainer.classList.remove("hidden")
        navItemsContainer.classList.add("view")
    }

    
    hamburgerMenu.addEventListener("click", function () {
        navListItemsTwo.classList.toggle("hidden")

        navListItemsTwo.style.top = `${navContainerHeightStr}px`

        var screenWidth = document.body.clientWidth;
        var logoContainer = document.querySelector(".logo-container")
        var signInContainer = document.querySelector(".sign-in-container")
        var watchlistsListContainer = document.querySelector(".watchlists-list-container")
        var watchlistsHeaderContainer = document.querySelector(".watchlists-header-container")
        var watchlistContainer = document.querySelector(".watchlist-container")
        var watchlistHeaderContainer = document.querySelector(".watchlist-header-container")
        var createWatchlistsContainer = document.querySelector(".create-watchlists-container")
        var matchingStockContainer = document.querySelector(".matching-stock-container")
        var matchingStockOverviewContainer = document.querySelector(".matching-stock-overview-container")
        var chooseWatchlistToAddContainer = document.querySelector(".choose-watchlist-to-add-container")
        var changeChartsButtonContainer = document.querySelector(".change-charts-button-container")
        var chartDiv = document.getElementById("chart_div")

        if (navListItemsTwo.classList.contains("hidden") !== true) {
            logoContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true) {
            logoContainer.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && signInContainer !== null) {
            signInContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") == true && signInContainer !== null) {
            signInContainer.style.zIndex = "1"
        }
        
        if (navListItemsTwo.classList.contains("hidden") !== true && watchlistsListContainer !== null) {
            watchlistsListContainer.style.zIndex = "-1"
            watchlistsHeaderContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") == true && watchlistsListContainer !== null) {
            watchlistsListContainer.style.zIndex = "1"
            watchlistsHeaderContainer.style.zIndex = "1"
        }
        
        if (navListItemsTwo.classList.contains("hidden") !== true && watchlistContainer !== null) {
            watchlistContainer.style.zIndex = "-1"
            watchlistHeaderContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && watchlistContainer !== null) {
            watchlistContainer.style.zIndex = "1"
            watchlistHeaderContainer.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && createWatchlistsContainer !== null) {
            createWatchlistsContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && createWatchlistsContainer !== null) {
            createWatchlistsContainer.style.zIndex = "1"
        }
        
        if (navListItemsTwo.classList.contains("hidden") !== true && matchingStockContainer !== null) {
            matchingStockContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && matchingStockContainer !== null) {
            matchingStockContainer.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && matchingStockOverviewContainer !== null) {
            matchingStockOverviewContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && matchingStockOverviewContainer !== null) {
            matchingStockOverviewContainer.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && chooseWatchlistToAddContainer !== null) {
            navListItemsTwo.style.pointerEvents = "auto"
            chooseWatchlistToAddContainer.style.zIndex = "-1"
        } else if (navListItems.classList.contains("hidden") === true & chooseWatchlistToAddContainer !== null) {
            chooseWatchlistToAddContainer.style.zIndex = "1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && chooseWatchlistToAddContainer) {
            chooseWatchlistToAddContainer.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && chartDiv !== null) {
            chartDiv.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && chartDiv !== null) {
            chartDiv.style.zIndex = "1"
        }

        if (navListItemsTwo.classList.contains("hidden") !== true && changeChartsButtonContainer !== null) {
            changeChartsButtonContainer.style.zIndex = "-1"
        } else if (navListItemsTwo.classList.contains("hidden") === true && changeChartsButtonContainer !== null) {
            changeChartsButtonContainer.style.zIndex = "1"
        }
        
    })

        var screenWidth;

        window.addEventListener("resize", function () {
            screenWidth = document.body.clientWidth
            
        //    window.addEventListener("load", createChart())
        })

    navItemsContainer.insertAdjacentElement("afterend", navListItemsTwo)
}

displayNavItems()

function showHomePage() {

    homeViewEl.classList.remove("hidden")
    homeViewEl.classList.add("view")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    createWatchlistsViewEl.classList.remove("hidden")
    createWatchlistsViewEl.classList.add("view")
}

async function renderMatchingStockQuote() {
    var pathArr = window.location.href.split('/')
    var ticker = pathArr[5]
    var sessionStorageId = sessionStorage.getItem("id")
    var sessionStorageIdNum = parseInt(sessionStorageId)
    
    var matchingStockTickerData = await getMatchingStockTickerData(ticker)
    var matchingStockProfileData = await getMatchingStockProfileData(ticker)
    var matchingStockQuoteDataTwo = await getMatchingStockQuoteDataTwo(ticker)
    var matchingStockBasicFinancials = await getMatchingStockBasicFinancialData(ticker)
    var matchingStockOverview = await getMatchingStockOverviewData(ticker)
    var watchlists = await getUserWatchlists();
    
    var matchingStockContainer = document.createElement("div")
    matchingStockContainer.className = "matching-stock-container"
    var matchingStockNameContainer = document.createElement("div")
    matchingStockNameContainer.className =  "matching-stock-name-container"
    var matchingStockName = document.createElement("h2")
    matchingStockName.setAttribute("id", "stock-name")
    matchingStockName.textContent =  matchingStockProfileData.name
    var matchingStockSymbol = document.createElement("h3")
    matchingStockSymbol.setAttribute("id", "stockSymbol")
    matchingStockSymbol.textContent = `(${matchingStockProfileData.ticker})`
    var matchingStockExchangeContainer = document.createElement("div")
    matchingStockExchangeContainer.className = "matching-stock-exchange-container"
    var matchingStockExchange = document.createElement("p") 
    matchingStockExchange.setAttribute("id", "exchange")
    matchingStockExchange.textContent = `Exchange: ${matchingStockProfileData.exchange}`
    matchingStockExchange.style.fontSize = "small";
    var matchingStockCurrency = document.createElement("p")
    matchingStockCurrency.setAttribute("id", "currency")
    matchingStockCurrency.textContent = `Currency: ${matchingStockProfileData.currency}`
    matchingStockCurrency.style.fontSize = "small"
    var matchingStockQuotePriceContainer = document.createElement("div")
    matchingStockQuotePriceContainer.className = "matching-stock-quote-price-container"
    var matchingStockQuotePrice = document.createElement("h2")
    matchingStockQuotePrice.setAttribute("id", "quotePrice")
    let matchingStockQuotePriceData = matchingStockQuoteDataTwo.c
    matchingStockQuotePriceData = matchingStockQuotePriceData.toFixed(2)
    var matchingStockQuotePriceStr = matchingStockQuotePriceData.toString()
    matchingStockQuotePrice.textContent = matchingStockQuotePriceStr
    var matchingStockPriceChange = document.createElement("h4")
    matchingStockPriceChange.setAttribute("id", "matchingStockPriceChange")
    let matchingStockPriceChangeData = matchingStockQuoteDataTwo.d * 1
    matchingStockPriceChangeData = matchingStockPriceChangeData.toFixed(2)
    var matchingStockPriceChangeStr = matchingStockPriceChangeData.toString()
    matchingStockPriceChange.textContent = matchingStockPriceChangeStr
    var matchingStockPriceChangePercent = document.createElement("h4")
    matchingStockPriceChangePercent.setAttribute("id", "matchingStockPriceChangePercent")
    let matchingStockPriceChangePercentData = matchingStockQuoteDataTwo.dp * 1
    matchingStockPriceChangePercentData = matchingStockPriceChangePercentData.toFixed(2)
    var matchingStockPricePercentChangeStr = matchingStockPriceChangePercentData.toString()
    matchingStockPriceChangePercent.textContent = `${matchingStockPricePercentChangeStr}%`
    var matchingStockQuoteButtonContainer = document.createElement("div")
    matchingStockQuoteButtonContainer.className = "matching-stock-quote-button-container"
    var addStockToWatchlistButton = document.createElement("button")
    addStockToWatchlistButton.className = "add-stock-to-watchlist-button"
    var addStockToWatchlistLink = document.createElement("a")
    addStockToWatchlistLink.setAttribute("id", "addStockToWatchlistLink")
    addStockToWatchlistLink.textContent = "Follow"
    var seeMatchingStockDetailsButton = document.createElement("button")
    seeMatchingStockDetailsButton.setAttribute("id", "seeMatchingStockDetailsButton")
    var seeMatchingStockDetailsLink = document.createElement("a")
    seeMatchingStockDetailsLink.setAttribute("id", "seeMatchingStockDetailsLink")
    seeMatchingStockDetailsLink.setAttribute("href", `#/${matchingStockProfileData.ticker}/summary`)
    seeMatchingStockDetailsLink.textContent = "Summary"

    addStockToWatchlistButton.addEventListener("click", async function () {
        console.log(watchlists)

        if (watchlists.length === 0) {
            alert("No watchlists found!")
            return
        }

        var chooseWatchlistToAddContainer = document.createElement("div")
        chooseWatchlistToAddContainer.className = "choose-watchlist-to-add-container"
        
        var cancelChooseWatchlistButtonContainer = document.createElement("div")
        cancelChooseWatchlistButtonContainer.className = "cancel-choose-watchlist-button-container"
        var cancelChooseWatchlistButton = document.createElement("button")
        cancelChooseWatchlistButton.className = "cancel-choose-watchlist-button"
        var cancelChooseWatchlistLink = document.createElement("a")
        cancelChooseWatchlistLink.textContent = "Cancel"

        for (let i = 0; i < watchlists.length; i++) {
            
            var addToWatchlistContainer = document.createElement("div")
            addToWatchlistContainer.className = "add-to-watchlist-container"
            var watchlistId = document.createElement("p")
            watchlistId.setAttribute("id", "addWatchlistId")
            watchlistId.style.fontWeight = "bold"
            var watchlistName = document.createElement("p")
            watchlistName.className = "watchlist-name"
            watchlistName.textContent = `${watchlists[i].name}`

            var addStockToWatchlistBttn = document.createElement("button")
            addStockToWatchlistBttn.className = "add-stock-to-watchlist-bttn"
            var addStockToWatchlistLnk = document.createElement("a")
            addStockToWatchlistLnk.textContent = "Add"

            cancelChooseWatchlistButton.addEventListener("click", function () {
                chooseWatchlistToAddContainer.remove()
            })

            addStockToWatchlistBttn.addEventListener("click", function (event) {
                var currentElement = event.currentTarget
                var watchlistNameElements = document.querySelectorAll(".watchlist-name")
                var watchlistNameElementsArr = Array.from(watchlistNameElements)
                var parentElement = currentElement.parentNode
                var watchlistName = parentElement.firstChild
                var watchlistNameText = watchlistName.textContent
                var selectedWatchlistIdElement = window.getComputedStyle(watchlistName, ':before')
                let selectedWatchlistId;
   
                console.log(watchlistNameElementsArr)

                console.log(watchlists)
                for (let i = 0; i < watchlists.length; i++) {
                    console.log(watchlists[i].name)
                    // console.log(watchlistName.textContent)

                    if (watchlists[i].name === watchlistNameText) {
                    console.log(watchlists[i].name)
                    console.log(watchlistNameText)
                    selectedWatchlistId = watchlists[i].id
                    var stocksArr = watchlists[i].stocks
                    console.log(stocksArr)
                    }
                }
                    for (let m = 0; m < stocksArr.length; m++) {
                        if (stocksArr[m][1] === ticker) {
                            alert("This stock is already added to the watchlist.")
                            
                            return
                        }
                    }

                console.log(matchingStockOverview)
                var stockName = matchingStockOverview.Name
                console.log(watchlists)
                for (let j = 0; j < watchlists.length; j++) {

                    if (watchlists[j].id === selectedWatchlistId) {
                        console.log(watchlists[j].id)
                        
                        watchlists[j].stocks.push([stockName, ticker])
                        console.log(watchlists[j].stocks)
                        var editedWatchlistObj = watchlists[j];
                        console.log(selectedWatchlistId)
                        console.log(editedWatchlistObj)

                        putWatchlist(selectedWatchlistId, editedWatchlistObj)

                        alert(`added ${ticker} to ${editedWatchlistObj.name}`)

                        chooseWatchlistToAddContainer.remove()

                        // window.location.hash = "/watchlists"
                    }

                }
            })
            
            addStockToWatchlistBttn.appendChild(addStockToWatchlistLnk)
            cancelChooseWatchlistButton.appendChild(cancelChooseWatchlistLink)

            // watchlistName.prepend(watchlistId)
            addToWatchlistContainer.appendChild(watchlistName)
            addToWatchlistContainer.appendChild(addStockToWatchlistBttn)
            chooseWatchlistToAddContainer.appendChild(addToWatchlistContainer)
            cancelChooseWatchlistButtonContainer.appendChild(cancelChooseWatchlistButton)
            chooseWatchlistToAddContainer.appendChild(cancelChooseWatchlistButtonContainer)
            searchStocksViewEl.appendChild(chooseWatchlistToAddContainer)
        }  
    })

    if (matchingStockPriceChangeData > 0) {
        matchingStockPriceChange.style.color = "darkgreen"
        matchingStockPriceChange.textContent = `+${matchingStockPriceChangeStr}`
    } else if (matchingStockPriceChangeData < 0) {
        matchingStockPriceChange.style.color = "red"
    }

      if (matchingStockPriceChangePercentData > 0) {
        matchingStockPriceChangePercent.style.color = "darkgreen"
        matchingStockPriceChangePercent.textContent = `+${matchingStockPricePercentChangeStr}`
    } else if (matchingStockPriceChangePercentData < 0) {
        matchingStockPriceChangePercent.style.color = "red"
    }

    addStockToWatchlistButton.appendChild(addStockToWatchlistLink)
    seeMatchingStockDetailsButton.appendChild(seeMatchingStockDetailsLink)

    matchingStockNameContainer.appendChild(matchingStockName)
    matchingStockNameContainer.appendChild(matchingStockSymbol)

    matchingStockExchangeContainer.appendChild(matchingStockExchange)
    matchingStockExchangeContainer.appendChild(matchingStockCurrency)

    matchingStockQuotePriceContainer.appendChild(matchingStockQuotePrice)
    matchingStockQuotePriceContainer.appendChild(matchingStockPriceChange)
    matchingStockQuotePriceContainer.appendChild(matchingStockPriceChangePercent)
    
    matchingStockQuoteButtonContainer.appendChild(seeMatchingStockDetailsButton)
    matchingStockQuoteButtonContainer.appendChild(addStockToWatchlistButton)
    
    matchingStockContainer.appendChild(matchingStockNameContainer)
    matchingStockContainer.appendChild(matchingStockExchangeContainer)
    matchingStockContainer.appendChild(matchingStockQuotePriceContainer)
    matchingStockContainer.appendChild(matchingStockQuoteButtonContainer)

    searchStocksViewEl.appendChild(matchingStockContainer)
}

function showMatchingStockQuotePage() {

    searchStocksViewEl.classList.remove("hidden")
    searchStocksViewEl.classList.add("view")

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
    registrationFirstNameInput.className = "registration-first-name-input"
    registrationFirstNameInput.setAttribute("type", "text")
    registrationFirstNameInput.setAttribute("placeholder", "First Name")
    var registrationLastNameLabel = document.createElement("label")
    registrationLastNameLabel.textContent = "Last Name"
    var registrationLastNameInput = document.createElement("input")
    registrationLastNameInput.className = "registration-last-name-input"
    registrationLastNameInput.setAttribute("type", "text")
    registrationLastNameInput.setAttribute("placeholder", "Last Name")
    var registrationAddressOneLabel = document.createElement("label")
    registrationAddressOneLabel.textContent = "Address 1"
    var registrationAddressOneInput = document.createElement("input")
    registrationAddressOneInput.className = "registration-address-one-input"
    registrationAddressOneInput.setAttribute("type", "text")
    registrationAddressOneInput.setAttribute("placeholder", "Street Address")
    var registrationAddressTwoLabel = document.createElement("label")
    registrationAddressTwoLabel.textContent = "Address 2"
    var registrationAddressTwoInput = document.createElement("input")
    registrationAddressTwoInput.className = "registration-address-two-input"
    registrationAddressTwoInput.setAttribute("type", "text")
    registrationAddressTwoInput.setAttribute("placeholder", "City, State, ZIP")
    var registrationPhoneNumberLabel = document.createElement("label")
    registrationPhoneNumberLabel.textContent = "Phone Number"
    var registrationPhoneNumberInput = document.createElement("input")
    registrationPhoneNumberInput.className = "registration-phone-number-input"
    registrationPhoneNumberInput.setAttribute("type", "text")
    registrationPhoneNumberInput.setAttribute("placeholder", "10 Digit Phone Number")
    var registrationEmailAddressLabel = document.createElement("label")
    registrationEmailAddressLabel.textContent = "Email Address"
    var registrationEmailAddressInput = document.createElement("input")
    registrationEmailAddressInput.className = "registration-email-address-input"
    registrationEmailAddressInput.setAttribute("type", "text")
    registrationEmailAddressInput.setAttribute("placeholder", "Email Address")
    var registrationPasswordLabel = document.createElement("label")
    registrationPasswordLabel.textContent = "Password"
    var registrationPasswordInput = document.createElement("input")
    registrationPasswordInput.className = "registration-password-input"
    registrationPasswordInput.setAttribute("type", "text")
    registrationPasswordInput.setAttribute("placeholder", "Password")
    var registrationConfirmPasswordLabel = document.createElement("label")
    registrationConfirmPasswordLabel.textContent = "Confirm Password"
    var registrationConfirmPasswordInput = document.createElement("input")
    registrationConfirmPasswordInput.className = "registration-confirm-password-input"
    registrationConfirmPasswordInput.setAttribute("type", "text")
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
    linkToHomePageFromRegistrationForm.setAttribute("href", "#/")
    linkToHomePageFromRegistrationForm.setAttribute("id", "home-page-from-registration-link")
    linkToHomePageFromRegistrationForm.textContent = "Continue"
    var registerNewCustomerButton = document.createElement("button")
    registerNewCustomerButton.className = "register-new-user-button"

    registerNewCustomerButton.addEventListener("click", async function (event) {
    event.preventDefault()

        var users = await getAllUsers()

        var firstNameInput = document.querySelector(".registration-first-name-input")
        var lastNameInput = document.querySelector(".registration-last-name-input")
        var addressOneInput = document.querySelector(".registration-address-one-input")
        var addressTwoInput = document.querySelector(".registration-address-two-input")
        var phoneNumberInput = document.querySelector(".registration-phone-number-input")
        var emailAddressInput = document.querySelector(".registration-email-address-input")
        var passwordInput = document.querySelector(".registration-password-input")
        var confirmPasswordInput = document.querySelector(".registration-confirm-password-input")

        if (firstNameInput.value === "") {
            alert("Please enter your first name.")
            return
        } else if (firstNameInput.value !== "") {
            var firstNameRegistrationInput = registrationFirstNameInput.value;
        }

        if (lastNameInput.value === "") {
            alert("Please enter your last name.")
            return
        } else if (lastNameInput.value !== "") {
            var lastNameRegistrationInput = registrationLastNameInput.value;
        }

        console.log(addressOneInput)
        console.log(addressTwoInput)

        if (addressOneInput.value === "" || addressTwoInput.value === "") {
            alert("Please enter your address.")
            return
        } else if (addressOneInput.value !== "" && addressTwoInput.value === "") {
            var addressRegistrationInput = registrationAddressOneInput.value + ' ' + registrationAddressTwoInput.value;
        }

        console.log(registrationPhoneNumberInput)

        if (phoneNumberInput.value === "") {
            alert("Please enter your phone number.")
            return
        } else if (phoneNumberInput.value !== "") {
            var phoneNumberRegistrationInput = registrationPhoneNumberInput.value;
        }

        if (emailAddressInput.value === "") {
            alert("Please enter your email address.")
            return
        } else if (emailAddressInput.value !== "") {
            var emailAddressRegistrationInput = registrationEmailAddressInput.value;
        }

        if (passwordInput.value === "") {
            alert("Please enter your password.")
            return
        } else if (passwordInput.value !== "") {
            var passwordRegistrationInput = registrationPasswordInput.value;
        }

        if (confirmPasswordInput.value === "") {
            alert("Please confirm your password.")
            return
        } else if (confirmPasswordInput.value !== "") {
            var passwordConfirmRegistrationInput = registrationConfirmPasswordInput.value;
        }

        if (passwordRegistrationInput === passwordConfirmRegistrationInput) {
            var userPassword = passwordRegistrationInput;
        } else if (passwordRegistrationInput !== passwordConfirmRegistrationInput) {
            alert("Your passwords do not match. Please try again.")
            registrationForm.reset();
            return
        }

        var newUserObj = {
            firstName: firstNameRegistrationInput,
            lastName: lastNameRegistrationInput,
            address: addressRegistrationInput, 
            phoneNumber: phoneNumberRegistrationInput, 
            emailAddress: emailAddressRegistrationInput,
            password: userPassword
        }

        var existingUserEmail = false;
        var existingUserPhoneNumber = false;
        var duplicateUser;
    
    for (let i = 0; i < users.length; i++) {

        if (users[i].emailAddress === emailAddressRegistrationInput) {
            existingUserEmail = true;
            duplicateUser = users[i]
        } else if (users[i].phoneNumber === phoneNumberRegistrationInput) {
            existingUserPhoneNumber = true;
            duplicateUser = users[i]
        }
    }
    
    if (existingUserEmail === false && existingUserPhoneNumber === false) {
        postNewUser(newUserObj)
        alert(`You have successfully registered, ${newUserObj.firstName}. Welcome to Stocknetic!`); 
    } else if (existingUserEmail === true) {
            alert(`${duplicateUser.emailAddress} is already associated with another account. Please use a different email address.`)     
            registrationForm.reset();
            return
    } else if (existingUserPhoneNumber === true) {
            alert(`${duplicateUser.phoneNumber} is already associated with another account. Please use a different phone number.`)
            registrationForm.reset();
            return
    }

    window.location.hash = "/"       
    })

    registrationContainer.appendChild(registrationHeader)

    registrationForm.appendChild(registrationFirstNameLabel)
    registrationForm.appendChild(registrationFirstNameInput)

    registrationForm.appendChild(registrationLastNameLabel)
    registrationForm.appendChild(registrationLastNameInput)

    registrationForm.appendChild(registrationAddressOneLabel)
    registrationForm.appendChild(registrationAddressOneInput)

    registrationForm.appendChild(registrationAddressTwoLabel)
    registrationForm.appendChild(registrationAddressTwoInput)

    registrationForm.appendChild(registrationPhoneNumberLabel)
    registrationForm.appendChild(registrationPhoneNumberInput)

    registrationForm.appendChild(registrationEmailAddressLabel)
    registrationForm.appendChild(registrationEmailAddressInput)

    registrationForm.appendChild(registrationPasswordLabel)
    registrationForm.appendChild(registrationPasswordInput)

    registrationForm.appendChild(registrationConfirmPasswordLabel)
    registrationForm.appendChild(registrationConfirmPasswordInput)

    previousPageFromRegistrationButton.appendChild(linkToPreviousPageFromRegistration)
    registerNewCustomerButton.appendChild(linkToHomePageFromRegistrationForm)

    authbuttonsContainerTwo.appendChild(previousPageFromRegistrationButton)
    authbuttonsContainerTwo.appendChild(registerNewCustomerButton)

    registrationContainer.appendChild(registrationForm)
    registrationContainer.appendChild(authbuttonsContainerTwo)

    registrationViewEl.appendChild(registrationContainer)

    console.log("see registration page")
}

function showRegistrationPage() {

    if (sessionStorage.getItem("id") !== null) {
        history.back()
        return
    }

    registrationViewEl.classList.remove("hidden")
    registrationViewEl.classList.add("view")
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    createWatchlistsViewEl.classList.remove("hidden")
    createWatchlistsViewEl.classList.add("view")

    window.location.hash = "/registration"
    
}

function renderSignInForm() {

    var signInForm = document.createElement("form")
    signInForm.setAttribute("id", "sign-in-form")
    var signInContainer = document.createElement("div")
    signInContainer.className = "sign-in-container"
    var signInHeader = document.createElement("h2")
    signInHeader.setAttribute("id", "sign-in-header")
    signInHeader.textContent = "Sign In."
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
    previousPageFromSignInButton.className = "previous-page-from-sign-in-button"
    var linkToPreviousPageFromSignIn = document.createElement("a")
    linkToPreviousPageFromSignIn.setAttribute("href", "#/")
    linkToPreviousPageFromSignIn.setAttribute("id", "previous-page-from-sign-in-link")
    linkToPreviousPageFromSignIn.textContent = "Previous"
    var watchlistsPageFromSignInButton = document.createElement("button")
    watchlistsPageFromSignInButton.className = "watchlists-page-from-sign-in-button"
    var linkToWatchlistsFromSignIn = document.createElement("a")
    linkToWatchlistsFromSignIn.setAttribute("href", "#/watchlists")
    linkToWatchlistsFromSignIn.setAttribute("id", "watchlists-page-from-sign-in-link")
    linkToWatchlistsFromSignIn.textContent = "Continue"

    signInForm.appendChild(signInHeader)

    signInForm.appendChild(signInEmailInputLabel)
    signInForm.appendChild(signInEmailInput)

    signInForm.appendChild(signInPasswordInputLabel)
    signInForm.appendChild(signInPasswordInput)

    previousPageFromSignInButton.appendChild(linkToPreviousPageFromSignIn)
    watchlistsPageFromSignInButton.appendChild(linkToWatchlistsFromSignIn)

    authButtonsContainerThree.appendChild(previousPageFromSignInButton)
    authButtonsContainerThree.appendChild(watchlistsPageFromSignInButton)

    signInForm.appendChild(authButtonsContainerThree)

    signInContainer.appendChild(signInForm)
    signInViewEl.appendChild(signInContainer)

    linkToWatchlistsFromSignIn.addEventListener("click", handleClickSignInUser)

}

var signInButton = document.querySelector("#sign-in-button")
signInButton.addEventListener("click", showSignInPage)

function showSignInPage() {
    var sessionStorageId = sessionStorage.getItem("id")

    if (sessionStorageId !== null) {
        alert("Please sign out before signing in.")

        return
    }
    
    var registrationButton = document.querySelector("#register-button")
    registrationButton.classList.add("hidden")
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    createWatchlistsViewEl.classList.remove("hidden")
    createWatchlistsViewEl.classList.add("view")
    signInViewEl.classList.remove("hidden")
    signInViewEl.classList.add("view")

    window.location.hash = "/signIn"
}

async function handleClickSignInUser(event) {
    event.preventDefault()

    console.log("user signed in")
    
    var signInForm = signInViewEl.childNodes[0]
    var signInContainer = signInForm.childNodes[0]
    var signInEmailInput = signInContainer.childNodes[2].value
    var signInPasswordInput = signInContainer.childNodes[4].value

    var users = await getAllUsers()
    console.log(users)
    var existingUser = false;
    var user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].emailAddress === signInEmailInput) {
            existingUser = true;
            user = users[i]
        }
    }

    // var userId = sessionStorage.getItem("id")

        // if (existingUser === true && userId !== null) {
        //     alert("Already signed in!")
        //     return
        // } else if(userId !== null) {
        //     alert("Please sign out before signing in!")
        //     return
        // }

        if(existingUser === true && user.password === signInPasswordInput) {
            getUser(user.id)
            sessionStorage.setItem("id", user.id)
            alert(`Welcome back, ${user.firstName}.`)
            window.location.hash = "/watchlists"
        } 
        else if (existingUser === false || user.password !== signInPasswordInput) {
            alert("Invalid email or password. Please try again.") 
            signInForm.reset()
        }
}

var signOutButton = document.querySelector("#sign-out-button");
signOutButton.addEventListener("click", signOut)

function signOut() {
    alert("You have signed out.")
    sessionStorage.clear()
    window.location.hash = "/"
}

async function renderWatchListsPage() {
 
   var watchlistsHeaderContainer = document.createElement("div")
   watchlistsHeaderContainer.className = "watchlists-header-container"
   var watchlistsHeader = document.createElement("h2")
   watchlistsHeader.textContent = "Watchlists"
   var watchlistsListContainer = document.createElement("div")
   watchlistsListContainer.className = "watchlists-list-container"
   var watchlistsTable = document.createElement("table")
   watchlistsTable.setAttribute("id", "watchlistsTable")
   var searchStocksPageButtonContainer = document.createElement("div")
   searchStocksPageButtonContainer.className = "search-stocks-page-button-container"
   var createWatchlistsButton = document.createElement("button")
   createWatchlistsButton.setAttribute("id", "createWatchlistsButton")
   var createWatchlistsFormLink = document.createElement("a")
   createWatchlistsFormLink.setAttribute("id", "createWatchlistsFormLink")
   createWatchlistsFormLink.setAttribute("href", "#/createWatchlists")
   createWatchlistsFormLink.textContent = "Create a watchlist"
   var searchStocksPageButton = document.createElement("button")
   searchStocksPageButton.setAttribute("id", "searchStocksPageButton")
   var searchStocksPageLink = document.createElement("a")
   searchStocksPageLink.setAttribute("id", "searchStocksPageLink")
   searchStocksPageLink.setAttribute("href", "#/searchStocks")
   searchStocksPageLink.textContent = "Search for stocks"

   watchlistsHeaderContainer.appendChild(watchlistsHeader)

   var watchlists = await getUserWatchlists()
   console.log(watchlists)

   for (let i = 0; i < watchlists.length; i++) {
    console.log(watchlists[i])

        var watchlist = document.createElement("div")
        watchlist.className = "watchlist"
        var watchlistLabelContainer = document.createElement("div")
        watchlistLabelContainer.className = "watchlist-label-container"
        var watchlistNameContainer = document.createElement("div")
        watchlistNameContainer.className = "watchlist-name-container"
        var watchlistIdLabel = document.createElement("p")
        watchlistIdLabel.className = "watchlist-id-label"
        watchlistIdLabel.style.fontWeight = "bold"
        var watchlistId = document.createElement("p")
        var watchlistIdValue = i + 1;
        watchlistId.setAttribute("id", "watchlistId")
        watchlistId.textContent = `${watchlistIdValue}.`
        watchlistId.style.fontWeight = "bold"
        var watchlistNameLabel = document.createElement("p")
        watchlistNameLabel.className = "watchlist-name-label"
        watchlistNameLabel.textContent = "Name:"
        watchlistNameLabel.style.fontWeight = "bold"
        var watchlistName = document.createElement("p")
        watchlistName.textContent = watchlists[i].name
        watchlistNameLabel.style.fontWeight = "bold"
        var watchlistDescriptionContainer = document.createElement("div")
        watchlistDescriptionContainer.className = "watchlist-description-container"
        var watchlistDescriptionLabel = document.createElement("p")
        watchlistDescriptionLabel.className = "watchlist-description-label"
        watchlistDescriptionLabel.textContent = "Description:"
        watchlistDescriptionLabel.style.fontWeight = "bold"
        var watchlistDescriptionEl = document.createElement("p")
        watchlistDescriptionEl.textContent = `${watchlists[i].description}`
        var watchlistButtonContainer = document.createElement("div")
        watchlistButtonContainer.className = "watchlist-button-container"
        var viewWatchlistDetailsButton = document.createElement("button")
        viewWatchlistDetailsButton.className = "view-watchlist-details-button"
        var viewWatchlistDetailsLink = document.createElement("a")
        viewWatchlistDetailsLink.setAttribute("id", "viewWatchlistDetailsLink")
        viewWatchlistDetailsLink.setAttribute("href", `#/watchlist/${watchlists[i].id}`)
        viewWatchlistDetailsLink.textContent = "View"
        var deleteWatchlistButton = document.createElement("button")
        deleteWatchlistButton.className = "delete-watchlist-button"
        var deleteWatchlistLink = document.createElement("a")
        deleteWatchlistLink.textContent = "Delete"
        
        deleteWatchlistButton.addEventListener("click", async function (event) {
            var currentTarget = event.currentTarget
            var parentElement = currentTarget.parentNode
            var parentToParentElement = parentElement.parentNode
            var watchlistNameContainer = parentToParentElement.firstChild
            var watchlistNameElement = watchlistNameContainer.firstChild
            var watchlistText = watchlistNameElement.textContent
            var watchlistNameText = watchlistText.slice(2)

            var watchlists = await getUserWatchlists()

            for (let i = 0; i < watchlists.length; i++) {
                if (watchlists[i].name === watchlistNameText) {
                    var watchlistId = watchlists[i].id
                    console.log(watchlistId)
                    var confirm = window.confirm(`Are you sure you want to delete ${watchlistNameText}`)
                    if (confirm === true) {
                        deleteWatchlist(watchlistId)
                    } else {
                        return
                    }
                    
                    window.location.reload()
                } 
            }
        })
    
        viewWatchlistDetailsButton.appendChild(viewWatchlistDetailsLink)
        deleteWatchlistButton.appendChild(deleteWatchlistLink)
        watchlistButtonContainer.appendChild(viewWatchlistDetailsButton)
        watchlistButtonContainer.appendChild(deleteWatchlistButton)
        watchlistNameContainer.appendChild(watchlistName)
        watchlistDescriptionContainer.appendChild(watchlistDescriptionEl)
        watchlistName.prepend(watchlistId)
        watchlist.appendChild(watchlistNameContainer)
        watchlist.appendChild(watchlistButtonContainer)
        watchlistsListContainer.appendChild(watchlist)
    }

   if (watchlists.length > 0) {
       watchlistsListContainer.prepend(watchlistLabelContainer)
   }
   
   createWatchlistsButton.appendChild(createWatchlistsFormLink)
   searchStocksPageButton.appendChild(searchStocksPageLink)
   
   searchStocksPageButtonContainer.appendChild(searchStocksPageButton)
   searchStocksPageButtonContainer.appendChild(createWatchlistsButton)

   watchlistsViewEl.appendChild(watchlistsHeaderContainer)
   watchlistsViewEl.appendChild(watchlistsListContainer)
   watchlistsViewEl.appendChild(searchStocksPageButtonContainer)
}

function showWatchlistsPage() {

    var navItemsContainer = document.querySelector(".nav-items-container")
    
    navItemsContainer.classList.remove("hidden")

    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("hidden")
    watchlistsViewEl.classList.add("view")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    createWatchlistsViewEl.classList.remove("hidden")
    createWatchlistsViewEl.classList.add("view")
}

async function renderViewWatchlistPage() {
    var pathArr = window.location.href.split('/')
    var watchlistId = pathArr[5]

    var viewWatchlistEl = document.querySelector(".view-watchilst-page-container")
    
    var watchlist = await getWatchlist(watchlistId)

    console.log(watchlist)

        var watchlistContainer = document.createElement("div")
        watchlistContainer.className = "watchlist-container"
        var watchlistHeaderContainer = document.createElement("div")
        watchlistHeaderContainer.className = "watchlist-header-container"
        var watchlistHeader = document.createElement("h2")
        watchlistHeader.setAttribute("id", "watchlistHeader")
        watchlistHeader.textContent = watchlist.name
        var watchlistStocks = watchlist.stocks
        var watchlistStocksListContainer = document.createElement("div")
        watchlistStocksListContainer.className = "watchlist-stocks-list-container"
        var watchlistStocksList = document.createElement("ul")
        var stockTicker;
        var returnWatchlistsButtonContainer = document.createElement("div")
        returnWatchlistsButtonContainer.className = "return-watchlists-button-container"
        var returnToWatchlistsButton = document.createElement("button")
        returnToWatchlistsButton.className = "return-to-watchlists-button"
        returnToWatchlistsButton.textContent = "See Watchlists"

        returnToWatchlistsButton.addEventListener("click", function() {
            window.location.hash = "/watchlists"
        })

        for (let i = 0, id = 1; i < watchlistStocks.length; i++, id++) {
            watchlistStocksListContainer.appendChild(watchlistStocksList)

            console.log(watchlistStocks[i])

            var stockIdEl = document.createElement("p")
            stockIdEl.className = "stock-id-element"
            stockIdEl.textContent = `${id}.`;
            stockIdEl.style.fontWeight = "bold"

            console.log(stockIdEl)

            stockTicker = watchlistStocks[i][1]
            var watchlistStock = document.createElement("li")
            watchlistStock.className = "watchlist-stock"
            var watchlistStockName = document.createElement("p")
            watchlistStockName.className = "watchlist-stock-name"
            watchlistStockName.textContent = `${watchlistStocks[i][0]} (${watchlistStocks[i][1]})`

            var watchlistStockButtonContainer = document.createElement("div")
            watchlistStockButtonContainer.className = "watchlist-stock-button-container"

            var watchlistStockSummaryButton = document.createElement("button")
            watchlistStockSummaryButton.className = "watchlist-stock-summary-button"
            watchlistStockSummaryButton.textContent = "Summary"

            var watchlistStockSummaryLink = document.createElement("a")
            watchlistStockSummaryLink.setAttribute("id", "watchlistStockSummaryLink")

            watchlistStockSummaryButton.addEventListener("click", function () {
                window.location.hash = `/${watchlistStocks[i][1]}/summary`
            })
            
            var watchlistStockDeleteButton = document.createElement("button")
            watchlistStockDeleteButton.className = "watchlist-stock-delete-button"
            watchlistStockDeleteButton.textContent = "Delete"

            watchlistStockDeleteButton.addEventListener("click", function (event) {
                var targetEl = event.currentTarget
                var parentEl = targetEl.parentNode
                var parentToParentEl = parentEl.parentNode
                var watchlistStockNameEl = parentToParentEl.firstChild
                var stockNameElement = watchlistStockNameEl.childNodes[1]
                var stockNameStr = stockNameElement.textContent
                var stockNameStrArr = stockNameStr.split(" ")
                var stockSymbol = stockNameStrArr.pop()
                var stockTicker = stockSymbol.replace(/[()]/g, '')
                console.log(stockTicker)


                var watchlistStocksArr = watchlist.stocks
                var newWatchlistStockArr;
                
                for (let i = 0; i < watchlistStocksArr.length; i++) {
                    
                    if (watchlistStocksArr[i][1] === stockTicker) {
                        console.log(watchlistStocksArr[i][1], stockTicker)
                       newWatchlistStockArr =  watchlistStocksArr.filter(element => element[1] !== stockTicker)

                    watchlist.stocks = newWatchlistStockArr
                    var editedWatchlistObj = watchlist
                    console.log(watchlistId)
                    console.log(newWatchlistStockArr)
                    console.log(editedWatchlistObj)

                    putWatchlist(watchlistId, editedWatchlistObj)
                    }
                }
                window.location.reload() 

            })
            
            watchlistStockSummaryButton.appendChild(watchlistStockSummaryLink)
            watchlistStockButtonContainer.appendChild(watchlistStockSummaryButton)
            watchlistStockButtonContainer.appendChild(watchlistStockDeleteButton)
            watchlistStockName.prepend(stockIdEl)
            watchlistStock.appendChild(watchlistStockName)
            watchlistStock.appendChild(watchlistStockButtonContainer)
            watchlistStocksList.appendChild(watchlistStock)
        }

        watchlistHeaderContainer.appendChild(watchlistHeader)
        watchlistStocksListContainer.appendChild(watchlistStocksList)
        watchlistContainer.appendChild(watchlistStocksListContainer)
        returnWatchlistsButtonContainer.appendChild(returnToWatchlistsButton)
        viewWatchlistEl.appendChild(watchlistHeaderContainer)
        viewWatchlistEl.appendChild(watchlistContainer)
        viewWatchlistEl.appendChild(returnWatchlistsButtonContainer)

}

function showViewWatchilstPage() {
    var viewWatchlistEl = document.querySelector(".view-watchilst-page-container")
    viewWatchlistEl.classList.remove("hidden")
    viewWatchlistEl.classList.add("view")

}

function renderCreateWatchlistsPage() {

    var pageWrap = document.querySelector(".page-wrap")

    var createWatchlistsForm = document.createElement("form")
    createWatchlistsForm.setAttribute("id", "createWatchlistsForm")
    
    var createWatchlistsContainer = document.createElement("div")
    createWatchlistsContainer.className = "create-watchlists-container"
    
    var createWatchlistHeaderContainer = document.createElement("div")
    createWatchlistHeaderContainer.className = "create-watchlist-header-container"
    var createWatchlistHeader = document.createElement("h2")
    createWatchlistHeader.setAttribute("id", "createWatchlistHeader")
    createWatchlistHeader.textContent = "Create watchlist"
    
    var createWatchlistNameInputContainer = document.createElement("div")
    createWatchlistNameInputContainer.className = "create-watchlist-name-input-container"
    var createWatchlistNameInputlabelEl = document.createElement("label")
    createWatchlistNameInputlabelEl.setAttribute("id", "createWatchlistNameInputLabelEl")
    createWatchlistNameInputlabelEl.textContent = "Name"
    var createWatchlistNameInputEl = document.createElement("input")
    createWatchlistNameInputEl.setAttribute("id", "createWatchlistInputEl")
    createWatchlistNameInputEl.setAttribute("placeholder", "Add watchlist name")
    
    var createWatchlistDescriptionInputContainer = document.createElement("div")
    createWatchlistDescriptionInputContainer.className = "create-watchlist-description-input-container"
    var createWatchlistDescriptionInputLabelEl = document.createElement("label")
    createWatchlistDescriptionInputLabelEl.setAttribute("id", "createWatchlistDescriptionInputLabelEl")
    createWatchlistDescriptionInputLabelEl.textContent = "Description"
    var createWatchlistDescriptionInputEl = document.createElement("input")
    createWatchlistDescriptionInputEl.setAttribute("id", "createWatchlistDescriptionInputEl")
    createWatchlistDescriptionInputEl.setAttribute("placeholder", "Enter description")
   
    var createWatchlistButtonContainer = document.createElement("div")
    createWatchlistButtonContainer.className = "create-watchlists-button-container"

    var cancelCreateWatchlistButtonEl = document.createElement("button")
    cancelCreateWatchlistButtonEl.setAttribute("id", "cancelCreateWatchlistButton")
    var cancelCreateWatchlistLink = document.createElement("a")
    cancelCreateWatchlistLink.setAttribute("id", "cancelCreateWatchlistLink")
    cancelCreateWatchlistLink.setAttribute("href", "#/watchlists")
    cancelCreateWatchlistLink.textContent = "Cancel"
    
    var createWatchlistButtonEl = document.createElement("button")
    createWatchlistButtonEl.setAttribute("id", "createWatchlistButton")
    var createWatchlistLink = document.createElement("a")
    createWatchlistLink.setAttribute("id", "createWatchlistLink")
    createWatchlistLink.setAttribute("href", "#/watchlists")
    createWatchlistLink.textContent = "Save"

    createWatchlistHeaderContainer.appendChild(createWatchlistHeader)

    createWatchlistNameInputContainer.appendChild(createWatchlistNameInputlabelEl)
    createWatchlistNameInputContainer.appendChild(createWatchlistNameInputEl)

    createWatchlistDescriptionInputContainer.appendChild(createWatchlistDescriptionInputLabelEl)
    createWatchlistDescriptionInputContainer.appendChild(createWatchlistDescriptionInputEl)

    cancelCreateWatchlistButtonEl.appendChild(cancelCreateWatchlistLink)
    createWatchlistButtonEl.appendChild(createWatchlistLink)
    createWatchlistButtonContainer.appendChild(cancelCreateWatchlistButtonEl)
    createWatchlistButtonContainer.appendChild(createWatchlistButtonEl)

     createWatchlistsContainer.appendChild(createWatchlistHeaderContainer)
     createWatchlistsContainer.appendChild(createWatchlistNameInputContainer)
     createWatchlistsContainer.appendChild(createWatchlistDescriptionInputContainer)
     createWatchlistsContainer.appendChild(createWatchlistButtonContainer)
     
     createWatchlistsForm.appendChild(createWatchlistsContainer)
     createWatchlistsViewEl.appendChild(createWatchlistsForm)
}

function showCreateWatchlistsPage() {
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("view")
    watchlistsViewEl.classList.add("hidden")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    createWatchlistsViewEl.classList.remove("hidden")
    createWatchlistsViewEl.classList.add("view")
}

function createWatchlist() {

    var createWatchlistFormElement;
    var createWatchlistContainer;
    var createWatchlistNameInputContainer;
    var createWatchlistDescriptionInputContainer;
    var createWatchlistButtonContainer;
    var createWatchlistNameInput;
    var createWatchlistDescriptionInput;
    var createWatchlistButton;
    var createWatchlistViewChildElements = createWatchlistsViewEl.childNodes

    
    for (let i = 0; i < createWatchlistViewChildElements.length; i++) {
        createWatchlistFormElement = createWatchlistViewChildElements[0]
    }
    
    var createWatchlistFormChildElements = createWatchlistFormElement.childNodes
    
    for (let j = 0; j < createWatchlistFormChildElements.length; j++) {
        createWatchlistContainer = createWatchlistFormChildElements[0]
    }

    var createWatchlistContainerChildElements = createWatchlistContainer.childNodes

    for (let m = 0; m < createWatchlistContainerChildElements.length; m++) {
        createWatchlistNameInputContainer = createWatchlistContainerChildElements[1]
        createWatchlistDescriptionInputContainer = createWatchlistContainerChildElements[2]
        createWatchlistButtonContainer = createWatchlistContainerChildElements[3]
    }
        
    var createWatchlistNameInputContainerChildElements = createWatchlistNameInputContainer.childNodes
    console.log(createWatchlistNameInputContainerChildElements)

    for (let n = 0; n < createWatchlistNameInputContainerChildElements.length; n++) {
        createWatchlistNameInput = createWatchlistNameInputContainerChildElements[1]
    }

    var createWatchlistDescriptionInputContainerChildElements = createWatchlistDescriptionInputContainer.childNodes

    for (let r = 0; r < createWatchlistDescriptionInputContainerChildElements.length; r++) {
        createWatchlistDescriptionInput = createWatchlistDescriptionInputContainerChildElements[1]
    }
    var createWatchlistButtonContainerChildElements = createWatchlistButtonContainer.childNodes

    for (let p = 0; p < createWatchlistButtonContainerChildElements.length; p++) {
    createWatchlistButton = createWatchlistButtonContainer.childNodes[1]
    }

    console.log(createWatchlistButton)
        createWatchlistButton.addEventListener("click", async function (event) {
            event.preventDefault()

            var watchlists = await getUserWatchlists()

            for (let i = 0; i < watchlists.length; i++) {
                if (createWatchlistNameInput.value === watchlists[i].name) {
                    alert(`Watchlist ${createWatchlistNameInput.value} already exists.`)
                    createWatchlistFormElement.reset()

                    return
                }

            }

            var userId = parseInt(sessionStorage.getItem("id"))
    
            var newWatchlistObj = {
                userId: userId,
                name: createWatchlistNameInput.value,
                description: createWatchlistDescriptionInput.value,
                stocks: []
            }
        
            console.log(newWatchlistObj)
            postWatchlist(newWatchlistObj)
    
            window.location.hash = "/watchlists"
        })
    }

function renderSearchStocksPage() {

    var searchStocksContainer = document.createElement("div")
    searchStocksContainer.className = "search-stocks-container"
    var searchStocksLabelEl = document.createElement("label")
    searchStocksLabelEl.setAttribute("id", "searchStocksLabelEl")
    searchStocksLabelEl.textContent = "Search for stocks."
    var searchStocksInputEl = document.createElement("input")
    searchStocksInputEl.className = "search-stocks-input"
    searchStocksInputEl.setAttribute("type", "text")
    searchStocksInputEl.setAttribute("placeholder", "Enter a symbol.")
    var searchStocksButtonContainer = document.createElement("div")
    searchStocksButtonContainer.className =  "search-stocks-button-container"
    var searchStocksButton = document.createElement("button")
    searchStocksButton.setAttribute("id", "search-stocks-button")
    searchStocksButton.textContent = "Search"
    var searchStocksMatchingSecurityLink = document.createElement("a")
    searchStocksMatchingSecurityLink.setAttribute("id", "searchStocksMatchingSecurityLink")

    var returnWatchlistsPageButtonContainer = document.createElement("div")
    returnWatchlistsPageButtonContainer.className = "return-watchlists-page-button-container"
    var returnWatchlistsPageButton = document.createElement("button")
    var returnWatchlistsPageLink = document.createElement("a")
    returnWatchlistsPageLink.setAttribute("id", "returnWatchlistsPageLink")
    returnWatchlistsPageLink.setAttribute("href", "#/watchlists")
    returnWatchlistsPageLink.textContent = "See watchlists"
    searchStocksContainer.appendChild(searchStocksLabelEl)
    searchStocksContainer.appendChild(searchStocksInputEl)
    
    searchStocksButtonContainer.appendChild(searchStocksButton)

    searchStocksContainer.appendChild(searchStocksButtonContainer)

    returnWatchlistsPageButton.appendChild(returnWatchlistsPageLink)
    returnWatchlistsPageButtonContainer.appendChild(returnWatchlistsPageButton)

    searchStocksViewEl.appendChild(searchStocksContainer)
    searchStocksViewEl.appendChild(returnWatchlistsPageButtonContainer)
    
    var searchStocksContainer = searchStocksViewEl.childNodes[0]
    console.log(searchStocksContainer.childNodes)
    var searchStocksInput = searchStocksContainer.childNodes[1]
    var searchStocksButtonContainer = searchStocksContainer.childNodes[2]
    var searchStocksButton = searchStocksButtonContainer.childNodes[0]

    searchStocksButton.addEventListener("click", async function () {
        let ticker = ""
        var matchingStock;
        var matchingStockQuoteData;
        var previousMatchingStock = searchStocksViewEl.childNodes
        console.log(searchStocksInput.value)
        ticker = searchStocksInput.value
        ticker = ticker.toUpperCase()
        matchingStock = await getMatchingStockOverviewData(ticker)
        matchingStockQuoteData = await getMatchingStockQuoteData(ticker)

        window.location.hash = `/quote/${ticker}`

        searchStocksMatchingSecurityLink.setAttribute("href", `#/quote/${ticker}`)
        
        for (let i = 0; i < previousMatchingStock.length; i++) {
            
            if (previousMatchingStock[i].className === "matching-stock-container") {
                previousMatchingStock[i].remove()
            }
        }
       
        if (matchingStock === {}) {
            alert("No matching stock!")
            window.location.hash = "/searchStocks"
        } else if (matchingStock.Symbol !== undefined) {
        } else {
            alert("Invalid request.")
            window.location.hash = "/searchStocks"
        }
    })
}

function showSearchStocksPage() {
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("view")
    watchlistsViewEl.classList.add("hidden")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("hidden")
    searchStocksViewEl.classList.add("view")
}

async function renderMatchingStockOverview() {

    var pathArr = window.location.href.split('/')
    var ticker = pathArr[4]
    
    var matchingStockCurrentVolumeData = await getMatchingStockCurrentVolume(ticker)
    var matchingStockCurrentVolume = matchingStockCurrentVolumeData.results[0].v
    var matchingStockProfileData = await getMatchingStockProfileData(ticker)
    var matchingStockQuoteDataTwo = await getMatchingStockQuoteDataTwo(ticker)
    var matchingStockBasicFinancials = await getMatchingStockBasicFinancialData(ticker)
    var matchingStockEPSCalendar = await getMatchingStockEPSCalendarData(ticker)

    var matchingStockOverviewViewEl = document.querySelector(".matching-stock-page-container")

    var matchingStockOverviewContainer = document.createElement("div")
    matchingStockOverviewContainer.className = "matching-stock-overview-container"
    
    var matchingStockOverviewHeaderContainer = document.createElement("div")
    matchingStockOverviewHeaderContainer.className = "matching-stock-overview-header-container"
    var matchingStockOverviewHeaderLabel = document.createElement("h2")
    matchingStockOverviewHeaderLabel.className = "matching-stock-overview-header-label"
    matchingStockOverviewHeaderLabel.textContent = "Summary"
    var matchingStockOverviewHeader = document.createElement("h3");
    matchingStockOverviewHeader.setAttribute("id", "matchingStockOverviewHeader")
    matchingStockOverviewHeader.textContent = `${matchingStockProfileData.name} (${matchingStockProfileData.ticker})`
    
    var matchingStockOverviewDataRow = document.createElement("div")
    matchingStockOverviewDataRow.classList.add("matching-stock-overview-data-row")
    matchingStockOverviewDataRow.classList.add("row")
    var matchingStockOverviewDataColumnOne = document.createElement("div")
    matchingStockOverviewDataColumnOne.classList.add("matching-stock-overview-data-column-one")
    matchingStockOverviewDataColumnOne.classList.add("col-half")
    var matchingStockOverviewDataColumnTwo =  document.createElement("div")
    matchingStockOverviewDataColumnTwo.classList.add("matching-stock-overview-data-column-two")
    matchingStockOverviewDataColumnTwo.classList.add("col-half")

    let bulletPointContainer = document.createElement("div")
    var bulletPoint = document.createElement("p")
    bulletPoint.className = "bullet-point"
    bulletPoint.textContent = '•'

    bulletPointContainer.appendChild(bulletPoint)

    var matchingStockPreviousCloseContainer = document.createElement("div")
    matchingStockPreviousCloseContainer.className = "matching-stock-previous-close-container"
    var matchingStockPreviousCloseLabel = document.createElement("p")
    matchingStockPreviousCloseLabel.className = "matching-stock-previous-close-label"
    matchingStockPreviousCloseLabel.textContent = "Previous Close:"
    matchingStockPreviousCloseLabel.style.fontWeight = "bold"
    var matchingStockPreviousClose = document.createElement("p")
    matchingStockPreviousClose.textContent = matchingStockQuoteDataTwo.pc
    matchingStockPreviousClose.style.fontWeight = "normal"

    var matchingStockOpenPriceContainer = document.createElement("div")
    matchingStockOpenPriceContainer.className = "matching-stock-open-price-container"
    var matchingStockOpenPriceLabel = document.createElement("p")
    matchingStockOpenPriceLabel.className = "matching-stock-open-price-label"
    matchingStockOpenPriceLabel.textContent = "Open:"
    matchingStockOpenPriceLabel.style.fontWeight = "bold"
    var matchingStockOpenPriceEl = document.createElement("p")
    matchingStockOpenPriceEl.textContent = matchingStockQuoteDataTwo.o
    matchingStockOpenPriceEl.style.fontWeight = "normal"

    var matchingStockCurrentPriceContainer = document.createElement("div")
    matchingStockCurrentPriceContainer.className = "matching-stock-current-price-container"
    var matchingStockCurrentPriceLabel = document.createElement("p")
    matchingStockCurrentPriceLabel.className = "matching-stock-current-price-label"
    matchingStockCurrentPriceLabel.textContent = "Current Price:"
    matchingStockCurrentPriceLabel.style.fontWeight = "bold"
    var matchingStockCurrentPriceEl = document.createElement("p")
    matchingStockCurrentPriceEl.textContent = matchingStockQuoteDataTwo.c
    matchingStockCurrentPriceEl.style.fontWeight = "normal"

    var matchingStockDailyPriceRangeContainer = document.createElement("div")
    matchingStockDailyPriceRangeContainer.className = "matching-stock-daily-price-range-container"
    var matchingStockDailyPriceRangeLabel = document.createElement("p")
    matchingStockDailyPriceRangeLabel.className = "matching-stock-daily-price-range-label"
    matchingStockDailyPriceRangeLabel.textContent = "Daily Range:"
    matchingStockDailyPriceRangeLabel.style.fontWeight = "bold"
    var matchingStockDailyPriceRangeEl = document.createElement("p")
    var matchingStockDailyPriceRangeHighValue = matchingStockQuoteDataTwo.h
    var matchingStockDailyPriceRangeLowValue = matchingStockQuoteDataTwo.l
    var matchingStockDailyPriceRangeValue = (matchingStockDailyPriceRangeHighValue - matchingStockDailyPriceRangeLowValue).toFixed(2)
    matchingStockDailyPriceRangeEl.textContent = `${matchingStockDailyPriceRangeLowValue} - ${matchingStockDailyPriceRangeHighValue}`
    matchingStockDailyPriceRangeEl.style.fontWeight = "normal"

    console.log(matchingStockBasicFinancials)
    var matchingStockWeeklyPriceRangeContainer = document.createElement("div")
    matchingStockWeeklyPriceRangeContainer.className = "matching-stock-weekly-price-range-container"
    var matchingStockWeeklyPriceRangeLabel = document.createElement("p")
    matchingStockWeeklyPriceRangeLabel.className = "matching-stock-weekly-price-range-label"
    matchingStockWeeklyPriceRangeLabel.textContent = "52 Week Range:"
    matchingStockWeeklyPriceRangeLabel.style.fontWeight = "bold"
    var matchingStockWeeklyPriceRangeEl = document.createElement("p")
    var matchingStockWeeklyPriceRangeLowValue = parseFloat(matchingStockBasicFinancials.metric["52WeekLow"])
    var matchingStockWeeklyPriceRangeHighValue = parseFloat(matchingStockBasicFinancials.metric["52WeekHigh"])
    console.log(matchingStockWeeklyPriceRangeHighValue)
    console.log(matchingStockWeeklyPriceRangeLowValue)
    matchingStockWeeklyPriceRangeEl.textContent = `${matchingStockWeeklyPriceRangeLowValue.toFixed(2)} - ${matchingStockWeeklyPriceRangeHighValue.toFixed(2)}`

    console.log(matchingStockCurrentVolume)
    var matchingStockVolumeContainer = document.createElement("div")
    matchingStockVolumeContainer.className = "matching-stock-volume-container"
    var matchingStockVolumeLabel = document.createElement("p")
    matchingStockVolumeLabel.className = "matching-stock-volume-label"
    matchingStockVolumeLabel.textContent = "Volume:"
    matchingStockVolumeLabel.style.fontWeight = "bold"
    var matchingStockVolumeEl = document.createElement("p")
    matchingStockVolumeEl.className = "matching-stock-volume-element"
    matchingStockVolumeEl.textContent = matchingStockCurrentVolume

    var matchingStockAverageVolumeContainer = document.createElement("div")
    matchingStockAverageVolumeContainer.className = "matching-stock-average-volume-container"
    var matchingStockAverageVolumeLabel = document.createElement("p")
    matchingStockAverageVolumeLabel.className = "matching-stock-average-volume-label"
    matchingStockAverageVolumeLabel.textContent = "3 Mo. Avg Volume:"
    matchingStockAverageVolumeLabel.style.fontWeight = "bold"
    var matchingStockAverageVolumeEl = document.createElement("p")
    matchingStockAverageVolumeEl.className = "matching-stock-average-volume-element"
    var matchingStockAverageVolumeValue = parseFloat(matchingStockBasicFinancials.metric["3MonthAverageTradingVolume"]) * 1000000
    matchingStockAverageVolumeEl.textContent = matchingStockAverageVolumeValue

    window.addEventListener("resize", function (event) {
        event.preventDefault()

        let width = document.body.clientWidth
        
        if (width <= 300) {
            console.log(width)
            console.log("short")
            matchingStockAverageVolumeLabel.textContent = "3 Mo. Avg V:"
        } else if (width > 300 ) {
            console.log(width)
            console.log("long")
            matchingStockAverageVolumeLabel.textContent = "3 Mo. Avg Volume:"
        }
    })

    var matchingStockMarketCapContainer = document.createElement("div")
    matchingStockMarketCapContainer.className = "matching-stock-market-capitalization-container"
    var matchingStockMarketCapLabel = document.createElement("p")
    matchingStockMarketCapLabel.className = "matching-stock-market-capitalization-label"
    matchingStockMarketCapLabel.textContent = "Market Cap:"
    matchingStockMarketCapLabel.style.fontWeight = "bold"
    var matchingStockMarketCap = document.createElement("p")
    matchingStockMarketCap.textContent = matchingStockBasicFinancials.metric.marketCapitalization.toFixed(2)

    var matchingStockBetaContainer = document.createElement("div")
    matchingStockBetaContainer.className = "matching-stock-beta-container"
    var matchingStockBetaLabel = document.createElement("p")
    matchingStockBetaLabel.className = "matching-stock-beta-label"
    matchingStockBetaLabel.textContent = "Beta:"
    matchingStockBetaLabel.style.fontWeight = "bold"
    var matchingStockBetaEl = document.createElement("p")
    matchingStockBetaEl.textContent = matchingStockBasicFinancials.metric.beta.toFixed(2)

    var matchingStockEPSContainer = document.createElement("div")
    matchingStockEPSContainer.className = "matching-stock-eps-container"
    var matchingStockEPSLabel = document.createElement("p")
    matchingStockEPSLabel.className = "matching-stock-eps-label"
    matchingStockEPSLabel.textContent = "EPS:"
    matchingStockEPSLabel.style.fontWeight = "bold"
    var matchingStockEPSEl = document.createElement("p")
    matchingStockEPSEl.textContent = matchingStockBasicFinancials.metric.epsTTM.toFixed(2)

    console.log(matchingStockBasicFinancials)

    let matchingStockCurrentDividendYield;

    if (matchingStockBasicFinancials.metric.currentDividendYieldTTM !== null) {
        matchingStockCurrentDividendYield = `${matchingStockBasicFinancials.metric.currentDividendYieldTTM.toFixed(2)}%`
        matchingStockCurrentDividendYield = matchingStockCurrentDividendYield
    } else if (matchingStockBasicFinancials.metric.currentDividendYieldTTM === null) {
        matchingStockCurrentDividendYield = "N/A"
    }

    var matchingStockDividendYieldContainer = document.createElement("div")
    matchingStockDividendYieldContainer.className = "matching-stock-dividend-yield-container"
    var matchingStockDividendYieldLabel = document.createElement("p")
    matchingStockDividendYieldLabel.className = "matching-stock-dividend-yield-label"
    matchingStockDividendYieldLabel.textContent = "Dividend Yield:"
    matchingStockDividendYieldLabel.style.fontWeight = "bold"
    var matchingStockDividendYieldEl = document.createElement("p")
    matchingStockDividendYieldEl.textContent = matchingStockCurrentDividendYield

    let matchingStockDividendPerShare;

    if (matchingStockBasicFinancials.metric.dividendsPerShareTTM !== null) {
        matchingStockDividendPerShare = `${matchingStockBasicFinancials.metric.dividendsPerShareTTM.toFixed(2)}%`
    } else if (matchingStockBasicFinancials.metric.dividendsPerShareTTM === null) {
        matchingStockDividendPerShare = "N/A"
    }

    var matchingStockDividendPerShareContainer = document.createElement("div")
    matchingStockDividendPerShareContainer.className = "matching-stock-dividend-per-share-container"
    var matchingStockDividendPerShareLabel = document.createElement("p")
    matchingStockDividendPerShareLabel.className = "matching-stock-dividend-per-share-label"
    matchingStockDividendPerShareLabel.textContent = "Dividend Per Share:"
    matchingStockDividendPerShareLabel.style.fontWeight = "bold"
    var matchingStockDividendPerShareEl = document.createElement("p")
    matchingStockDividendPerShareEl.textContent = matchingStockDividendPerShare

    var matchingStockReturnOnAssetsContainer = document.createElement("div")
    matchingStockReturnOnAssetsContainer.className = "matching-stock-return-on-assets-container"
    var matchingStockReturnOnAssetsLabel = document.createElement("p")
    matchingStockReturnOnAssetsLabel.className = "matching-stock-return-on-assets-label"
    matchingStockReturnOnAssetsLabel.textContent = "ROA:"
    matchingStockReturnOnAssetsLabel.style.fontWeight = "bold"
    var matchingStockReturnOnAssetsEl = document.createElement("p")
    matchingStockReturnOnAssetsEl.className = "matching-stock-return-on-assets-element"
    matchingStockReturnOnAssetsEl.textContent = matchingStockBasicFinancials.metric.roaTTM.toFixed(2)
    matchingStockOverviewHeaderLabel.appendChild(matchingStockOverviewHeader)
    matchingStockOverviewHeaderContainer.appendChild(matchingStockOverviewHeaderLabel)

    var matchingStockReturnOnEquityContainer = document.createElement("div")
    matchingStockReturnOnEquityContainer.className = "matching-stock-return-on-equity-container"
    var matchingStockReturnOnEquityLabel = document.createElement("p")
    matchingStockReturnOnEquityLabel.className = "matching-stock-return-on-assets-label"
    matchingStockReturnOnEquityLabel.textContent = "ROE"
    matchingStockReturnOnEquityLabel.style.fontWeight = "bold"
    var matchingStockReturnOnEquityEl = document.createElement("p")
    matchingStockReturnOnEquityEl.className = "matching-stock-return-on-equity-element"
    matchingStockReturnOnEquityEl.textContent = matchingStockBasicFinancials.metric.roeTTM.toFixed(2)

    var seeMatchingStockChartsButtonContainer = document.createElement("div")
    seeMatchingStockChartsButtonContainer.className = "see-matching-stock-charts-button-container"
    var goToPreviousPageFromSummaryButton = document.createElement("button")
    goToPreviousPageFromSummaryButton.className = "go-to-previous-page-from-summary-button"

    goToPreviousPageFromSummaryButton.addEventListener("click", function () {
        history.back()
    })

    var goToPreviousPageFromSummaryLink = document.createElement("a")
    goToPreviousPageFromSummaryLink.setAttribute("id", "goToPreviousPageFromSummaryLink")
    goToPreviousPageFromSummaryLink.textContent = "Previous"
    var seeMatchingStockChartsButton = document.createElement("button")
    seeMatchingStockChartsButton.className = "see-matching-stock-charts-button"
    var seeMatchingStockChartsLink = document.createElement("a")
    seeMatchingStockChartsLink.setAttribute("id", "seeMatchingStockChartsLink")
    seeMatchingStockChartsLink.setAttribute("href", `#/${ticker}/charts`)
    seeMatchingStockChartsLink.textContent = "Charts"
    
    matchingStockOverviewContainer.appendChild(matchingStockOverviewHeader)

    var matchingStockDataContainerArrOne = [matchingStockPreviousCloseContainer, matchingStockOpenPriceContainer, matchingStockCurrentPriceContainer, matchingStockDailyPriceRangeContainer, matchingStockWeeklyPriceRangeContainer, matchingStockVolumeContainer, matchingStockAverageVolumeContainer]
    var matchingStockDataContainerArrTwo = [matchingStockMarketCapContainer, matchingStockBetaContainer, matchingStockEPSContainer, matchingStockDividendYieldContainer, matchingStockDividendPerShareContainer, matchingStockReturnOnAssetsContainer, matchingStockReturnOnEquityContainer]

    matchingStockPreviousCloseContainer.appendChild(matchingStockPreviousCloseLabel)
    matchingStockPreviousCloseContainer.appendChild(matchingStockPreviousClose)
    matchingStockOpenPriceContainer.appendChild(matchingStockOpenPriceLabel)
    matchingStockOpenPriceContainer.appendChild(matchingStockOpenPriceEl)
    matchingStockCurrentPriceContainer.appendChild(matchingStockCurrentPriceLabel)
    matchingStockCurrentPriceContainer.appendChild(matchingStockCurrentPriceEl)
    matchingStockDailyPriceRangeContainer.appendChild(matchingStockDailyPriceRangeLabel)
    matchingStockDailyPriceRangeContainer.appendChild(matchingStockDailyPriceRangeEl)
    matchingStockWeeklyPriceRangeContainer.appendChild(matchingStockWeeklyPriceRangeLabel)
    matchingStockWeeklyPriceRangeContainer.appendChild(matchingStockWeeklyPriceRangeEl)
    matchingStockVolumeContainer.appendChild(matchingStockVolumeLabel)
    matchingStockVolumeContainer.appendChild(matchingStockVolumeEl)
    matchingStockAverageVolumeContainer.appendChild(matchingStockAverageVolumeLabel)
    matchingStockAverageVolumeContainer.appendChild(matchingStockAverageVolumeEl)
    
    matchingStockOverviewDataColumnOne.appendChild(matchingStockPreviousCloseContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockOpenPriceContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockCurrentPriceContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockDailyPriceRangeContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockWeeklyPriceRangeContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockVolumeContainer)
    matchingStockOverviewDataColumnOne.appendChild(matchingStockAverageVolumeContainer)

    matchingStockMarketCapContainer.appendChild(matchingStockMarketCapLabel)
    matchingStockMarketCapContainer.appendChild(matchingStockMarketCap)
    matchingStockBetaContainer.appendChild(matchingStockBetaLabel)
    matchingStockBetaContainer.appendChild(matchingStockBetaEl)
    matchingStockEPSContainer.appendChild(matchingStockEPSLabel)
    matchingStockEPSContainer.appendChild(matchingStockEPSEl)
    matchingStockDividendYieldContainer.appendChild(matchingStockDividendYieldLabel)
    matchingStockDividendYieldContainer.appendChild(matchingStockDividendYieldEl)
    matchingStockDividendPerShareContainer.appendChild(matchingStockDividendPerShareLabel)
    matchingStockDividendPerShareContainer.appendChild(matchingStockDividendPerShareEl)
    matchingStockReturnOnAssetsContainer.appendChild(matchingStockReturnOnAssetsLabel)
    matchingStockReturnOnAssetsContainer.appendChild(matchingStockReturnOnAssetsEl)
    matchingStockReturnOnEquityContainer.appendChild(matchingStockReturnOnEquityLabel)
    matchingStockReturnOnEquityContainer.appendChild(matchingStockReturnOnEquityEl)

    matchingStockOverviewDataColumnTwo.appendChild(matchingStockMarketCapContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockBetaContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockEPSContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockDividendYieldContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockDividendPerShareContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockReturnOnAssetsContainer)
    matchingStockOverviewDataColumnTwo.appendChild(matchingStockReturnOnEquityContainer)

    matchingStockOverviewDataRow.appendChild(matchingStockOverviewDataColumnOne)
    matchingStockOverviewDataRow.appendChild(matchingStockOverviewDataColumnTwo)

    goToPreviousPageFromSummaryButton.appendChild(goToPreviousPageFromSummaryLink)
    seeMatchingStockChartsButtonContainer.appendChild(goToPreviousPageFromSummaryButton)

    seeMatchingStockChartsButton.appendChild(seeMatchingStockChartsLink)
    seeMatchingStockChartsButtonContainer.appendChild(seeMatchingStockChartsButton)
    
    matchingStockOverviewContainer.appendChild(matchingStockOverviewDataRow)

    matchingStockOverviewViewEl.appendChild(matchingStockOverviewHeaderContainer)
    matchingStockOverviewViewEl.appendChild(matchingStockOverviewContainer)
    matchingStockOverviewViewEl.appendChild(seeMatchingStockChartsButtonContainer)
}

function showMatchingStockOverview() {
    
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("view")
    watchlistsViewEl.classList.add("hidden")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    matchingStockOverviewViewEl.classList.remove("hidden")
    matchingStockOverviewViewEl.classList.add("view")
}

async function renderMatchingStockCharts() {
    var pathArr = window.location.href.split('/')
    var ticker = pathArr[4]

    var renderMatchingStockChartsPageContainer = document.querySelector(".matching-stock-charts-page-container")
    var changeChartsButtonContainer = document.createElement("div")
    changeChartsButtonContainer.className = "change-charts-button-container"
    var chartsHeaderContainer = document.createElement("div")
    chartsHeaderContainer.className = "charts-header-container"
    var chartsHeader = document.createElement("h2")
    chartsHeader.setAttribute("id", "chartsHeader")
    chartsHeader.textContent = "Charts"
    var oneDayChartButton = document.createElement("button")
    oneDayChartButton.className = "one-day-chart-button"
    oneDayChartButton.textContent = "1 Day"
    var fiveDayChartButton = document.createElement("button")
    fiveDayChartButton.className = "daily-chart-button"
    fiveDayChartButton.textContent = "5 Day"
    var oneMonthChartButton = document.createElement("button")
    oneMonthChartButton.className = "one-month-chart-button"
    oneMonthChartButton.textContent = "1 Month"
    var threeMonthChartButton = document.createElement("button")
    threeMonthChartButton.className = "monthly-chart-button"
    threeMonthChartButton.textContent = "3 Month"
    var sixMonthChartButton = document.createElement("button")
    sixMonthChartButton.className = "six-month-chart-button"
    sixMonthChartButton.textContent = "6 Month"
    var oneYearChartButton = document.createElement("button")
    oneYearChartButton.className = "one-year-chart-button"
    oneYearChartButton.textContent = "1 Year"
    var changePageFromChartsButtonContainer = document.createElement("div")
    changePageFromChartsButtonContainer.className = "change-page-from-charts-button-container"
    var previousFromChartsButton = document.createElement("button")
    previousFromChartsButton.className = "previous-from-charts-button"
    previousFromChartsButton.textContent = "Previous"
    var watchlistsFromChartsButton = document.createElement("button")
    watchlistsFromChartsButton.className = "watchlists-from-charts-button"
    watchlistsFromChartsButton.textContent = "Watchlists"
    
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    async function drawChart() {
        var matchingStockIntradayPricingDataResult = await getMatchingStockIntradayPricingData(ticker)
        var matchingStockPricingDataResult = await getMatchingStockPricingData(ticker)
        var matchingStockProfileDataResult = await getMatchingStockProfileData(ticker)
        var matchingStockOneMonthPriceDataResult = await getMatchingStockOneMonthPriceData(ticker)
        var matchingStockIntradayPricingData = matchingStockIntradayPricingDataResult["Time Series (30min)"]
        var matchingStockDailyPriceData = matchingStockPricingDataResult["Time Series (Daily)"]
        var matchingStockOneMonthPriceData = matchingStockOneMonthPriceDataResult["Weekly Adjusted Time Series"]

        if (matchingStockIntradayPricingData === undefined|| matchingStockDailyPriceData === undefined || matchingStockOneMonthPriceData === undefined) {
            alert("This application uses free data and is susceptible to call limits. Please try again later.")
            window.location.hash = "/"
            return
        }

        console.log(matchingStockPricingDataResult)
        console.log(matchingStockOneMonthPriceData)
        console.log(matchingStockIntradayPricingData)

        function createOneDayChart() {
            console.log("show one day chart.")

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }

            var closePrices = []
            var closeDates = []

            for (var key in matchingStockIntradayPricingData) {
                closePrices.push(parseFloat(matchingStockIntradayPricingData[key]["4. close"]));
                closeDates.push(key);
              }
            
              let stockData = closeDates.map((date, index) => {
                return [date, closePrices[index]];
              });
    
            //   stockData.length = 2
               console.log(stockData)

            console.log(stockData)

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(stockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            
        var chartDiv = document.getElementById("chart_div")
        console.log(chartDiv)
        var chartDivFirstChildEl = chartDiv.childNodes[0]
        var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
        var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
        var svg = nextFirstChild.childNodes[0]
        var svgThirdIndexChild = svg.childNodes[4]
        var chartElement =svgThirdIndexChild.childNodes[3]
        var chartLabelElements = chartElement.childNodes

        }
    
        function createFiveDayChart() {

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }

            var closePrices = []
            var closeDates = []

            for (var key in matchingStockDailyPriceData) {
                closePrices.push(parseFloat(matchingStockDailyPriceData[key]["4. close"]));
                closeDates.push(key);
              }
            
              let stockData = closeDates.map((date, index) => {
                return [date, closePrices[index]];
              });
    
              stockData.length = 5
               console.log(stockData)

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(stockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            
        var chartDiv = document.getElementById("chart_div")
        console.log(chartDiv)
        var chartDivFirstChildEl = chartDiv.childNodes[0]
        var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
        var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
        var svg = nextFirstChild.childNodes[0]
        var svgThirdIndexChild = svg.childNodes[4]
        var chartElement =svgThirdIndexChild.childNodes[3]
        var chartLabelElements = chartElement.childNodes
        }

        function createOneMonthChart() {
            console.log("show weekly chart.")

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }
            console.log(matchingStockOneMonthPriceData)

            var oneMonthClosePricesArr = []
            var oneMonthCloseDatesArr = []

            for (var key in matchingStockOneMonthPriceData) {
                oneMonthClosePricesArr.push(parseFloat(matchingStockOneMonthPriceData[key]["4. close"]));
                oneMonthCloseDatesArr.push(key);
              }
            
              let oneMonthStockData = oneMonthCloseDatesArr.map((date, index) => {
                return [date, oneMonthClosePricesArr[index]];
              });
    
            //    console.log(oneMonthStockData)

            oneMonthStockData.length = 5
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(oneMonthStockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            var chartDiv = document.getElementById("chart_div")
            var chartDivFirstChildEl = chartDiv.childNodes[0]
            var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
            var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
            var svg = nextFirstChild.childNodes[0]
            var svgThirdIndexChild = svg.childNodes[4]
            var chartElement =svgThirdIndexChild.childNodes[3]
            var chartLabelElements = chartElement.childNodes
            let chartLabelElementsArr = Array.from(chartLabelElements)
            chartLabelElementsArr = chartLabelElementsArr.slice(0, 5)
            console.log(chartLabelElementsArr)

            // for (let i = 0; i < chartLabelElementsArr.length; i++) {
            //     chartLabelElementsArr[i].style.transform = "rotate(45deg)"
            // }
        }

        function createThreeMonthChart() {
            console.log("show weekly chart.")
            console.log(matchingStockOneMonthPriceData)

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }

            var oneMonthClosePricesArr = []
            var oneMonthCloseDatesArr = []

            for (var key in matchingStockOneMonthPriceData) {
                oneMonthClosePricesArr.push(parseFloat(matchingStockOneMonthPriceData[key]["4. close"]));
                oneMonthCloseDatesArr.push(key);
              }
            
              let oneMonthStockData = oneMonthCloseDatesArr.map((date, index) => {
                return [date, oneMonthClosePricesArr[index]];
              });
    
            //    console.log(oneMonthStockData)

            oneMonthStockData.length = 15
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(oneMonthStockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            var chartDiv = document.getElementById("chart_div")
            var chartDivFirstChildEl = chartDiv.childNodes[0]
            var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
            var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
            var svg = nextFirstChild.childNodes[0]
            var svgThirdIndexChild = svg.childNodes[4]
            var chartElement =svgThirdIndexChild.childNodes[3]
            var chartLabelElements = chartElement.childNodes
            let chartLabelElementsArr = Array.from(chartLabelElements)
            chartLabelElementsArr = chartLabelElementsArr.slice(0, 5)
            console.log(chartLabelElementsArr)

            // for (let i = 0; i < chartLabelElementsArr.length; i++) {
            //     chartLabelElementsArr[i].style.transform = "rotate(45deg)"
            // }
        }

        function createSixMonthChart() {
            console.log("show weekly chart.")
            console.log(matchingStockOneMonthPriceData)

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }

            var oneMonthClosePricesArr = []
            var oneMonthCloseDatesArr = []

            for (var key in matchingStockOneMonthPriceData) {
                oneMonthClosePricesArr.push(parseFloat(matchingStockOneMonthPriceData[key]["4. close"]));
                oneMonthCloseDatesArr.push(key);
              }
            
              let oneMonthStockData = oneMonthCloseDatesArr.map((date, index) => {
                return [date, oneMonthClosePricesArr[index]];
              });
    
            //    console.log(oneMonthStockData)

            oneMonthStockData.length = 30
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(oneMonthStockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            var chartDiv = document.getElementById("chart_div")
            var chartDivFirstChildEl = chartDiv.childNodes[0]
            var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
            var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
            var svg = nextFirstChild.childNodes[0]
            var svgThirdIndexChild = svg.childNodes[4]
            var chartElement =svgThirdIndexChild.childNodes[3]
            var chartLabelElements = chartElement.childNodes
            let chartLabelElementsArr = Array.from(chartLabelElements)
            chartLabelElementsArr = chartLabelElementsArr.slice(0, 5)
            console.log(chartLabelElementsArr)

            // for (let i = 0; i < chartLabelElementsArr.length; i++) {
            //     chartLabelElementsArr[i].style.transform = "rotate(45deg)"
            // }
        }

        function createOneYearChart() {
            console.log("show weekly chart.")
            console.log(matchingStockOneMonthPriceData)

            if (matchingStockOneMonthPriceData === undefined) {
                alert("This application uses free data and is susceptible to call limits. Please try again later.")
                return
            }

            var oneMonthClosePricesArr = []
            var oneMonthCloseDatesArr = []

            for (var key in matchingStockOneMonthPriceData) {
                oneMonthClosePricesArr.push(parseFloat(matchingStockOneMonthPriceData[key]["4. close"]));
                oneMonthCloseDatesArr.push(key);
              }
            
              let oneMonthStockData = oneMonthCloseDatesArr.map((date, index) => {
                return [date, oneMonthClosePricesArr[index]];
              });
    
            //    console.log(oneMonthStockData)

            oneMonthStockData.length = 60
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'X');
            data.addColumn('number', 'Stock Price');
      
            data.addRows(oneMonthStockData);
      
            var options = {
            'title': `${matchingStockProfileDataResult.name} (${ticker}) Price`
            };
         
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      
            chart.draw(data, options);

            var chartDiv = document.getElementById("chart_div")
            var chartDivFirstChildEl = chartDiv.childNodes[0]
            var firstChildElOfChartDivFirstChildEl = chartDivFirstChildEl.childNodes[0]
            var nextFirstChild = firstChildElOfChartDivFirstChildEl.childNodes[0]
            var svg = nextFirstChild.childNodes[0]
            var svgThirdIndexChild = svg.childNodes[4]
            var chartElement =svgThirdIndexChild.childNodes[3]
            var chartLabelElements = chartElement.childNodes
            let chartLabelElementsArr = Array.from(chartLabelElements)
            chartLabelElementsArr = chartLabelElementsArr.slice(0, 5)
            console.log(chartLabelElementsArr)

            // for (let i = 0; i < chartLabelElementsArr.length; i++) {
            //     chartLabelElementsArr[i].style.transform = "rotate(45deg)"
            // }
        }

        createFiveDayChart()
        oneDayChartButton.addEventListener("click", createOneDayChart)
        fiveDayChartButton.addEventListener("click", createFiveDayChart)
        oneMonthChartButton.addEventListener("click", createOneMonthChart)
        threeMonthChartButton.addEventListener("click", createThreeMonthChart)
        sixMonthChartButton.addEventListener("click", createSixMonthChart)
        oneYearChartButton.addEventListener("click", createOneYearChart)

        previousFromChartsButton.addEventListener("click", function () {
            window.history.back()
        })
        watchlistsFromChartsButton.addEventListener("click", function () {
            window.location.hash = "#/watchlists"
        })
    }

    chartsHeaderContainer.appendChild(chartsHeader)
    renderMatchingStockChartsPageContainer.appendChild(chartsHeaderContainer)
    changeChartsButtonContainer.appendChild(oneDayChartButton)
    changeChartsButtonContainer.appendChild(fiveDayChartButton)
    changeChartsButtonContainer.appendChild(oneMonthChartButton)
    changeChartsButtonContainer.appendChild(threeMonthChartButton)
    changeChartsButtonContainer.appendChild(sixMonthChartButton)
    changeChartsButtonContainer.appendChild(oneYearChartButton)
    changePageFromChartsButtonContainer.appendChild(watchlistsFromChartsButton)
    changePageFromChartsButtonContainer.appendChild(previousFromChartsButton)
    renderMatchingStockChartsPageContainer.appendChild(changeChartsButtonContainer)
    renderMatchingStockChartsPageContainer.appendChild(changePageFromChartsButtonContainer)
}

function showMatchingStockChartsPage () {
    homeViewEl.classList.remove("view")
    homeViewEl.classList.add("hidden")
    watchlistsViewEl.classList.remove("view")
    watchlistsViewEl.classList.add("hidden")
    registrationViewEl.classList.remove("view")
    registrationViewEl.classList.add("hidden")
    signInViewEl.classList.remove("view")
    signInViewEl.classList.add("hidden")
    searchStocksViewEl.classList.remove("view")
    searchStocksViewEl.classList.add("hidden")
    matchingStockOverviewViewEl.classList.remove("view")
    matchingStockOverviewViewEl.classList.add("hidden")
    matchingStockChartsViewEl.classList.remove("hidden")
    matchingStockChartsViewEl.classList.add("view")

}

function showStatisticsPage() {

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")
    console.log("statistcs page")
}

function showNewsPage() {

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")

}

function showProfilePage() {

    var navItemsContainer = document.querySelector(".nav-items-container")
    navItemsContainer.classList.add("hidden")
    
}


function hideScrollBar() {
    var pageWrapper = document.querySelector(".page-wrap")
    
    // console.log(document.body.clientHeight)
    // console.log(document.body.scrollHeight)

    if (document.body.clientHeight === document.body.scrollHeight) {
        document.body.style.overflow = "hidden"
    } else if (document.body.clientHeight !== document.body.scrollHeight) {
        document.body.style.overflow = "auto"
    }
}

hideScrollBar()

window.addEventListener("load", handleCurrentPageView)

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
    
    if (currentURL === root || currentURL === `${root}#` || currentURL === `${root}#/`) {
        showHomePage()
    }
    
    if (currentURL === `${root}#/registration`) {
        showRegistrationPage()
        renderRegistrationForm()
    } 
    
    if (currentURL === `${root}#/signIn`) {
        showSignInPage()
        renderSignInForm() 
    }

    if (currentURL === `${root}#/watchlists`) {
        showWatchlistsPage()
        renderWatchListsPage()
    }

    if (window.location.href.indexOf("watchlist/") > -1) {
        renderViewWatchlistPage()
        showViewWatchilstPage()
    }

    if (currentURL === `${root}#/createWatchlists`) {
        showCreateWatchlistsPage()
        renderCreateWatchlistsPage()
        createWatchlist()
    }

    if (currentURL === `${root}#/searchStocks`) {
        showSearchStocksPage()
        renderSearchStocksPage()
    }

    if (window.location.href.indexOf("quote") > -1) {
        showMatchingStockQuotePage()
        renderMatchingStockQuote()
    }

    if (window.location.href.indexOf("summary") > -1) {
       showMatchingStockOverview()
       renderMatchingStockOverview()
    }

    if (window.location.href.indexOf("charts") > -1) {
        showMatchingStockChartsPage()
        renderMatchingStockCharts()
     }
}

window.onpopstate = function () {
    location.reload()
}