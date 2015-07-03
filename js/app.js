// app js script

//make sure we don't execute any script before the document is fully loaded
$(document).ready(function(){
	console.log('app is ready!');

	// add event listner to add button
	$('#add-button').click(function(){
		var item = $('#shopping-item').val();
		console.log('Add new item: '+item);
		$('#shopping-item-list tbody').append('<tr><td><i class="fa fa-square-o"></i></td><td>bread</td><td>1</td><td>Trader Joe</td></tr>');
	})

	// remove item from the list
	$('#remove-button').click(function(){
		console.log('removing item..');
		$('#shopping-item-list tbody tr:last').remove();
	})
})