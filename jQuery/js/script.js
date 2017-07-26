// obj={
// 	name: "Nazrin",
// 	surname: "Binyaminova",
// 	first: function(){
// 		console.log("first")
// 		return this;
// 	},
// 	second: function(){
// 		console.log("first")
// 		return this;
// 	},
// }

// $(document).ready(function() {
// 	$(".panel-body").hide()
// 	$(".panel-heading").click(function(){
// 		$(".panel-body").hide()
// 		$(this).next().show("slow");
// 	});
// });



// widthBox=300;

// function myFunc(){
// 	var box=document.querySelectorAll(".box")
// 	for (var i=0; i<7; i++) {
// 		box[i].sytle.background="red";
// 		widthBox+=10;
// 	}
// } myFunc()
$(window).ready(function() {
$(".section1").click(function(){
    $("body").animate({
    	scrollTop:0
    	}, 1000); 
});

$(".section2").click(function(){
    $("body").animate({
    	scrollTop:1000
    	}, 1000); 
});

$(".section3").click(function(){
    $("body").animate({
    	scrollTop:2000
    	}, 1000); 
});


$(".section4").click(function(){
    $("body").animate({
    	scrollTop:3000
    	}, 1000); 
});
});
