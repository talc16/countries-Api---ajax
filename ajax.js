// function getCountries(capitalInput,callback) {
//     $.ajax({
//         url: `https://restcountries.eu/rest/v2/capital/${capitalInput}`,
//         method: "GET",
//         success: function (result, status, response) {
//             console.log(status, response)
//             // callback(result)
//         },
//         error: function (err) {
//             $("#resultView").html("<h1>No Data!</h1>")
//         }
//     })
// }

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
        }
    })
}