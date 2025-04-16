<?php
headerprincipal($data);
nav_content($data);
?>





<div class="container py-5 conteinerresp" style="margin-bottom: 20px;" id="Catalogo">
  <div class="row mb-4">
    <div class="col">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Inicio</a></li>
          <li class="breadcrumb-item"><a href="#">Catalogo </a></li>
          <li class="breadcrumb-item active" aria-current="page">Productos</li>
        </ol>
      </nav>
      <h1 style="font-size: 35px;">
        Nuestros productos
      </h1>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
      <div class="form-group bg-white input-icon p-3 rounded shadow-sm mb-3">
        <i class="fa fa-magnifying-glass"></i>
        <input type="search" placeholder="Busca por el nombre o categoría" class="form-control mb-3" />
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