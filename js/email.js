emailjs.init('wrk5KRcO-k0r27GJt');
const btn = document.getElementById('button');
document.getElementById('form')
.addEventListener('submit', function(event) {
   event.preventDefault();
   
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
       document.location.href="success.html";
    }, (err) => {
      btn.value = 'Send Email';
      document.location.href="failure.html";
    });
});
