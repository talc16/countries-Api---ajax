$(function () {
    $("#search").on("click", function () {
        const cName = $("#countrySearch").val()
        getCountriesByCurrencty(cName, (result) => {
            $(".cards").html("")
            
            $("#resultView").html(getCountriesNames(result))
        })
    })
})

let currenciesString=""
function getCountriesNames(countries) {
    countries.map((country) => {
        currenciesString=""
        const { name, capital,currencies, flag } = country;
        currencies.map((currency) => { 
            const { name } = currency;
            currenciesString = `${currenciesString} ${name},`
            console.log(currenciesString)
        })
        $(".cards").append(`<div class="col-md-3"> <div class="card"> 
        <img class="card-img" src="${flag}" style="width:100%; height:300px">
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text">Capital - ${capital} <br> Currencies - ${currenciesString}</p>
            </div></div></div>`
        )
    })
}

