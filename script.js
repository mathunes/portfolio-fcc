function deleteH1(phrase) {
    
    var h1 = document.querySelector('h1').innerHTML;
    
    var lenghtTitle = h1.length;

    var newh1 = '';

    var interval = setInterval(function() {

        for (var i = 0; i < h1.length-1; i++) {
            newh1 += h1[i];
        }

        document.querySelector('h1').innerHTML = newh1;
        
        newh1 = '';

        lenghtTitle--;

        if (lenghtTitle == 0) {
            clearInterval(interval);
            typeH1(phrase + 1);
        }

        h1 = document.querySelector('h1').innerHTML;

    }, 25);

}

function typeH1(phrase = 0) {

    var titles = ["Welcome to my portfolio...", "I'm Matheus", 'web developer.'];

    if (phrase >= titles.length) {
        phrase = 0;
    }

    var h1 = document.querySelector('h1');

    var j = 0;

    var title = titles[phrase];
    var lenghtTitle = title.length;

    var interval = setInterval(function() {

        h1.innerHTML += title[j];
        
        j++;

        if (j >= lenghtTitle) {
            clearInterval(interval);

            setTimeout(deleteH1.bind(null, phrase), 2000);

        }

    }, 50);
    
}

function insertionPointEffect() {
    setInterval(function() {
        var insertionPoint = document.getElementById('insertion-point');

        if (insertionPoint.style.backgroundColor == 'rgb(255, 255, 255)') {
            insertionPoint.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        } else {
            insertionPoint.style.backgroundColor = 'rgb(255, 255, 255)';
        }

    }, 500);
}

function main() {
    insertionPointEffect();
    typeH1();
}

main();