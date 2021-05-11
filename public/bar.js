let photoshop = document.getElementById("pollution");
let progressBars = document.getElementsByClassName("progress");

function bar(){
    document.querySelectorAll('.dropdown__list-item').forEach(function (listItem){
        listItem.addEventListener('click', function (e) {
            let figurs = document.querySelector('.dropdown__input-hidden').value = this.dataset.value
            //console.log(document.querySelector('.dropdown__input-hidden').value = this.dataset.value);
            function setRandomPercantage(bars) {
                for (let i = 0; i < bars.length; i++) {
                    let randomPercent = figurs/12*100 + '%';
                    bars[i].getElementsByTagName('span')[0].innerHTML = randomPercent;
                    bars[i].style.width = randomPercent;
                }
            }
            setRandomPercantage(progressBars);
        })
    })
}

console.log(bar());

