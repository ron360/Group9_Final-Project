document.addEventListener("DOMContentLoaded", function() {
            
    document.getElementById("algorithm").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("pros-and-cons").style.display = "none";

    document.getElementById("firstPart").addEventListener("click", function() {
        showSection("introduction");
    });

    document.getElementById("secondPart").addEventListener("click", function() {
        showSection("algorithm");
    });

    document.getElementById("thirdPart").addEventListener("click", function() {
        showSection("application");
    });

    document.getElementById("fourthPart").addEventListener("click", function() {
        showSection("pros-and-cons");
    });
        showSection("introduction");
});

function showSection(sectionId) {
    document.getElementById("introduction").style.display = "none";
    document.getElementById("algorithm").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("pros-and-cons").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}