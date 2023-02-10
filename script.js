const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const checkpoints = document.querySelectorAll(".checkpoint")

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    
    if(currentActive > checkpoints.length){
        currentActive = checkpoints.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < checkpoints.length){
        currentActive = checkpoints.length;
    }

    update();
});

function update() {
    checkpoints.forEach((checkpoint, idx) => {
        if(idx < currentActive){
            checkpoint.classList.add("active");
        }else{
            checkpoint.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (checkpoints.length - 1) * 100 + '%';

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === 4){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}