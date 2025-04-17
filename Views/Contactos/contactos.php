<?php
headerprincipal($data);
nav_content($data);

?>



<div class="contactContainer" id="contactoss">
    <div class="innerwrap">

        <section class="section1 clearfix">

        </section>

        <section class="section2 clearfix">
            <div class="col2 column1 first">

                <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
                <div class="sec2map" style='overflow:hidden;height:550px;width:100%; border-radius: 40px; box-shadow: 10px 20px 5px #9595952e;'>
                    <div id='gmap_canvas' style='height:100%;width:100%;'>


                      
                        <iframe class="rounded w-500 mapastyle" style='height:100%;width:100%;' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.888334911087!2d-63.20011349274395!3d-17.757642704988154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e70cca02d2c7%3A0x51870ea50241886c!2sManzana%2040%20Plaza%20Empresarial!5e0!3m2!1ses!2sbo!4v1744859161599!5m2!1ses!2sbo" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <style>
                        #gmap_canvas img {
                            max-width: none !important;
                            background: none !important
                        }
                    </style>
                </div>

            </div>
            <div class="col2 column2 last">
    
                <div class="sec2contactform">

                    <div class="form-container">

                        <form id="feedbackForm">
                            <h1>Contáctanos</h1>

                            <div class="section sectionpdg">
                                <h2 class="section-title">¿Tienes una idea, un proyecto o simplemente querés saber más sobre lo que hacemos?</h2>
                                <div class="input-group">
                                    <label for="name">Estamos listos para ayudarte. Escribinos por correo, WhatsApp o redes sociales y te responderemos lo antes posible.</label>
                                  
                                </div>

                                <a class="float-buttonform colorbuttonemail" target="_blank" href="mailto:belen.torrico@kyla.com.bo?subject=Consulta&body=Hola,%20quiero%20más%20información." >
                                    <i class="fas fa-envelope" aria-hidden="true"></i>
                                    <span> Envíanos un mensaje por Gmail<span>
                                </a>

                                <a class="float-buttonform colorbuttonwap" target="_blank" href="https://api.whatsapp.com/send?phone=79669569&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    <span>Envíanos un mensaje por WhatsApp<span>
                                </a>

                        </form>


                    </div>
                </div>

            </div>
        </section>

    </div>
</div>



<?php
// // getmodal('modalhome', $data);
footerprincipal($data);
?>