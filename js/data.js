const remoteURL = "http://localhost:3000"

var currentTimeStamp = Date.now()
var currentTimeStampStr = currentTimeStamp.toString()
console.log(currentTimeStampStr)
let currentDate = new Date();
var dd = currentDate.getDate();

var mm = currentDate.getMonth()+1; 
var yyyy = currentDate.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
currentDate = yyyy+'-'+mm+'-'+dd
console.log(currentDate);

var sessionStorageId = sessionStorage.getItem("id")
var sessionStorageIdNum = parseInt(sessionStorageId)

async function getAllUsers() {
    const res = await fetch(`${remoteURL}/users`)
    return await res.json()
}

async function getUser(id) {
    const res = await fetch(`${remoteURL}/users/${id}`)
}

async function getMatchingStockTickerData(ticker) {
    const res = await fetch(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=BOfLlBXGLnTWqzN5rrpthhw5UwD7KJQ_`)
    return await res.json()
}

async function getMatchingStockProfileData(ticker) {
    const res = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=chvbvthr01qrqeng4g6gchvbvthr01qrqeng4g70`)
    return await res.json()
}

async function getMatchingStockOverviewData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
}

async function getMatchingStockQuoteData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
}

async function getMatchingStockQuoteDataTwo(ticker) {
    const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=chvbvthr01qrqeng4g6gchvbvthr01qrqeng4g70`)
    return await res.json()
}   

// async function getMatchingStockDailyPriceData(ticker) {
//     const res = await fetch(`https://api.polygon.io/v1/open-close/${ticker}/${currentDate}?adjusted=true&apiKey=BOfLlBXGLnTWqzN5rrpthhw5UwD7KJQ_`)
//     return await res.json()
// }

async function getMatchingStockIntradayPricingData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=30min&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
}

async function getMatchingStockPricingData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
} 

async function getMatchingStockOneMonthPriceData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
}

async function getMatchingStockPriceCandles(ticker, oneWeekTimeStampStr, currentTimeStampStr) {
    const res = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=W&from=${currentTimeStampStr}to=${currentTimeStampStr}&token=chvbvthr01qrqeng4g6gchvbvthr01qrqeng4g70`)
    return await res.json()
}

async function getMatchingStockEarningsData(ticker) {
    const res = await fetch(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${ticker}&apikey=dMVPYPPFWDTRLQU0S`)
    return await res.json()
}

async function getMatchingStockEPSCalendarData(ticker) {
    const res = await fetch(`https://finnhub.io/api/v1/calendar/earnings?from=2022-03-01&to=2023-03-09&symbol=${ticker}&token=chvbvthr01qrqeng4g6gchvbvthr01qrqeng4g70`)
    return await res.json()
}

async function getMatchingStockCurrentVolume(ticker, error) {
    const res = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=BOfLlBXGLnTWqzN5rrpthhw5UwD7KJQ_`)
    console.log(res.status)

    if (res.status === 429) {
        alert("This application uses free data and is susceptible to call limits. Please wait a moment before continuing.")
        window.location.hash = "/"
    }
    return await res.json()
}

async function getMatchingStockBasicFinancialData(ticker) {
    const res = await fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=all&token=chvbvthr01qrqeng4g6gchvbvthr01qrqeng4g70`)
    return await res.json()
}

async function getWatchlists() {
    const res = await fetch(`${remoteURL}/watchlists`)
    return res.json()
}

async function getUserWatchlists() {
    var watchlists = await getWatchlists();
    var userWatchlistsArr = [];

    for (let i = 0; i < watchlists.length; i++) {

        if (watchlists[i].userId === sessionStorageIdNum) {
            userWatchlistsArr.push(watchlists[i])
        }
    } 
    return userWatchlistsArr
}

getUserWatchlists()

async function getWatchlist(watchlistId) {
    const res = await fetch(`${remoteURL}/watchlists/${watchlistId}`)
    return res.json()
}

async function postNewUser(newUserObj) {
    const res = await fetch(`${remoteURL}/users`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newUserObj)
    })

    return res.json()
}

async function postWatchlist(newWatchlistObj) {
    const res = await fetch(`${remoteURL}/watchlists`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newWatchlistObj)
    })

    return res.json()
}

async function putWatchlist(id, editedWatchlistObj) {
    const res = await fetch(`${remoteURL}/watchlists/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedWatchlistObj)
    })
// console.log(res)
    return res.json()
}

async function patchWatchlist(id, editedWatchlistObj) {
    const res = await fetch(`${remoteURL}/watchlists/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedWatchlistObj)
    })

    return res.json()
}

async function deleteWatchlist(id) {
    const res = await fetch(`${remoteURL}/watchlists/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    })

    return res.json()
}


export { getAllUsers, getUser, getMatchingStockTickerData, getMatchingStockOverviewData, getMatchingStockQuoteData, getMatchingStockEarningsData, getMatchingStockIntradayPricingData, getMatchingStockPricingData, getMatchingStockOneMonthPriceData, getMatchingStockPriceCandles, getMatchingStockBasicFinancialData, getMatchingStockQuoteDataTwo, getMatchingStockProfileData, getMatchingStockEPSCalendarData, getMatchingStockCurrentVolume, getWatchlists, getWatchlist, getUserWatchlists, postNewUser, postWatchlist, putWatchlist, patchWatchlist, deleteWatchlist }
