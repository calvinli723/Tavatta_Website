function show(shown) {
	switch(shown){

		/**
		********Features********
		**/

    /*sidebar on the features page*/

		case 'mobile':
			document.getElementById('mobile').style.display='block';
  		document.getElementById('confreg').style.display='none';
  		document.getElementById('call').style.display='none';
  		document.getElementById('agenda').style.display='none';

      document.getElementById('feature1').className= 'active';
      document.getElementById('feature2').className= 'inactive';
      document.getElementById('feature3').className= 'inactive';
      document.getElementById('feature4').className= 'inactive';
			break;

  	case 'confreg':
  		document.getElementById('mobile').style.display='none';
			document.getElementById('confreg').style.display='block';
 			document.getElementById('call').style.display='none';
 			document.getElementById('agenda').style.display='none';

      document.getElementById('feature1').className= 'inactive';
      document.getElementById('feature2').className= 'active';
      document.getElementById('feature3').className= 'inactive';
      document.getElementById('feature4').className= 'inactive';
      break;

 		case 'call':
 			document.getElementById('mobile').style.display='none';
 			document.getElementById('confreg').style.display='none';
 			document.getElementById('call').style.display='block';
 			document.getElementById('agenda').style.display='none';

      document.getElementById('feature1').className= 'inactive';
      document.getElementById('feature2').className= 'inactive';
      document.getElementById('feature3').className= 'active';
      document.getElementById('feature4').className= 'inactive';
      break;

 		case 'agenda':
 			document.getElementById('mobile').style.display='none';
 			document.getElementById('confreg').style.display='none';
 			document.getElementById('call').style.display='none';
 			document.getElementById('agenda').style.display='block';

      document.getElementById('feature1').className= 'inactive';
      document.getElementById('feature2').className= 'inactive';
      document.getElementById('feature3').className= 'inactive';
      document.getElementById('feature4').className= 'active';
      break;

	}
  
  return false;
}

/*drop down menu from another page*/

$(function() {
    var id = window.location.href.split('#')[1];
    $('#' + id + '.switchgroup').show();

    
    switch(id){
      case 'mobile':
        document.getElementById('feature1').className= 'active';
        break;

      case 'confreg':
        document.getElementById('feature2').className= 'active';
        break;

      case 'call':
        document.getElementById('feature3').className= 'active';
        break;

      case 'agenda':
        document.getElementById('feature4').className= 'active';
        break;
    }
    

});

