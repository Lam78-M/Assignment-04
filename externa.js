                      // all sector were called here ---------------------------

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCountText = document.getElementById("jobCount");

const emptyState = document.getElementById("emptyState");

const cards = document.getElementsByClassName("jobCard");
const tabButtons = document.getElementsByClassName("tabBtn");

const totalJobs = cards.length;


                 // variables using -------------------------

let interview = 0;
let rejected = 0;


                //   active tab section

function setActiveTab(button){
    for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].classList.remove('bg-blue-500', 'text-white');
        tabButtons[i].classList.add('bg-white', 'text-black', 'shadow-sm');
    }

    button.classList.remove('bg-white', 'text-black', 'shadow-sm');
    button.classList.add('bg-blue-500', 'text-white');
}


                        // update counting

function updateCounts(){
    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}


                            // update job counter -----------------------

function updateJobCounter(){
    let visible = 0;

    for(let i = 0; i < cards.length; i++){
        if(cards[i].style.display !== "none"){
            visible++;
        }
    }

    jobCountText.textContent = visible + " of " + totalJobs + " Jobs";
}


                       //  empty file creating ------------------------------

function showEmpty(){
    let visible = 0;

    for(let i = 0; i < cards.length; i++){
        if(cards[i].style.display !== "none"){
            visible++;
        }
    }

    if(visible === 0){
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}


                             //filter function creating---------------------------

function filterTab(type){

    for(let i = 0; i < cards.length; i++){

        let status = cards[i].getAttribute("data-status");

        if(type === "all"){
            cards[i].style.display = "block";
        }
        else if(type === "interview"){
            cards[i].style.display = (status === "interview") ? "block" : "none";
        }
        else if(type === "rejected"){
            cards[i].style.display = (status === "rejected") ? "block" : "none";
        }
    }

    updateJobCounter();
    showEmpty();
}


                                       //    interview buttons ----------------

let interviewBtns = document.getElementsByClassName("interviewBtn");

for(let i = 0; i < interviewBtns.length; i++){

    interviewBtns[i].addEventListener("click", function(){

        let card = this.closest(".jobCard");
        let statusBtn = card.querySelector(".statusBtn");
        let currentStatus = card.getAttribute("data-status");

        if(currentStatus !== "interview"){

            card.setAttribute("data-status", "interview");

            statusBtn.textContent = "INTERVIEW";
            statusBtn.classList.remove('bg-red-100');
            statusBtn.classList.add('bg-green-100');

            interview++;

            if(currentStatus === "rejected"){
                rejected--;
            }
        }

        updateCounts();
        setActiveTab(interviewTab);
        filterTab("interview");
    });
}


                                                // reject button using ------------------

let rejectedBtns = document.getElementsByClassName("rejectedBtn");

for(let i = 0; i < rejectedBtns.length; i++){

    rejectedBtns[i].addEventListener("click", function(){

        let card = this.closest(".jobCard");
        let statusBtn = card.querySelector(".statusBtn");
        let currentStatus = card.getAttribute("data-status");

        if(currentStatus !== "rejected"){

            card.setAttribute("data-status", "rejected");

            statusBtn.textContent = "REJECTED";
            statusBtn.classList.remove('bg-green-100');
            statusBtn.classList.add('bg-red-100');

            rejected++;

            if(currentStatus === "interview"){
                interview--;
            }
        }

        updateCounts();
        setActiveTab(rejectedTab);
        filterTab("rejected");
    });
}
                      // delete button  ----------------------

let deleteBtns = document.getElementsByClassName("deleteBtn");

for(let i = 0; i < deleteBtns.length; i++){

    deleteBtns[i].addEventListener("click", function(){

        let card = this.closest(".jobCard");
        let currentStatus = card.getAttribute("data-status");

                                                      //count adjusting processs -----------------------------
        if(currentStatus === "interview"){
            interview--;
        }
        else if(currentStatus === "rejected"){
            rejected--;
        }


        card.remove();

        updateCounts();
        updateJobCounter();
        showEmpty();
    });
}



                   //tab events---------------------

allTab.addEventListener("click", function(){
    setActiveTab(this);
    filterTab("all");
});

interviewTab.addEventListener("click", function(){
    setActiveTab(this);
    filterTab("interview");
});

rejectedTab.addEventListener("click", function(){
    setActiveTab(this);
    filterTab("rejected");
});


           // Initial Loading--------------------------

setActiveTab(allTab);
filterTab("all");
updateCounts();
updateJobCounter();
showEmpty();