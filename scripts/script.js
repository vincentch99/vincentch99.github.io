// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// Initialize and add the map
function initMap() {
    // The location of Berkeley 37.871666, -122.272781
    const berkeley = { lat: 37.871, lng: -122.272 };
    // The map, centered at Berkeley
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: berkeley,
    });
    // The marker, positioned at berkeley
    const marker = new google.maps.Marker({
      position: berkeley,
      map: map,
    });
  }
  
  window.initMap = initMap;