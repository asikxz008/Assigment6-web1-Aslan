$(document).ready(function () {
  let showCanyon = false;
  let showAnimationDocs = false;

  $("#change-image").on("click", function () {
    showCanyon = !showCanyon;
    const src = showCanyon ? "assets/canyon.svg" : "assets/mountains.svg";
    const alt = showCanyon ? "Illustration of Charyn canyon" : "Illustration of Almaty mountains";
    $("#attribute-image").attr({ src: src, alt: alt });
    $("#image-source").text("src: " + src);
    $("#attribute-status").text("The image src and its alternative text were updated.");
  });

  $("#change-link").on("click", function () {
    showAnimationDocs = !showAnimationDocs;
    const href = showAnimationDocs ? "https://api.jquery.com/animate/" : "https://api.jquery.com/ready/";
    $("#dynamic-link")
      .attr("href", href)
      .text(showAnimationDocs ? "Read the .animate() documentation ↗" : "Read the .ready() documentation ↗");
    $("#link-target").text("href: " + href);
    $("#attribute-status").text("The link now opens the selected jQuery documentation page.");
  });
});
