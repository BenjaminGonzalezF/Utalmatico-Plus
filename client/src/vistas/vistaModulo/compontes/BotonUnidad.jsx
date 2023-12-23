
export default function BotonUnidad({nombreUnidad}){

    const propiedadesBtn = "A"
    return(
        <button className = "m-2 mx-2   mt-3 text-lg font-semibold bg-white w-full text-slate-700 rounded-t px-6 py-3 block shadow-xl hover:text-black hover:bg-fondo "  >{nombreUnidad}</button>
    );

}