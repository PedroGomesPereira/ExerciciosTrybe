function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();

function criarDias() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.getElementById('days');
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const days = dezDaysList[i];
        const dia = document.createElement('li');
        dia.innerHTML = days;
        dia.classList.add('day');
        if (i === 25 || i === 26 ||i === 32) {
            dia.classList.add('holiday');
        };
        if (i === 5 || i === 12 || i === 19 || i === 26) {
            dia.classList.add('friday');
        };

        ulDays.appendChild(dia);
    };
};
criarDias();

function feriados(feriados) {
    const Feriados = document.createElement('button');
    const pai = document.querySelector('.buttons-container');
    Feriados.setAttribute('id','btn-holiday');

    pai.appendChild(Feriados);
}
feriados();

function corHoliday(){
    const holidays = document.querySelectorAll('.holiday');
    console.log(holidays);
}
corHoliday();