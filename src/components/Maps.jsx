
export const Maps = () => {
  return (
    <div>
      {" "}
      <div
        id="Comprar"
        className="title text-white mt-24 flex justify-center align-center sm:mt-56"
      >
        <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl neonText">
          PUNTOS DE VENTA
        </h1>
      </div>
      <div className="relative flex justify-center align-center h-1/2 my-xauto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2762536606992!2d-62.30430952365361!3d-31.40651399577541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb336df6ea9def%3A0x6337fbfb719397a8!2sProveedur%C3%ADa%20SuperSol!5e0!3m2!1ses!2sar!4v1726489955642!5m2!1ses!2sar"
          className="w-full h-96 lg:w-4/6"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
