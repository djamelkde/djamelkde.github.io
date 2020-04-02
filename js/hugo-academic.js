(function($){let $navbar=$('.navbar-header');let navbar_offset=$navbar.innerHeight();function scrollToAnchor(target){target=(typeof target==='undefined'||typeof target==='object')?window.location.hash:target;target=target.replace(/:/g,'\\:');if($(target).length){$('body').addClass('scrolling');$('html, body').animate({scrollTop:$(target).offset().top-navbar_offset},600,function(){$('body').removeClass('scrolling');});}}
function fixScrollspy(){let $body=$('body');let data=$body.data('bs.scrollspy');if(data){data.options.offset=navbar_offset;$body.data('bs.scrollspy',data);$body.scrollspy('refresh');}}
window.addEventListener("hashchange",scrollToAnchor);$('#navbar-main li.nav-item a').on('click',function(event){let hash=this.hash;if(hash&&$(hash).length&&($("#homepage").length>0)){event.preventDefault();$('html, body').animate({scrollTop:$(hash).offset().top-navbar_offset},800);}});$('#back_to_top').on('click',function(event){event.preventDefault();$('html, body').animate({'scrollTop':0},800,function(){window.location.hash="";});});$(document).on('click','.navbar-collapse.in',function(e){let targetElement=$(e.target).is('a')?$(e.target):$(e.target).parent();if(targetElement.is('a')&&targetElement.attr('class')!='dropdown-toggle'){$(this).collapse('hide');}});let $grid_pubs=$('#container-publications');$grid_pubs.isotope({itemSelector:'.isotope-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'}});let pubFilters={};function concatValues(obj){let value='';for(let prop in obj){value+=obj[prop];}
return value;}
$('.pub-filters').on('change',function(){let $this=$(this);let filterGroup=$this[0].getAttribute('data-filter-group');pubFilters[filterGroup]=this.value;let filterValues=concatValues(pubFilters);$grid_pubs.isotope({filter:filterValues});if(filterGroup=="pubtype"){let url=$(this).val();if(url.substr(0,9)=='.pubtype-'){window.location.hash=url.substr(9);}else{window.location.hash='';}}});function filter_publications(){let urlHash=window.location.hash.replace('#','');let filterValue='*';if(urlHash!=''&&!isNaN(urlHash)){filterValue='.pubtype-'+urlHash;}
let filterGroup='pubtype';pubFilters[filterGroup]=filterValue;let filterValues=concatValues(pubFilters);$grid_pubs.isotope({filter:filterValues});$('.pubtype-select').val(filterValue);}
function initMap(){if($('#map').length){let lat=$('#gmap-lat').val();let lng=$('#gmap-lng').val();let address=$('#gmap-dir').val();let map=new GMaps({div:'#map',lat:lat,lng:lng,zoomControl:true,zoomControlOpt:{style:'SMALL',position:'TOP_LEFT'},panControl:false,streetViewControl:false,mapTypeControl:false,overviewMapControl:false,scrollwheel:true,draggable:true});map.addMarker({lat:lat,lng:lng,click:function(e){let url='https://www.google.com/maps/place/'+encodeURIComponent(address)+'/@'+lat+','+lng+'/';window.open(url,'_blank')},title:address})}}
$(window).on('load',function(){if(window.location.hash){if(window.location.hash=="#top"){window.location.hash=""}else{scrollToAnchor();}}
let $body=$('body');$body.scrollspy({offset:navbar_offset});let resizeTimer;$(window).resize(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(fixScrollspy,200);});$('.projects-container').each(function(index,container){let $container=$(container);let $section=$container.closest('section');let layout='masonry';if($section.find('.isotope').hasClass('js-layout-row')){layout='fitRows';}
$container.imagesLoaded(function(){$container.isotope({itemSelector:'.isotope-item',layoutMode:layout,filter:$section.find('.default-project-filter').text()});$section.find('.project-filters a').click(function(){let selector=$(this).attr('data-filter');$container.isotope({filter:selector});$(this).removeClass('active').addClass('active').siblings().removeClass('active all');return false;});});});if($('.pub-filters-select')){filter_publications();}
$('.js-cite-modal').click(function(e){e.preventDefault();let filename=$(this).attr('data-filename');let modal=$('#modal');modal.find('.modal-body').load(filename,function(response,status,xhr){if(status=='error'){let msg="Error: ";$('#modal-error').html(msg+xhr.status+" "+xhr.statusText);}else{$('.js-download-cite').attr('href',filename);}});modal.modal('show');});$('.js-copy-cite').click(function(e){e.preventDefault();let range=document.createRange();let code_node=document.querySelector('#modal .modal-body');range.selectNode(code_node);window.getSelection().addRange(range);try{document.execCommand('copy');}catch(e){console.log('Error: citation copy failed.');}
window.getSelection().removeRange(range);});initMap();});})(jQuery);