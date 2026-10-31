$(document).ready(function () {
  function updatePreview() {
    const name = $("#name").val();
    const email = $("#email").val();
    $("#preview-name").text(name || "Not entered yet");
    $("#preview-email").text(email || "Not entered yet");
    $("#form-status").text("The preview updates as you type. Nothing is sent or saved.");
  }

  $("#name, #email").on("input", updatePreview);

  $("#preview-form").on("submit", function (event) {
    event.preventDefault();
    $("#form-status").text("Both fields passed the browser's checks. This is a local preview only.");
  });

  $("#preview-form").on("reset", function () {
    // The reset event happens before the browser restores the fields.
    window.setTimeout(updatePreview, 0);
  });

  updatePreview();
});
