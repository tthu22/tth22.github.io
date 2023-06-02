<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>

  <nav class="navbar navbar-expand-xxl navbar-dark fixed-top" id="mainNav">
    <div class="container-fluid px-4 px-lg-5">
        <a class="navbar-brand nav-logo"  href="#page-top"><img id="nav-img" src="./components/assets/img/portfolio/thumbnails/logo.png"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse"  id="navbarResponsive">
            <ul class="navbar-nav mx-1">
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#about">Photography</a>                      
                </li>
               
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" id="SportOptics"  href="#services">Sport Optics</a></li>
                <div class="hidden-list w-100">
                  <ul class="mx-5 p-5 lst">
                    <li class="dropdownitem py-2"><a class="nav-link" href="#about">Over View</a> </li>
                    <li class="dropdownitem py-2"><a class="nav-link" href="#about">Experience Nature</a> </li>
                    <li class="dropdownitem py-2"><a class="nav-link" href="#about">Hunting</a> </li>
                    <li class="dropdownitem py-2"><a class="nav-link " href="#about">Lifestyle & Leisure</a> </li>
                  </ul>
                </div>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#portfolio">Cinema TV</a></li>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#contact">Akademie</a></li>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#contact">World of Leica</a></li>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#contact">Leica Galleries</a></li>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#contact">Stores</a></li>
                <li class="nav-item mx-1 nav-item__hover"><a class="nav-link" href="#contact">Service</a></li>
            </ul>
            <ul class="navbar-nav  mx-1 ms-auto">
                <li class="nav-item mx-1 my-2 "><a class="nav-link" href="#portfolio"><i class="bi bi-search icon-nav"></i></a></li>
                <li class="nav-item mx-1 my-2"><a class="nav-link" href="#services"><i class="bi bi-person icon-nav"></i></a> </li>
                <li class="nav-item mx-1 my-2"><a class="nav-link" href="#services"><i class="bi bi-geo-alt icon-nav"></i></a></li>
                <li class="nav-item mx-1"><a id="shopOnline" class="nav-link" href="#services"><button type="button" class="btn btn-outline-light btn-nav">Online Store <i class="bi bi-bag"></i></button></a></li>   
            </ul>
        </div>     
    </div>
</nav>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button"  data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button"  data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button"  data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="./components/assets/img/portfolio/fullsize/1.jpg" class="d-block w-100" alt="...">
        <div class="textinslide d-none d-md-block">
          <h1 class="h1 text-white">First slide label</h1>
          <p class="text-white">Some representative placeholder content for the first slide.</p>
          <button class="btn btn-light btn-slide">Read More</button>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="./components/assets/img/portfolio/fullsize/4.jpg" class="d-block w-100" alt="...">
        <div class="textinslide d-none d-md-block">
          <h1 class="h1 text-white">Second slide label</h1>
          <p class="text-white">Some representative placeholder content for the second slide.</p>
          <button class="btn btn-light btn-slide">Read More</button>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./components/assets/img/portfolio/fullsize/3.jpg" class="d-block w-100" alt="...">
        <div class="textinslide d-none d-md-block">
          <h1 class="h1 text-white">Third slide label</h1>
          <p class="text-white">Some representative placeholder content for the third slide.</p>
          <button class="btn btn-light btn-slide">Read More</button>
        </div>
      </div>
    </div>
   
  </div>
<!-- card -->

 <section class="py-5">
  <div class="container px-5 my-5">    
      <div class="row gx-5 ">
          <div class="col-lg-8">
          <div class=" mb-5 mt-5 pt-5 ">
              <div class="card h-100 shadow border-0 card-hover">
                  <img class="card-img-top" src="./components/assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                  <div class="card-body p-4">
                      <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                      <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Blog post title</h5></a>
                      <p class="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                      <div class="d-flex align-items-end justify-content-between">
                         
                      </div>
                  </div>
              </div>
          </div>
      </div>
          <div class="col-lg-4 mb-5">
              <div class="card h-50 shadow border-0 card-hover " id="card2">
                  <img class="card-img-top" src="./components/assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                  <div class="card-body p-4">
                      <div class="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                      <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Another blog post title</h5></a>
                      <p class="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                 
              </div>
              <div class="card h-50 shadow border-0 mt-5 card-hover">
                  <img class="card-img-top" src="./components/assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                  <div class="card-body p-4">
                      <div class="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                      <a class="text-decoration-none link-dark stretched-link" href="#!"><h5 class="card-title mb-3">Another blog post title</h5></a>
                      <p class="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  
              </div>
          </div>
          
      </div>
      
      
  </div>
</section>
<section class="page-section m-5" id="services">
<div class="container px-4 px-lg-5 m-5">
   
    <hr class="divider" />
    <div class="row gx-4 gx-lg-5">
        <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
                <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Sturdy Themes</h3>
                <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
                <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Up to Date</h3>
                <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
                <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Ready to Publish</h3>
                <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
                <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
            </div>
        </div>
    </div>
</div>
</section>
  
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
