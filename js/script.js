"use strict";
// Открытие и закрытие форм
function FormOpen(form_target) { //Функция для открытия всплывающих форм
    try {
        document.getElementById(form_target).showModal();
    } catch (error) {
        console.error("Ошибка при открытии формы:", error);
    }
}

function FormClose(form_target) { //Функция для закрытия всплывающих форм
    try {
        document.getElementById(form_target).close();
    } catch (error) {
        console.error("Ошибка при закрытии формы:", error);
    }
}

function RegSucceful() { // функция для вывод сообщения об успешной регистрации, а также для удаления кнопки зарегистрироваться со страницы
    try {
        FormClose('form_registration');
        FormOpen('form_success_registration');
        document.getElementById("reg").parentNode.removeChild(document.getElementById("reg"));
        setTimeout(() => {
            FormClose('form_success_registration');
        }, 2000);
    } catch (error) {
        console.error("Ошибка при обработке успешной регистрации:", error);
    }
}

// Уведомление об отправленной зайявке на собеседовании и принятии заявки
document.getElementById('form_window_applicants').addEventListener('submit', function(event) {
    event.preventDefault();

    try {
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
    } catch (error) {
        console.error("Ошибка при отправке заявки на собеседование:", error);
    }
});