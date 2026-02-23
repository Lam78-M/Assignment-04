// ================= SELECTORS =================

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


// ================= VARIABLES =================

let interview = 0;
let rejected = 0;


// ================= ACTIVE TAB FUNCTION =================

function setActiveTab(button){
    for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].classList.remove('bg-blue-500', 'text-white');
        tabButtons[i].classList.add('bg-white', 'text-black', 'shadow-sm');
    }

    button.classList.remove('bg-white', 'text-black', 'shadow-sm');
    button.classList.add('bg-blue-500', 'text-white');
}


// ================= UPDATE COUNT =================

function updateCounts(){
    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;
}


// ================= UPDATE JOB COUNTER =================

function updateJobCounter(){
    let visible = 0;

    for(let i = 0; i < cards.length; i++){
        if(cards[i].style.display !== "none"){
            visible++;
        }
    }

    jobCountText.textContent = visible + " of " + totalJobs + " Jobs";
}


// ================= SHOW EMPTY =================

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


// ================= FILTER FUNCTION =================

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


// ================= INTERVIEW BUTTON =================

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


// ================= REJECT BUTTON =================

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


// ================= TAB EVENTS =================

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


// ================= INITIAL LOAD =================

setActiveTab(allTab);
filterTab("all");
updateCounts();
updateJobCounter();
showEmpty();