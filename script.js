function updateTime() {
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  pretoriaDateElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("MMMM Do YYYY");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment();
  pretoriaTimeElement.innerHTML = pretoriaTime.format(
    "[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector("#sydney .date");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "[<strong>]hh:mm:ss[</strong>] [<small>]A[</small>]"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);

    let citiesElement = document.querySelector("#city");
    citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">
          <strong>${cityTime.format("hh:mm:ss")} <small> ${cityTime.format(
      "A"
    )}</small></strong>
        </div>
      </div>
      <a href="/">Back to all cities</a>`;
  }

  citiesSelectElement.addEventListener("change", updateCity);
});

let citiesSelectElement = document.querySelector("#cities");
updateTime();
setInterval(updateTime, 1000);
