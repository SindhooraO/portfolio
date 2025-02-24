document.addEventListener("DOMContentLoaded", function () {
    let greetingText = "";
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingText = "Good Morning!☀️";
    } else if (hour > 12 && hour < 18) {
        greetingText = "Good Afternoon!🌤️";
    } else {
        greetingText = "Good Evening!🌙";
    }

    document.getElementById("greeting").innerText = greetingText;
});
function filterProjects(category) {
    let projects = document.querySelectorAll(".card");

    projects.forEach((project) => {
        if (category === "all") {
            project.style.display = "block";
        } else {
            project.style.display = project.classList.contains(category) ? "block" : "none";
        }
    });
}
