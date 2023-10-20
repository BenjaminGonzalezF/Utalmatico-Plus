
export default function BotonUnidad({nombreUnidad}){

    const propiedadesBtn = "A"
    return(
        <button className = "m-2 mx-2   mt-3 text-lg font-semibold bg-slate-300 w-full text-slate-700 rounded-t px-6 py-3 block shadow-xl hover:text-black hover:bg-slate-100 "  >{nombreUnidad}</button>
    );

}