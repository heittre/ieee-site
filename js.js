var dropdownlist = document.getElementById("dropdown-list");
var isVisible = false;

document.getElementById("dropdown-button").addEventListener("click", () => {
    if (isVisible) {
        dropdownlist.style.display = "none";
        isVisible = false;
    } else {
        dropdownlist.style.display = "block";
        isVisible = true;
    }
});