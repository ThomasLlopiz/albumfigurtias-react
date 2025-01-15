export const Sponsors = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-8">
          SPONSORS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <div className="flex justify-center">
            <img
              src="./imagenes/club/qors.png"
              alt="Sponsor QORS"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hueRotate(102deg) brightness(84%) contrast(106%)",
              }}
              onMouseOver="this.style.filter='none';"
              onMouseOut="this.style.filter='brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)';"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/dsa.png"
              alt="Sponsor DSA"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%);",
              }}
              onMouseOver="this.style.filter='none';"
              onMouseOut="this.style.filter='brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)';"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/solsport.png"
              alt="Sponsor SolSport"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%);",
              }}
              onMouseOver="this.style.filter='none';"
              onMouseOut="this.style.filter='brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)';"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="./imagenes/club/picco.png"
              alt="Sponsor Picco"
              className="h-24 object-contain transition-transform duration-300 transform"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%);",
              }}
              onMouseOver="this.style.filter='none';"
              onMouseOut="this.style.filter='brightness(0) saturate(100%) invert(25%) sepia(72%) saturate(512%) hue-rotate(102deg) brightness(84%) contrast(106%)';"
            />
          </div>
        </div>
      </section>
      {/* <!-- SPONSORS --> */}
      {/* <div classNameName="title text-white mt-24 flex justify-center align-center sm:mt-56">
      <h1 classNameName="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">SPONSORS</h1>
    </div>
    <div classNameName="relative mb-32">
      <div classNameName="mx-auto max-w-7xl">
        <div
          classNameName="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-y-0">
          <a target="_blank" href="https://qors.com.ar" classNameName="p-4 col-span-1 max-h-24 w-full">
            <img src="./qors.png" alt="Transistor"
              classNameName="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
              width="158" height="48" />
          </a>
          <a target="_blank" href="https://www.instagram.com/dsaservicios/?hl=es"
            classNameName="p-4 col-span-1 max-h-24 w-full">
            <img src="./dsa.png" alt="Reform"
              classNameName="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
              width="158" height="48" />
          </a>
          <a target="_blank" href="https://www.fordpicco.com.ar/" classNameName="p-4 col-span-1 max-h-24 w-full">
            <img src="./picco.png" alt="Tuple"
              classNameName="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
              width="158" height="48" />
          </a>
          <a target="_blank" href="https://www.instagram.com/100deportivo/?hl=es"
            classNameName="p-4 col-span-1 max-h-24 w-full lg:col-start-auto">
            <img src="./deportivo.png" alt="SavvyCal"
              classNameName="background-gradient-gray p-4 max-h-24 w-full object-contain hover:scale-110 transition-transform duration-300"
              width="158" height="48" />
          </a>
        </div>
      </div>
    </div> */}
    </div>
  );
};
