'use strict';
//tady jsou vanoce
const vanoce = dayjs('2024-12-24');
//tady je dnešek
const dnes = dayjs();

const odpoved = document.querySelector('#odpoved');

if (dnes.isAfter(vanoce)) {
  odpoved.textContent = 'ANO';
} else {
  odpoved.textContent = 'NE';
}
