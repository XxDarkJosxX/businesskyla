    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="#" class="logo">
                            <!-- <img src="Assets/images/logo.png" alt="Softy Pinko"/> -->
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li><a href="#welcome" class="active" data-target="welcome">Inicio</a></li>
                            <li><a href="#features" data-target="features">Nosotros</a></li>
                            <li><a href="#work-process" data-target="work-process">Clientes</a></li>
                            <li><a href="#testimonials" data-target="testimonials">Experiencia</a></li>
                            <li><a href="<?= base_url() ?>/Catalogo#welcome">Catalogo</a></li>
                            <li><a href="<?= base_url() ?>/Contactos#welcome">Contactos</a></li>

                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->

    <?php
    headerini($data);

    ?>