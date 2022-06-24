const btns = document.querySelectorAll(".btn");
const blibliBuah = document.querySelectorAll(".blibli-buah");

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        blibliBuah.forEach((buah)=>{
            if (filter == "all") {
                buah.style.display = "block"
            } else {
                if (buah.classList.contains(filter)){
                    buah.style.display = "block"
                } else {
                    buah.style.display = "none"
                }
            }
        })
    })
}

