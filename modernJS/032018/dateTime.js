let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');



val = birthday;
val = today.getFullYear();
val = today.getMinutes();
val = today.getMilliseconds();
val = today.getTime();

today.setMonth(7);


console.log(today);

