

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.padding = "0rem";
    document.getElementById('nav-img').style.height="30px"
    document.getElementById('nav-img').style.width='30px';
    document.getElementById('shopOnline').style.display="none";
    
    
  } else {
    document.getElementById("mainNav").style.padding = "0.5rem";
    document.getElementById('nav-img').style.height="70px"
    document.getElementById('nav-img').style.width='70px';
    document.getElementById('shopOnline').style.display="block";
  }
}

