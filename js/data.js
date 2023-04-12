async function getMatchingStocks(search) {
    const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=MVPYPPFWDTRLQU0S`)
    return await res.json()
}

export { getMatchingStocks }
