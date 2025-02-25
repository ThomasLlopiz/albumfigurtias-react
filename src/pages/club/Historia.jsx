import { useState } from "react";
export const Historia = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="py-4 relative my-24">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className="rounded-xl object-cover" src="./imagenes/club/nosotros.jpg" alt="about Us image" />
                        </div>
                        <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="./imagenes/club/nosotros2.jpg" alt="about Us image" />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-left">
                                    Sociedad Sportiva Devoto
                                </h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left">
                                    Fundada el 15 de mayo de 1921, Sociedad Sportiva Devoto es más que un club: es el corazón deportivo de nuestra comunidad. A lo largo de los años, con el esfuerzo incansable de dirigentes y asociados, se transformó en una institución que crece y se transforma al ritmo de sus integrantes.
                                    <span id="primer-parte">
                                        Nuestra institución ha sabido ganarse el afecto de todos no solo por la pasión que despiertan las diversas disciplinas deportivas, sino también por las intensas y valiosas actividades sociales y comunitarias que se organizan año tras año. Desde sus primeros años, los esfuerzos de dirigentes y asociados han sido clave para consolidar una institución en constante evolución.
                                    </span>
                                    <span
                                        id="segunda-parte"
                                        className="contenido-extra"
                                        style={{ display: isExpanded ? 'inline' : 'none' }}
                                    >
                                        {' '}
                                        Nuestras instalaciones están diseñadas para el disfrute de los visitantes, ofreciendo cómodos espacios con asadores, mesas y bancos, para que cada momento en nuestra sede sea una experiencia inolvidable. En la actualidad estamos atravesando una etapa de crecimiento sostenido, con un modelo de gestión que mira al futuro. Día a día, nuestras actividades deportivas y sociales crecen en calidad y competitividad, con la participación activa no solo de los deportistas de Devoto, sino también de localidades vecinas. Nuestro enfoque se centra en tres pilares: el deporte formativo, recreativo y competitivo. Buscamos fortalecer cada una de estas áreas para continuar promoviendo un espacio de desarrollo y disfrute para todos, y brindarles a nuestros asociados un lugar donde puedan practicar deportes, compartir con la comunidad y disfrutar de una sana convivencia. En Sociedad Sportiva Devoto, cada logro, cada paso y cada sueño son parte de una historia que sigue escribiéndose día a día, con pasión, compromiso y la convicción de que lo mejor está por venir.
                                    </span>
                                </p>
                            </div>
                            <div className="w-full justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-center items-center inline-flex">
                                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">103+</h3>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Años de Grandeza</h6>
                                </div>
                                <div className="flex-col justify-center items-center inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">500+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Deportistas de todas las edades</h6>
                                </div>
                                <div className="flex-col justify-center items-center inline-flex">
                                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Categorías Infantiles</h6>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={toggleText}
                            className="sm:w-fit w-full px-3.5 py-2 bg-green-800 hover:bg-green-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                        >
                            <span className="px-1.5 text-white text-sm font-semibold leading-6" id="leer-mas">
                                {isExpanded ? 'Leer menos' : 'Leer más'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};