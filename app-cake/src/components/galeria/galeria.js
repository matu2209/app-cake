import React from 'react';
import style from './galeria.module.css'

export default function Galeria () {
    var img = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
      <body>
        <p class='text-center display-4' id={style.titleContent}>Una idea diferente para cada ocasion.
            {/* <span class='text-center display-4 my-4' id={style.titleContent2}> dependiendo de los requerimientos</span> */}
        </p>
        <h1 class='text-center display-4 my-5' id={style.title}>Nuestras Tortas!</h1> 
        <div class='container'>
        <div class="row row-cols-md-4">
         
        {/* <div class='card-columns'> */}
                {
                    img && img.map ((item) =>
                    <div class='col mb-2'>
                    <div class='card'>
                            <a href='#' data-toggle='modal' data-target={`#id${item}`}>
                                <img src={`imagenes/${item}.jpg`} alt="" class='card-img-top'/>
                            </a>
                            <div class='card-body'>
                            <h5>Torta!</h5>
                            <p class='card-text'>Rellena de mucho dulce de leche!!</p>

                            </div>
                            <div class="modal fade" id={`id${item}`} tabindex="-1" aria-labelledby="exampleModalLabel" role='dialog' aria-hidden="true">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div class="modal-dialog modal-lg modal-dialog-centered" >
                                    <img src={`imagenes/${item}.jpg`} alt='' class='img-fluid rounded'/>
                                </div>
                            </div>
                        </div>                
                      </div>
                    )        
                }
        </div>
        </div>
      </body>
    )
}
