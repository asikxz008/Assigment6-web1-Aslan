$(document).ready(function () {
  const $box = $("#animation-box");
  const $play = $("#animate-box");

  $("#animate-box").on("click", function () {
    const right = Math.max(16, Math.min(220, $("#animation-stage").innerWidth() - 120));
    $play.prop("disabled", true);
    $("#animation-status").text("Growing the square and moving it right and down.");
    $box.stop(true, true).animate(
      { width: 104, height: 104, left: right, top: 110 },
      800,
      function () {
        $play.prop("disabled", false);
        $("#animation-status").text("Animation complete: the square is now 104 × 104 px.");
      }
    );
  });

  $("#reset-box").on("click", function () {
    $box.stop(true, true).css({ width: 64, height: 64, left: 16, top: 16, opacity: 1 });
    $play.prop("disabled", false);
    $("#animation-status").text("The original size and position were restored.");
  });
});
