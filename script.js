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
updateTime();
setInterval(updateTime, 1000);
