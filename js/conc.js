$(".member li").hover (function (){	

	var lista = ["images/gregoriorobles.jpg","images/jesusmoreno.jpg","images/evacastro.jpg","images/pedrodelasheras.jpg","images/joseignacio.jpg","images/josecenteno.png","images/jesusgonzalez.jpg","images/evahu.jpg","images/mariluz.jpg"];

	var index = $(this).parent().children().index(this);
	var string = lista[index];
	console.log(index);
	var element = document.getElementById("memimg");
	element.innerHTML = '<img class="featurette-image img-circle img-responsive pull-right" height="350" width="350"src='+ string + '></img>';
});
