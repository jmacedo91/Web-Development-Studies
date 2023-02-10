// 🟡 jQuery Lessons


// document.querySelector("h1") === $("h1")

/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Manipulating Styles with jQuery

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// $("h1").addClass("big-title margin-50");
// console.log($("h1").hasClass("margin-50"));

/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Manipulating Text with jQuery

// $("h1").text("Bora Bill!");
// $("button").text("Don't click me!");
// $("button").html("<em>Hey Joe!</em>");


/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Manipulating Attributes with jQuery

// console.log($("img").attr("src"));
// $("a").attr("href", "https://yahoo.com");


/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Adding Event Listeners with jQuery

// for (var i = 0; i < 5; i++) {
// 	document.querySelectorAll("button")[i].addEventListener("click", function () {
// 		document.querySelector("h1").style.color = "purple";
// 	});
// };

// $("button").click(function () {
// 	$("h1").css("color", "purple");
// });

// $(document).keydown(function (event) {
// 	console.log(event.key);
// });

// $(document).keydown(function (event) {
// 	$("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
// 	$("h1").css("color", "purple");
// });

// $("h1").on("mouseover", function () {
// 	$("h1").text("Bora Bill");
// });

/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Adding and removing elements with jQuery
// $("h1").before("<button>New!</button>");
// $("h1").after("<button>New!</button>");
// $("h1").append("<button>New!</button>");

/////////////////////////////////////////////////////////////////////////////////////

// 🟡 Website animations with jQuery
// $("button").on("click", function () {
// 	$("h1").hide();
// });

// $("button").on("click", function () {
// 	$("h1").show();
// });

// $("button").on("click", function () {
// 	$("h1").toggle("slow");
// });

// $("button").on("click", function () {
// 	$("h1").fadeOut();
// });

// $("button").on("click", function () {
// 	$("h1").fadeIn();
// });

// $("button").on("click", function () {
// 	$("h1").fadeToggle();
// });

// $("button").on("click", function () {
// 	$("h1").slideUp();
// });

// $("button").on("click", function () {
// 	$("h1").slideDown();
// });

// $("button").on("click", function () {
// 	$("h1").animate({opacity: 0.1});
// });

// $("button").on("click", function () {
// 	$("h1").animate({margin: 20});
// });

// $("button").on("click", function () {
// 	$("h1").animate({margin: "20%"});
// });

// $("button").on("click", function () {
// 	$("h1").slideUp().slideDown().animate({opacity: 0.5});
// });
