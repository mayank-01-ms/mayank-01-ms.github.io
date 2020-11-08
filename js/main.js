let darkMode = localStorage.getItem("darkMode");
if (darkMode === null){
    darkMode = "light";
}

const body = document.querySelector("body");
const metaTheme = document.querySelector("meta[name = 'theme-color']");
body.setAttribute("data-theme", darkMode);

if (darkMode == "dark") {
    metaTheme.setAttribute("content", "#1a1a1a");
} else {
    metaTheme.setAttribute("content", "#fff");
}

//Dark mode toast message
const dm = document.getElementById("dm");
const toast = document.querySelector(".toast-box");
const toastMsg = document.getElementById("dm-status");

const showToast = () => {
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

darkMode = localStorage.getItem("darkMode");

//IF DARK THEME IS ALREADY SET
if (darkMode === "dark") {
    dm.classList.replace("fa-moon-o", "fa-sun-o");
    document.body.setAttribute("data-theme", darkMode);
}

dm.addEventListener("click", () => {
    if (dm.classList.contains("fa-moon-o")) {            
        localStorage.setItem("darkMode", "dark");
        document.body.setAttribute("data-theme", "dark");
        metaTheme.setAttribute("content", "#1a1a1a");
        dm.classList.replace("fa-moon-o", "fa-sun-o");
        toastMsg.innerHTML = "enabled";
        showToast();
    } else {
        localStorage.setItem("darkMode", "light");
        document.body.setAttribute("data-theme", "light");
        metaTheme.setAttribute("content", "#fff");
        dm.classList.replace("fa-sun-o", "fa-moon-o");
        toastMsg.innerHTML = "disabled";
        showToast();
    }
});

//Dynamic date in footer
const date = new Date();
const footerYear = document.getElementById("current-year");
footerYear.innerHTML = date.getFullYear();

//Toggling nav bar on small displays
const toggleBtn = document.getElementById("nav-toggle");
const navWrapper = document.querySelector(".nav-wrapper");
toggleBtn.addEventListener("click", () => {
    if (toggleBtn.checked){
        navWrapper.classList.add("active");
    } else {
        navWrapper.classList.remove("active");
    }
});

//Navigation bar
const navLinks = document.querySelectorAll(".nav-item");
navLinks.forEach(element => {
    element.addEventListener("click", () => {
        Array.from(element.parentNode.children).forEach(sibling => {
            sibling.classList.remove("active");
        });
        element.classList.add("active");
    })
})

let projectData = {
    first: {
        title: "Tech Forum",
        desc: `My first project built from scratch - A user based forum / a discussion site for tech geeks. <br>
                Responsive <br>
                Has both light and dark theme <br>
                Users can post articles in different categories <br>
                Comments feature for and view counter for posts <br>
                Notification system to keep users updated <br>
                Users Profile Page <br>
                Secure login <br>
                SEO friendly URLs <br>
                Admin panel to manage users and posts.`,
        techUsed: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "AJAX", "MySQL"],
        url: "https://techatatglance.tk"        
    },
    second: {
        title: "Social Media",
        desc: `This one being mine favourite project, 
                a instagram like social media web application built from scratch with custom features. 
                <br> Responsive<br>
                Sleek, modern and minimal UI.<br>
                `,
        features: ``,
        techUsed: ["HTML5", "CSS3", "JavaScript", "PHP", "AJAX", "MySQL"],
        url: ""        
    },
    third: {
        title: "Portfolio Website",
        desc: "My Portfolio website built from scratch, purely coded by me.",
        features: `Responsive
                   Supports dark theme
                   Minimal UI
                    `,
                    techUsed: ["HTML5", "CSS3", "JavaScript"],
        url: "https://techatatglance.tk/pf"        
    },

}

const container = document.querySelector(".container");
const viewMoreButton = document.querySelectorAll("#projects .project-details button");
const projectModals = document.querySelector(".modals .project-modals");

//Modals
let closeModal = () => {
    projectModals.style.display = "none";
    container.classList.remove("blur-bg");
}


viewMoreButton.forEach(element => {
    element.addEventListener("click", () => {
        let key = element.parentNode.getAttribute("data-id");
        
        let title = projectData[key].title;
        let desc = projectData[key].desc;
        let url = projectData[key].url;
        let tech = projectData[key].techUsed;

        let disabled = "";
        if (url.trim() == ""){
            disabled = "disabled";
            url = "javascript: void(0)";
        }

        let techString = ``;
        for (let i = 0; i < tech.length; i++){
            techString += `<li>${tech[i]}</li>`
        }

        let modalPopup = `
        <div class="modal-box">
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button>+</button>
            </div>
            <div class="modal-body">
                <p class="p-desc-title">Project Description:</p>
                <p>${desc}</p>
                <p class="p-desc-title tu-title">Technology used</p>
                <ul class="tech-used">
                    ${techString}
                </ul>
            </div>
            <div class="modal-footer">
                <div class="view-project ${disabled}">
                    <a href="${url}">View Project</a>
                </div>
                <button class="close">Close</button>
            </div>
        </div>
        `;

        projectModals.innerHTML = modalPopup;
        container.classList.add("blur-bg");
        projectModals.style.display = "block";
        
        const closeOption = document.querySelectorAll(".modals .modal-header button");
        const closeButton = document.querySelectorAll(".modals .modal-footer button");
        closeOption.forEach(element => {
            element.addEventListener("click", closeModal);
        });
        closeButton.forEach(element => {
            element.addEventListener("click", closeModal);
        });
    });
});
