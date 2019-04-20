$(document).ready(function() {
	$('#Go').hide();
	$('#GroupSelector').hide();
	$('#semianSelector').hide();
	$('#Go').click(function() {
		$('table').show();
	});

	$('#GroupSelector ').change(function() {
		$('#Go').show();
	});
	$('#YearSelector ').change(function() {
		$('#semianSelector').show();
	});
	$('#semianSelector ').change(function() {
		$('#GroupSelector').show();
	});

	$('.delete-column').click(function() {
		var number = this.parentElement.cellIndex + 1;
		$('.table th:nth-child(' + number + '), .table td:nth-child(' + number + ')').remove();
	});

	$('.delete-row').click(function() {
		$(this).parent().remove();
	});
});
