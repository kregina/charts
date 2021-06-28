const randActive = () => Math.floor(Math.random() * 100) + 1;

const randLog = () => Math.floor(Math.random() * 50) + 1;

export const dataLine = [110, 159, 123, 225, 122, 263, 259];

export const dataNoLog = [randLog(), randLog(), randLog(), randLog(), randLog(), randLog(), randLog()];

export const dataActive = [randActive(), randActive(), randActive(), randActive(), randActive(), randActive(), randActive()];

export const labels = ['2020/01', '2020/02', '2020/03', '2020/04', '2020/05', '2020/06', '2020/07'];

export const colorLine = '#47c5d3';
export const colorActive = '#1B324B';
export const colorNoLog = '#436EBC';
