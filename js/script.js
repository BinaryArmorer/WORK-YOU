"use strict";
// Открытие и закрытие форм
function FormOpen(form_target) { //Функция для открытия всплывающих форм
    document.getElementById(form_target).showModal();
}
function FormClose(form_target) { //Функция для закрытия всплывающих форм
    document.getElementById(form_target).close();
}
function RegSucceful() { // функция для вывод сообщения об успешной регистрации, а также для удаления кнопки зарегистрироваться со страницы
    FormClose('form_registration');
    FormOpen('form_success_registration');
    document.getElementById("reg").parentNode.removeChild(document.getElementById("reg"));
    setTimeout(() => {
        FormClose('form_success_registration');
    }, 2000);
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
