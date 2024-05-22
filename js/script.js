"use strict";
// Открытие и закрытие форм
function FormOpen(form_target) {
    document.getElementById(form_target).showModal();
}
function FormClose(form_target) {
    document.getElementById(form_target).close();
}

// Уведомление об отправленной зайявке на собеседовании и принятии заявки
document.getElementById('form_window_applicants').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const message = `Заявка от ${formData.get('first-name')} ${formData.get('last-name')} на собеседование принята.`;
    
    FormClose('form_applicants');
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