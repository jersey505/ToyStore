function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name: " + userName +
	"<br/> Phone: " + phone +
	"<br/> Email: " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jersey.daniel.berjamin@gmail.com",
    Password : "CAB5DAF4F5F845D1430911F47D7AC99AB1D8",
    To : 'boypabblo21@gmail.com',
    From : "jersey.daniel.berjamin@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}