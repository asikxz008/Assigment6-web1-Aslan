// The full CDN build is required: the slim build does not include effects.
if (typeof window.jQuery === "undefined") {
  document.getElementById("library-error").hidden = false;
} else {
  $(document).ready(function () {
    // Respect the visitor's system motion preference.
    $.fx.off = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
}
