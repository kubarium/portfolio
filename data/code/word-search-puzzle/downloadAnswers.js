javascript: var script = document.createElement("script");
script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
script.type = "text/javascript";
script.addEventListener("load", event => {
  const title = $("#wordsearch-title");

  $("#header").remove();
  $("#show-answers").click();
  $("#svg-grid").css("font-family", "monospace");
  $("#wide-inner-content").remove();
  $("#wordsearch-bottom").remove();
  $("#everything").css("height", "100%").css("overflow", "initial");
  $(".playable")
    .css("width", 1224)
    .parent()
    .css("display", "inline-block")
    .prepend(title.clone().css("font-size", "48pt").css("line-height", "96pt"));

  html2canvas(document.querySelector(".playable").parentElement).then(
    canvas => {
      document.body.appendChild(canvas);
      var link = document.createElement("a");
      link.setAttribute("download", `${title.text()}.png`);
      link.setAttribute(
        "href",
        canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream"),
      );
      link.click();
    },
  );
});
document.getElementsByTagName("head")[0].appendChild(script);