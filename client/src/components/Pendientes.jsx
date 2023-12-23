export default function Pendientes() {
    return (
        <div>
            <link rel="stylesheet" href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
            <div className="flex flex-col justify-center items-center">
                <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined" style={{marginTop: '30px'}}>
                <div className="relative flex flex-row justify-between">
                    <div className="flex items-center">
                    <div className="flex  items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
                        <span className="material-symbols-rounded h-6 w-6 text-brand-500 dark:text-white">
                        check_circle
                        </span>  
                    </div>
                    <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
                        Pendientes
                    </h4>
                    </div>
                    <button className="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>
                    </button>
                </div>
                <div className="h-full w-full">
                    <div className="mt-5 flex items-center justify-between p-2">
                    <div className="flex items-center justify-center gap-2">
                        <input type="checkbox" className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400" name="weekly" />
                        <p className="text-base font-bold text-navy-700 dark:text-white">
                        Avance proyecto de Web
                        </p>
                    </div>
                    <span className="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                        drag_indicator
                    </span>  
                    </div>
                    <div className="mt-2 flex items-center justify-between p-2">
                    <div className="flex items-center justify-center gap-2">
                        <input type="checkbox" className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400" name="weekly" defaultChecked />
                        <p className="text-base font-bold text-navy-700 dark:text-white">
                        Prueba IA
                        </p>
                    </div>
                    <span className="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                        drag_indicator
                    </span>  
                    </div>
                    <div className="mt-2 flex items-center justify-between p-2">
                    <div className="flex items-center justify-center gap-2">
                        <input type="checkbox" className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400" name="weekly" defaultChecked />
                        <p className="text-base font-bold text-navy-700 dark:text-white">
                        Entrega informe
                        </p>
                    </div>
                    <span className="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                        drag_indicator
                    </span>  
                    </div>
                </div>
                </div>
                <p className="font-normal text-navy-700 mt-20 mx-auto w-max"></p>
            </div>
            </div>
        );
    }
