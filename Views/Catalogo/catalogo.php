<?php
headerprincipal($data);
nav_content($data);
?>
<div class="welcome-area" id="welcome">

    <!-- ***** Header Text Start ***** -->
    <section class="creative-carousal--hero">
        <div class="carousel-slider swiper-container-horizontal">
            <div class="swiper-wrapper">
                <div class="swiper-slide" data-background="Assets/img/banerscuadrados (9)" style="background-image: url('Assets/img/banerslargos (12).png');">
                    <div class="inner">
                        <h2>DISCOVER</h2>
                        <a href="#">DISCOVER CASE</a>
                    </div>
                </div>
                <div class="swiper-slide" data-background="https://imgpanda.com/upload/ib/lcLiwDdGNI.jpg" style="background-image: url('Assets/img/banerslargos (18).png');">
                    <div class="inner">
                        <h2>EXCLUSION</h2>
                        <a href="#">DISCOVER CASE</a>
                    </div>
                </div>
                <div class="swiper-slide" data-background="https://imgpanda.com/upload/ib/b20k1l8dNs.jpg" style="background-image: url('Assets/img/banerslargos (23).png');">
                    <div class="inner">
                        <h2>EDITIONAL</h2>
                        <a href="#">DISCOVER CASE</a>
                    </div>
                </div>
                <div class="swiper-slide" data-background="https://imgpanda.com/upload/ib/b20k1l8dNs.jpg" style="background-image: url('Assets/img/banerslargos (25).png');">
                    <div class="inner">
                        <h2>AVAILABLE</h2>
                        <a href="#">DISCOVER CASE</a>
                    </div>
                </div>
                <div class="swiper-slide" data-background="https://imgpanda.com/upload/ib/b20k1l8dNs.jpg" style="background-image: url('Assets/img/banerslargos (26).png');">
                    <div class="inner">
                        <h2>PREMIUM</h2>
                        <a href="#">DISCOVER CASE</a>
                    </div>
                </div>
            </div>

            <div class="slide-progress">
                <span>01</span>
                <div class="swiper-pagination swiper-pagination-progressbar"><span class="swiper-pagination-progressbar-fill"></span></div>
                <span>05</span>
            </div>

            <div class="swiper-button-prev">PREV</div>

            <div class="swiper-button-next">NEXT</div>

        </div>
    </section>
</div>




<div class="container py-5 conteinerresp">
  <div class="row mb-4">
    <div class="col">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Reindeer in Focus</li>
        </ol>
      </nav>
      <h1>
        Reindeer in Focus
      </h1>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-group bg-white input-icon p-3 rounded shadow-sm mb-3">
        <i class="fa fa-magnifying-glass"></i>
        <input type="search" placeholder="Search by title or category" class="form-control mb-3" />
        <div class="categories" id="categories"></div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 gx-3" id="cards-container"></div>
</div>


<?php
// // getmodal('modalhome', $data);
footerprincipal($data);
?>