function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
    var emailBody = localStorage.getItem('emailBody');
    var creditCard = document.getElementById('creditnumber');
    var expdate = document.getElementById('expire');
    var securitycode = document.getElementById('code');

	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jersey.daniel.berjamin@gmail.com",
    Password : "CAB5DAF4F5F845D1430911F47D7AC99AB1D8",
    To : email,
    From : "jersey.daniel.berjamin@gmail.com",
    Subject : "Toy Reborn - Your order has been confirmed!",
    Body : "Order: " + emailBody
        + "<br> Credit Card Number:" + document.getElementById('creditnumber').value
        + "<br> Expiration Date:" + document.getElementById('expire').value
        + "<br> Secuirty Code:" + document.getElementById('code').value
        
    
}).then(
  message => {
  	if(message=='OK'){
  		swal("Succsess!", "Your order form was submitted, thank you for ordering!", "success");
  	}
  	else{
  		swal("Error!", "Your order form was not submitted. PLease try again.", "error");
  	}
  }
);
}


