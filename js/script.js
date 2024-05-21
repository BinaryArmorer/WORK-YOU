"use strict";
// Уведомление об отправленной зайявке на собеседовании и принятии заявки
document.getElementById('form_window_employers').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const message = `Заявка от ${formData.get('first-name')} ${formData.get('last-name')} на собеседование принята.`;
    
    document.location='#';
    document.getElementById('overlay').style.display = 'block';

    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none';
        alert("Ваша заявка отправлена на рассмотрение!");
    }, 1000);

    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none';
        alert(message);
    }, 5000);
});