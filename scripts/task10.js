$(document).ready(function () {
  const $box = $("#animation-box");
  const original = { left: 16, top: 16, width: 64, height: 64, opacity: 1 };

  $("#combined-animation").on("click", function () {
    const right = Math.max(16, Math.min(210, $("#animation-stage").innerWidth() - 126));
    $("#combined-animation").prop("disabled", true);
    $("#animation-status").text("Changing position, size, and opacity together.");
    $box.stop(true, true).css(original).animate(
      { left: right, top: 115, width: 110, height: 110, opacity: 0.35 },
      1000,
      function () {
        $("#combined-animation").prop("disabled", false);
        $("#animation-status").text("One .animate() call changed all five properties at the same time.");
      }
    );
  });

  $("#reset-box").on("click", function () {
    $box.stop(true, true).css(original);
    $("#combined-animation").prop("disabled", false);
    $("#animation-status").text("Original size, position, and opacity restored.");
  });
});
