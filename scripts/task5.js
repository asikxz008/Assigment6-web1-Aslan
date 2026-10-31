$(document).ready(function () {
  const $list = $("#item-list");
  let nextItem = 4;

  function updateList(message) {
    const count = $list.children("li").length;
    $("#empty-list").prop("hidden", count !== 0);
    $("#remove-item").prop("disabled", count === 0);
    $("#list-status").text(message + " Total items: " + count + ".");
  }

  function createItem() {
    const label = $("#item-text").val().trim() || "Item " + nextItem;
    nextItem += 1;
    $("#item-text").val("").trigger("focus");
    // Insert user input as text, never as HTML.
    return $("<li>").text(label);
  }

  $("#add-item").on("click", function () {
    $list.append(createItem());
    updateList("Appended an item to the end.");
  });
  $("#prepend-item").on("click", function () {
    $list.prepend(createItem());
    updateList("Prepended an item to the beginning.");
  });
  $("#remove-item").on("click", function () {
    if (!$list.children("li").length) return;
    $list.children("li").last().remove();
    updateList("Removed the last item.");
  });
  $("#item-text").on("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#add-item").trigger("click");
    }
  });
});
