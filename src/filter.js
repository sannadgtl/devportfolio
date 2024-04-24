const form = document.getElementById("form"); 
const countryRadios = form.elements.country; 
const images = document.querySelectorAll(".imageFilter"); 
const search = document.getElementById("search"); 

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
}); 

for (const countryRadio of countryRadios) {
    countryRadio.addEventListener("change", filterCountries); 
}

search.addEventListener("keyup", filterCountries); 

function shouldShowImg(img) {
    const selectedCountry = checkedRadio(); 
    const searchText = search.value; 

    if (selectedCountry !== "All" && selectedCountry !==img.getAttribute("country")) {
        return false; 
    };
    if (!search.value) {
        document.getElementById("helper-text").textContent = `Showing images that match the filter "${selectedCountry}"`; 
        return true; 
    };
    document.getElementById("helper-text").textContent = `Showing images that match the filter "${selectedCountry}" and the search "${searchText}"`;
    return img.alt.toLowerCase().includes(search.value.toLowerCase()); 
};

function checkedRadio() {
    for (const countryRadio of countryRadios) {
        if (countryRadio.checked) {
            return countryRadio.value; 
        }
    }
}

function filterCountries() {
    for (const img of images) {
        if (shouldShowImg(img)) {
            img.classList.remove("hidden"); 
        } else {
            img.classList.add("hidden"); 
        }
    }
}