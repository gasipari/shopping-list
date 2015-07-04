// app js script
"use strict";
//make sure we don't execute any script before the document is fully loaded
$(document).ready(function(){
	//console.log("app is ready!");

	// add stores
	function updateStoreList(){
		$("#store-item-list").find("td.store-name").each(function(){
			var store = $(this).html();
			var storeOption = "<option value="+store+">"+store+"</option>";

		//
		if ($("#shopping-store option[value="+store+"]").length === 0) {
			//console.log('store does not exists!Adding it...');
			$("#shopping-store").append(storeOption);
			}
		});
	}
	updateStoreList();

	// add shopping list item
	$("#add-button").click(function(){
		var item = $("#shopping-item").val();
		var qty = $("#shopping-item-qty").val();
		var store = $("#shopping-store").val();
		
		// check data input before adding item to the list
		if (item && store) {
			$("#shopping-item-list tbody").append("<tr><td><i class='fa fa-square-o'></i></td><td>"+item+"</td><td>"+qty+"</td><td>"+store+"</td><td><i class='fa fa-times'></i></td></tr>");
		}else {
			alert("Please enter item/store");
		}
	});

	// add store item
	$("#add-button-store").click(function(){
		var store = $("#store-item").val();
		var storeType = $("#shopping-store-type").val();
		
		// check data input before adding item to the list
		if (store && storeType) {
			$("#store-item-list tbody").append("<tr><td class='store-name'>"+store+"</td><td>"+storeType+"</td><td><i class='fa fa-times'></i></td></tr>");
		}else {
			alert("Please enter store/type");
		}
	});

	// add fake tooltip
	$(".fa-square-o").attr("title", "Active");
	$(".fa-check-square-o").attr("title", "Got it");
	$(".fa-times").attr("title", "Remove this item");

	$("#shopping-item-qty").attr("title", "Select quantity");
	$("#shopping-store").attr("title", "Select store");

	// add click event listener to table row
	$("table").on("click", "i", function(event){
		//console.log(event.currentTarget.children[0].children[0].className);
		var currentClass = event.currentTarget.className;

		// check selected icon class
		if (currentClass == "fa fa-times") { // delete item
			
			// remove store
			if ($(this.parentElement.parentElement.firstElementChild)[0].className == "store-name") {
				var removeStore = $(this.parentElement.parentElement.firstElementChild).html();
				$("#shopping-store option[value="+removeStore+"]").remove();
			}
			$(this.parentElement.parentElement).remove();
		}else if (currentClass == "fa fa-square-o") { // add item  
			$(this).removeClass("fa-square-o").addClass("fa-check-square-o");
			$(this.parentElement.parentElement).css("background-color","lightgreen");
		}else { // uncheck item
			$(this).removeClass("fa-check-square-o").addClass("fa-square-o");
				// check Zebra striping
				// if ($(selectedItem+":nth-of-type(odd)")) {
				// 	$(selectedItem).css("background-color","#eee");
				// }else {
				// 	$(selectedItem).css("background-color","white");
				// }
				$(this.parentElement.parentElement).css("background-color","white");
			}
		});
	// toggle list/store views
	$("#manage-stores").click(function(){
		$(".menu-section").hide();
		$(".menu-section-store").show();

		$(".main-section").hide();
		$(".main-section-store").show();
	});
	$("#back-to-list").click(function(){
		$(".menu-section").show();
		$(".menu-section-store").hide();

		$(".main-section").show();
		$(".main-section-store").hide();
		//
		updateStoreList();
	});
});


