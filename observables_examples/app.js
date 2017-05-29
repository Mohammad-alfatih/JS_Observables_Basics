var btnBlue = document.getElementById('blue');
var btnRed = document.getElementById('red');
var btnGreen = document.getElementById('green');
var results = document.getElementById('results');//.innerHTML = 'Please click on a button to map your click coordinates';
// button.addEventListener('click', event => console.log(event));
var observer = {
  next: (event) => results.innerHTML = 'You have clicked on the following coordinates: <strong>' + event + '</strong>',
  error: (error) => console.log(error),
  complete: () => console.log('Completed!')
}

Rx.Observable.fromEvent(btnBlue, 'click')
  .throttleTime(300)
  .map(event => [event.clientX, event.clientY])
  .subscribe(observer);

Rx.Observable.fromEvent(btnRed, 'click')
  .throttleTime(300)
  .map(event => [event.clientX, event.clientY])
  .subscribe(observer);

var subscription = Rx.Observable.create(obs => btnGreen.onclick = event => obs.next(event))
  .map(event => [event.clientX, event.clientY])
  .subscribe(observer);

setTimeout(() => subscription.unsubscribe(), 10000);

// Example of the create method from Rxjs.
Rx.Observable.create(obs => {
    obs.next('First value');
    setTimeout(() => obs.complete(), 2000);
    //obs.error('Problem y\'all');
    obs.next('Second value');
  }).subscribe(observer);

var observable = Rx.Observable.interval(2000);
var newObserver = { next: (event) => console.log(event) }

var newSubscription = observable.map((value) => value + ' x 12 = ' + value * 12).throttleTime(4000).subscribe(newObserver);

setTimeout(() => newSubscription.unsubscribe(), 28000);