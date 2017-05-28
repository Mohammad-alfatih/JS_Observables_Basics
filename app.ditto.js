var btnBlu = document.getElementById('blue');
var btnRed = document.getElementById('red');
var btnGrn = document.getElementById('green');

// Tie an observable to each button's click event:

Rx.Observable.fromEvent(btnBlu, 'click').throttleTime(300)
    .map(event => [event.clientX, event.clientY])
    .subscribe(event => console.log(event));