import { useNavigate } from 'react-router-dom';

export default function ElementoClases({ nombreClase }) {

    const navigate = useNavigate();
 
    const irAEvaluacion = () => {
      navigate('/añadirEvaluaciones');
    };


    return (
        <div>
            <span className="m-2 mx-2 mt-3 text-lg font-semibold bg-slate-100 w-full text-slate-700 px-2 py-2 block hover:text-slate-800 hover:bg-slate-200">{nombreClase}</span>
            <p>
                <p class="text-gray-700 ml-6">Resumen de la clase, en esta clase se vieron los contenidos relacionados al ramo, enfatizamos sobre los aspactos más importantes. </p>
                <p class="mt-2 text-sm text-gray-600">
                    <div>
                    <button onClick={irAEvaluacion}
                    class=" ml-6 bg-orange-400 hover:bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Evaluacion</span>
                    </button>
                    </div>

                    <div>
                    <button onClick={irAEvaluacion}
                    class=" mt-3 ml-6 bg-orange-400 hover:bg-orange-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Precentacion</span>
                    </button>
                    </div>

                    
                </p>

                
            </p>


        {/*

            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossorigin="anonymous"
            />
            

            <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        
    */}
         </div>



    );

}