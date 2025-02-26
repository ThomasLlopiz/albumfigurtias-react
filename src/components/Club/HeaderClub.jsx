import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export const HeaderClub = () => {
    const [typedText, setTypedText] = useState("");
    const text = "SOCIEDAD SPORTIVA DEVOTO";
    const iRef = useRef(0); // Usamos useRef para mantener el índice actual

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (iRef.current < text.length) {
                setTypedText((prev) => {
                    const nextChar = text.charAt(iRef.current);
                    iRef.current++; // Incrementamos el índice
                    return prev + nextChar; // Concatenamos el siguiente carácter
                });
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId); // Limpiamos el intervalo al desmontar
    }, [text]);

    return (
        <header>
            <div className="absolute w-full mx-auto top-32 lg:top-52 flex flex-col items-center justify-center text-white text-center z-50">
                {/* <h1 id="typewriter" className="text-4xl md:text-7xl font-bold relative">
                    <span>{typedText}</span>
                    <span id="caret" className="animate-blink">
                        SOCIEDAD SPORTIVA DEVOTO
                    </span>
                </h1> */}
                <h1 className="text-7xl font-semibold ">SOCIEDAD SPORTIVA DEVOTO</h1>
                <p className="text-lg md:text-2xl mt-4">
                    Forma parte del Club más grande de la zona
                </p>

                <div className="flex space-x-4 mt-6">
                    <a
                        href="#"
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
                    >
                        ASOCIARME A SSD
                    </a>
                    <Link
                        to={{ pathname: "/tienda" }}
                        className="px-6 py-2 border-2 border-white text-white rounded-full text-md font-bold hover:bg-white hover:text-green-900 transition"
                    >
                        TIENDA VERDE
                    </Link>
                </div>
            </div>
            <img
                src="./imagenes/club/bandera.jpg"
                alt="Banner"
                className="w-full h-auto"
            />
            <div className="bg-white py-8">
                <div className="flex justify-center space-x-32">
                    <a
                        href="#"
                        className="flex flex-col items-center text-green-800 hover:text-green-600"
                    >
                        <i className="fas fa-user-plus text-3xl"></i>
                        <span className="mt-3 text-sm font-semibold">DATE DE ALTA</span>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center text-green-800 hover:text-green-600"
                    >
                        <i className="fas fa-id-card text-3xl"></i>
                        <span className="mt-3 text-sm font-semibold">HACETE SOCIO</span>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center text-green-800 hover:text-green-600"
                    >
                        <i className="fas fa-credit-card text-3xl"></i>
                        <span className="mt-3 text-sm font-semibold">PAGÁ TU CUOTA</span>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center text-green-800 hover:text-green-600"
                    >
                        <i className="fas fa-qrcode text-3xl"></i>
                        <span className="mt-3 text-sm font-semibold">AUTOGESTIÓN</span>
                    </a>
                    <a
                        href="#"
                        className="flex flex-col items-center text-green-800 hover:text-green-600"
                    >
                        <i className="fas fa-route text-3xl"></i>
                        <span className="mt-3 text-sm font-semibold">TOUR VIRTUAL</span>
                    </a>
                </div>
            </div>
        </header>
    );
};