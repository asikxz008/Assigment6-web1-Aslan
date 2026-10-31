$(document).ready(function () {
  $("#change-text").on("click", function () {
    // ID selector: one specific element.
    $("#id-target").text("Selected by ID. This content was changed with .text().");
    $("#selector-status").text("The ID selector updated one element.");
  });

  $("#change-html").on("click", function () {
    // Class selector: both matching elements receive the same HTML.
    $(".class-target").html("<strong>Selected by class.</strong> This bold text uses .html().");
    $("#selector-status").text("The class selector updated both matching elements.");
  });

  $("#change-css").on("click", function () {
    // Tag selector: select the article element by its tag name.
    $("article").css({ backgroundColor: "#e7f4ed", color: "#236b52", padding: "14px", borderRadius: "8px" });
    $("#selector-status").text("The tag selector changed the article's CSS.");
  });

  $("#reset-selectors").on("click", function () {
    $("#id-target").text("Select me by my ID.");
    $(".class-target").text("Select me by my class.");
    $("article").css({ backgroundColor: "", color: "", padding: "", borderRadius: "" });
    $("#selector-status").text("Original content and styles restored.");
  });
});
