const body = document.querySelector('body');
const dogSlider = document.querySelector('#dogSlider');
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVD7xMvtANS8VwfMMehumZQ1MbW0pZMLyog&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHNSCy23gLZMsvYfqpKIG0gboWymBthAfRQ&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6P7dL0g4T6DustG3tZLRU3sLO2_s7w4GpcdaB8YdlWtVAclWZWdYln__WM_wsQAMC3tA&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTNoNAG0GhbDRaxUthkgnYdkmsR2hwxrNYQ&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lvcDxoszjzs3xfuFcwZo_Jb_57ysaYwsbw&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxETDSEUevdCf-I0tTGBwbdoxAjE7uyUT-w&usqp=CAU"
]

// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

let counter = 0;

const handleLoadNextImg = () => {
    counter++;
    if (counter == images.length) {
        counter = 0;
    }
    console.log("licznik: " + counter);
    dogSlider.src = images[counter];
}

const handleLoadPrviewImg = () => {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    console.log("licznik: " + counter);
    dogSlider.src = images[counter];
}

const loadFirstImage = () => {
    dogSlider.src = images[0];
}

loadFirstImage();
btnNext.addEventListener('click', handleLoadNextImg);
btnPrev.addEventListener('click', handleLoadPrviewImg);