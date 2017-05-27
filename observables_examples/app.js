var btnBlue = document.getElementById('blue');
var btnRed = document.getElementById('red');
var btnGreen = document.getElementById('green');
// button.addEventListener('click', event => console.log(event));

Rx.Observable.fromEvent(btnBlue, 'click')
  .throttleTime(300)
  .map(event => [event.clientX,event.clientY])
  .subscribe(event => console.log(event));

var observer = {
  next: (event) => console.log(event),
  error: (error) => console.log(error),
  complete: () => console.log('Completed!')
}

Rx.Observable.fromEvent(btnRed, 'click')
  .throttleTime(300)
  .map(event => [event.clientX, event.clientY])
  .subscribe(observer);

Rx.Observable.create(obs => {
    obs.next('First value');
    setTimeout(() => obs.complete(), 2000);
    //obs.error('Problem y\'all');
    obs.next('Second value');
  }).subscribe(observer);

var subscription = Rx.Observable.create(obs => btnGreen.onclick = event => obs.next(event))
  .map(event => [event.clientX, event.clientY])
  .subscribe(observer);

setTimeout(() => subscription.unsubscribe(), 10000);