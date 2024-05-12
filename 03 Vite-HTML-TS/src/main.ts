import "./style.scss";

declare global {
  interface Window {
    $: JQueryStatic;
  }
}

console.log("Vite testing");

$(document).ready(function () {
  $("h1").css("background-color", "#b3ffff");
});
