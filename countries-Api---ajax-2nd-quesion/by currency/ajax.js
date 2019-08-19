

function getCountriesByCurrencty(currencyInput, callback) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/currency/${currencyInput}`,
        method: "GET",
        success: function (result, status, response) {
            $("#resultView").html("")
            // console.log(result,status, response)
            callback(result)
        },
        error: function (err) {
            $("#resultView").html("<h1>No Data!</h1>")
            $(".cards").html("")
        }
    })
}