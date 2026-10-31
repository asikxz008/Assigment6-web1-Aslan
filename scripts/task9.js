$(document).ready(function () {
  const $box = $("#animation-box");
  const original = { left: 16, top: 16, width: 64, height: 64, opacity: 1 };

  $("#play-sequence").on("click", function () {
    const right = Math.max(16, Math.min(230, $("#animation-stage").innerWidth() - 80));
    $("#play-sequence").prop("disabled", true);
    $("#animation-status").text("Step 1 of 4: move right.");
    $box.stop(true, true).css(original)
      .animate({ left: right }, 500, function () {
        $("#animation-status").text("Step 2 of 4: move down.");
      })
      .animate({ top: 180 }, 500, function () {
        $("#animation-status").text("Step 3 of 4: shrink.");
      })
      .animate({ width: 36, height: 36 }, 400, function () {
        $("#animation-status").text("Step 4 of 4: return to the original size and position.");
      })
      .animate(original, 600, function () {
        $("#play-sequence").prop("disabled", false);
        $("#animation-status").text("All four steps are complete. The square is back at the start.");
      });
  });

  $("#reset-box").on("click", function () {
    $box.stop(true, true).css(original);
    $("#play-sequence").prop("disabled", false);
    $("#animation-status").text("The queue was cleared and the square was reset.");
  });
});
