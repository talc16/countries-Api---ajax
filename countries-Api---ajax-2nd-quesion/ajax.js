
function getCountriesByCapital(capitalInput, callback) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/capital/${capitalInput}`,
        method: "GET",
        success: function (result, status, response) {
            console.log(result,status, response)
            callback(result)
        },
        error: function (err) {
            
            $("#resultView").html("<h1>No Data!</h1>")
            $(".cards").html("")
        }
    })
}
function getCountryByCode(code, callback) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/alpha/${code}`,
        method: "GET",
        success: function (result, status, response) {
            console.log(result,status, response)
            callback(result)
        },
        error: function (err) {
            
            $("#resultView").html("<h1>No Data!</h1>")
            $(".cards").html("")
        }
    })
}
function getCurrency(currency, callback) {
    $.ajax({
        url: `https://api.exchangeratesapi.io/latest?base=${currency}`,
        method: "GET",
        success: function (result, status, response) {
            console.log(result,status, response)
            callback(result)
        },
        error: function (err) {
            
            $("#resultView").html("<h1>No Data!</h1>")
            $(".cards").html("")
        }
    })
}