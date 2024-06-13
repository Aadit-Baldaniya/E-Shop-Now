function Testimonial() {
  return (
    <div>
      <section className=" text-gray-600 body-font mb-10">
        <div className="container px-4 py-10 mx-auto">
          <h1 className="font-bold text-3xl text-black text-center">
            {" "}
            Testimonial
          </h1>
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-yellow-500">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-2xl inline-block border-2 border-gray-200 bg-gray-100"
                  //   src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Baldaniya Aadit Jagdishbhai{" "}
                </h2>
                <p className="text-gray-500">Front-end devloper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://www.devknus.com/img/gawri.png"
                />

                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Baldaniya Aadit Jagdishbhai{" "}
                </h2>
                <p className="text-gray-500">Front-end devloper</p>
              </div>
            </div>{" "}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-2xl inline-block border-2 border-gray-200 bg-gray-100"
                  //   src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Baldaniya Aadit Jagdishbhai{" "}
                </h2>
                <p className="text-gray-500">Front-end devloper</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
