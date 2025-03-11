
import { useNavigate, Link } from "react-router-dom";

export const PrePageAsistencias = () => {
    const navigate = useNavigate();

    return (
        <div className="my-64 text-white text-center font-semibold text-xl">
            <div className="flex items-center justify-around mb-10 lg:w-3/4 mx-auto">
                <h1 className="text-2xl font-semibold text-black">Asistencias</h1>
                <button
                    onClick={() => navigate("/admin")}
                    className="bg-green-600 hover:bg-green-800 text-white py-2 px-6 rounded-lg font-bold transition duration-200"
                >
                    Volver
                </button>
            </div>
            <div className=" flex flex-wrap items-center justify-center gap-4">
                <Link className="bg-green-800 px-4 py-8 rounded-lg" to="/asistencias">Asistencias <p>acumuladas</p></Link>
                <Link className="bg-green-800 px-4 py-8 rounded-lg" to="/asistenciasNoAcumuladas">Asistencias <p>individuales</p></Link>
            </div>
        </div>
    )
}

