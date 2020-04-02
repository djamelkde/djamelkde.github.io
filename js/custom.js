$(document).ready(function(){

	/*++++++++++++++++++++++++++++++++++++
		Publications page categorization
	++++++++++++++++++++++++++++++++++++++*/	
	
	$('div#pub-grid').mixitup({
		layoutMode: 'list',
		easing : 'snap',
		transitionSpeed :600,
		onMixEnd: function(){
			$(".tooltips").tooltip();
		}
	}).on('click','div.pubmain',function(){
		var $this = $(this), 
			$item = $this.closest(".item");
		
		$item.find('div.pubdetails').slideToggle(function(){
			$this.children("i").toggleClass('icon-collapse-alt icon-expand-alt');
		},function(){
			$this.children("i").toggleClass('icon-expand-alt icon-collapse-alt');
		});
	});

	$( '#cd-dropdown' ).dropdownit( {
		gutter : 0
	} );

	$("[name=cd-dropdown]").on("change",function(){
		var item = this.value;		
		$('div#pub-grid').mixitup('filter',item);
	});
});