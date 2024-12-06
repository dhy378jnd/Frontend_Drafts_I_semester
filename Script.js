document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.addEventListener('click', () => {
            paragraph.style.backgroundColor = paragraph.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showLectures');
    const lecturesTable = document.getElementById('lecturesTable');
    if (button && lecturesTable) {
        button.addEventListener('click', () => {
            lecturesTable.style.display = 'block';
            lecturesTable.style.opacity = '1';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const successMessage = document.createElement('p');
            successMessage.textContent = 'Форма отправлена!';
            successMessage.style.color = 'green';
            successMessage.style.fontWeight = 'bold';
            successMessage.style.transition = 'color 1s ease';

            form.appendChild(successMessage);

            setTimeout(() => {
                successMessage.style.color = 'blue';
            }, 500);

            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }
});
