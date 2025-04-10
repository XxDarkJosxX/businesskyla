<?php 
    class Catalogo extends Controllers{
        public function __construct() {
            parent::__construct();
        }
        public function Catalogo(){

            $data['page_tag'] = "Catalogo";
            $data['page_title']= "";
            $data['page_name'] = "Catalogo";
            $data['page_js'] = "functioncatalogo.js";
            $data['page_css'] = "stylecatalogo.css";
            $this->views->getview($this,"catalogo",$data);
        }


    }
?>