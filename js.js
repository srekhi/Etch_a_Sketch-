
$(document).ready(function()
{	var originalnum=16;

	gridthis(originalnum);

	$("td").hover(function()
{
	$(this).addClass("colored");
});

});

function gridthis(dim)
{
	var grid = document.getElementById("table");
	for (var i=0; i<dim; i++)
	{
		var tr = grid.appendChild(document.createElement('tr'));
		for (var c=0; c<dim; c++)
		{
			var cell = tr.appendChild(document.createElement('td'));
		}
	}

}

function clearGrid()
{	
  	$("#table").empty();
	var dim= prompt("What dimensions of the grid do you want?")
	gridthis(dim); //this is adding another grid, so we want to delete the last one
	//window.location.reload();
	$("td").hover(function()
{
	$(this).addClass("colored");
});
	
}
