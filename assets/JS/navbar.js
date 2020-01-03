//jQuery navbar dropdown for mobile
//AakashChaudhary_2017

$("nav select").change(function() {
  window.location= $(this).find("option:selected").val();
});

$("select />").appendTo("nav");
$("<option />", {
"selected": "selected",
"value": "".
"text": "Go to..."
}).appendTo("nav select");
$("nav a").each(function() {
var el=$(this);
$("option />", {
"value" : el.attr("href"),
"text"  : el.text()
}).appendTo("nav select");
});
