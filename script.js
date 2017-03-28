var x;
function maxWidth(event){
	
		x = event.target.style.width;
		$(this).css({
                  width: '80%'
         });
		$(this).click(function(){
			$('.album1').css({
				width: x
		});			
		onClick();
		});
}
function onClick(event){
	$('.album1').click(maxWidth);
}

$(document).ready(function(){
 		onClick();

});