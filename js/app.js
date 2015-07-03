// app js script

//make sure we don't execute any script before the document is fully loaded
$(document).ready(function(){
	console.log("app is ready!");

	// add event listner to add button
	$("#add-button").click(function(){
		var item = $("#shopping-item").val();
		$("#shopping-item-list tbody").append('<tr><td><i class="fa fa-square-o"></i></td><td>bread</td><td>1</td><td>Trader Joe</td></tr>');
	})

	// remove item from the list
	$("#remove-button").click(function(){
		console.log("removing item..");
		$("#shopping-item-list tbody tr:last").remove();
	})

	// fake tooltip
	$(".fa-square-o").attr("title", "Active");
	$(".fa-check-square-o").attr("title", "Got it");

	// action done/remove logic
	$('#shopping-item-list tbody td').click(function(event){
		var currentClass = event.currentTarget.parentElement.childNodes[1].firstChild.className;
		var selectedItemIcon = event.currentTarget.parentElement.childNodes[1].firstChild;
		var selectedItem = event.currentTarget.parentElement;
		if (currentClass == 'fa fa-square-o') {
			$(selectedItemIcon).removeClass("fa-square-o").addClass("fa-check-square-o");
			$(selectedItem).css("background-color","lightgreen");
			//$(selectedItem).css("text-decoration","line-through");
			//$(selectedItem).addClass("item-done");
		}else {
			$(selectedItemIcon).removeClass("fa-check-square-o").addClass("fa-square-o");
			// check Zebra striping
			// if ($(selectedItem+":nth-of-type(odd)")) {
			// 	$(selectedItem).css("background-color","#eee");
			// }else {
			// 	$(selectedItem).css("background-color","white");
			// }
			$(selectedItem).css("background-color","white");
		};
			//$(selectedItem).css("text-decoration","none");
	})
})