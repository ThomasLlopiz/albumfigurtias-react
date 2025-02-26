export const Asociarme = () => {
    return (
        <section className="py-4 relative my-20">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <a
                                    href="https://wa.me/5493564501086?text=Hola,%20quiero%20asociarme%20a%20SSD"
                                    className="underline text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-left"
                                >
                                    ¡QUIERO SER SOCIO!
                                </a>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left">
                                    ¿Querés ser parte de La Verde? Es muy fácil. Solo tenés que acercarte a nuestra
                                    Secretaría, ubicada en el predio del club, en los siguientes horarios:
                                    <br /><br />
                                    <strong>Lunes a viernes:</strong><br />
                                    Mañana: de 08:00 a 12:00 horas.<br />
                                    Tarde: de 17:00 a 20:00 horas.<br /><br />
                                    Nuestro equipo te brindará toda la información necesaria para que formes parte de
                                    nuestra gran familia deportiva.
                                    <br /><br />
                                    <strong>Acceso a nuestras instalaciones:</strong><br /> Podrás disfrutar de todas
                                    las comodidades y espacios que el club ofrece.<br />
                                    <br /><strong>Participación en disciplinas deportivas:</strong><br /> Sumate a las
                                    actividades y deportes que se practican en nuestras instalaciones.
                                    <br /><br />
                                    <strong>Apoyo a tu club:</strong><br /> Con tu aporte, ayudás a fortalecer el
                                    crecimiento y desarrollo de
                                    Sociedad Sportiva Devoto, el club de tus amores.<br />
                                    <br /><br />
                                    <strong> ¡Te esperamos para que juntos sigamos construyendo este gran sueño
                                        deportivo!</strong><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aquí podrías agregar el componente de WhatsApp si es necesario */}
            {/* Si el componente de `whatsapp.php` es un componente de React, lo incluirías como:
            <Whatsapp /> */}
        </section>
    );
}
