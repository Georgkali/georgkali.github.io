function navButtonHighlight(n) {
  let navButton = document.getElementsByClassName("nav_button");
  navButton[n].style.color = "yellow";
  for(i = 0; i < navButton.length; i++) {
    if(i != n) {
    navButton[i].style.color = "white";
    }
  }
}



  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let points = document.getElementsByClassName("point");
    if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    points[slideIndex-1].className += " active";
  }


  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: 56.993766, lng: 24.187939 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}




function showCoachText(n) {
  let coachTxt = document.getElementsByClassName("coach_txt");
  let coachImg = document.getElementsByClassName("coach_img")
  coachTxt[n].style.display = "block";
  coachImg[n].style.opacity = "1";
  if(n === 0) {
    coachTxt[1].style.display = "none";
    coachImg[1].style.opacity = "0.5";
  } else if (n === 1) {
    coachTxt[0].style.display = "none"; 
    coachImg[0].style.opacity = "0.5";
  }
}
  
function showClassesText(n) {
  let txt = document.getElementsByClassName("classes_txt");
  
  txt[n].style.display = "block";
  if (n === 0) {
    txt[1].style.display = "none"; 
    txt[2].style.display = "none"; 
  } else if (n === 1) {
    txt[0].style.display = "none";
    txt[2].style.display = "none"; 
  } else if (n === 2) {
    txt[0].style.display = "none";
    txt[1].style.display = "none"; 
  }
  
  }
