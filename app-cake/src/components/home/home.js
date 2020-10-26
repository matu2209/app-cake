import React from 'react';
import stilo from './home.module.css'
//style={{maxWidth: +'540px'}}
export default function Home (){
    return(
        <body>

        <div id={stilo.body} >
            <div class='container' >
                <h5 class='text-center display-4' id={stilo.titleContent}>Bienvenidos a H y S Cake's,
                <h5 class='text-center display-4 my-4' id={stilo.titleContent2}> el lugar donde las ideas se vuelven realidad!</h5>
                </h5>
            </div>
        </div>
        {/* <div class="jumbotron jumbotron-fluid" id={style.contentFluid}>
            <div class="container">
                <h1 class="display-4">"Lo unico imposibe es aquello que no intentas!"</h1>
                <p class="lead"></p>
            </div>
        </div> */}
        <div class='container' >
                <h5 class='text-center display-4' id={stilo.titleContent}>Hay ocasiones donde,
                <h5 class='text-center display-4 my-4' id={stilo.titleContent2}> se merece un toque especial</h5>
                </h5>
        </div>
        <br></br>
        <div class='container-fluid'>
            <div class="card mb-2 border-0" style={{maxWidth: +'540px;', maxHeigth: + '250px;'}} >
                    <div class="row no-gutters">
                        <div class="row">
                        <div class="card-body">
                            <h1 class="card-title">Usando materias primas de la mejor calidad</h1>
                            <p class="card-text">Usamos productos con materia prima para garantizar el mejor </p>
                        </div>
                        <div class="col-md-4">
                            <img src="imagenes/img-hom2.jpg" class="card-img" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-2 border-0" style={{maxWidth: +'540px;', maxHeigth: + '250px;'}} >
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="imagenes/img-home.jpg" class="card-img" alt="..."/>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* </div> */}
        </body>
    )
}