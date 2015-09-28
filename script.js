$(document).ready(function()
{
	setInterval(function()
	{
		$('#images_list').animate({marginLeft: '-100%'}, 3000, function()
		{
			$(this).find('li:last').after($(this).find('li:first'));
			$(this).css({'margin-left' : '0'});
		});
	}, 6000);
	
});

