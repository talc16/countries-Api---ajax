

$(function () {

    $("#search").on("click", function () {
        const cName = $("#countrySearch").val()
        getCountriesByCapital(cName, (result) => {
            $(".cards").html("")
            $("#resultView").html(getCountriesNames(result))
        })
    })
})

function getCountriesNames(countries) {
    countries.map((country) => {
        const { name, capital, flag } = country;
        console.log(`${name}`)
        $(".cards").append(`<div class="col-md-3"> <div class="card"> 
        <img class="card-img" src="${flag}" style="width:100%; height:300px">
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <p class="card-text">Capital - ${capital}</p>
            </div></div></div>`
        )
    })
}
// getCountries((countries) => {
//     $("#resultView").html(getCountriesNames(countries))
// });

