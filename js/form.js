$('form button[type="submit"]').click(sendForm);

function sendForm(event) {
		event.preventDefault();
	$.ajax({
	    url: "https://formspree.io/svatoslav2104@gmail.com", 
	    method: "POST",
	    data: {
	    	name: $('#client-name').val(),
	    	email: $('#client-email').val(),
	    	msg: $('#text-msg').val()
	    },
	    dataType: "json"
	})
	.done(function(){
		$('.form-inp').html('<h2>Thank you!</h2>');
	});
}