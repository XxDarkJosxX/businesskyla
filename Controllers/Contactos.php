<?php 
    class Contactos extends Controllers{
        public function __construct() {
            parent::__construct();
        }
        public function Contactos(){

            $data['page_tag'] = "Contactos";
            $data['page_title']= "";
            $data['page_name'] = "Contactos";
            $data['page_js'] = "functioncontactos.js";
            $data['page_css'] = "stylecontactos.css";
            $this->views->getview($this,"contactos",$data);
        }


    }
?>