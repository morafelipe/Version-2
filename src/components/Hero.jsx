export default function Hero() {
  return (
    <section>

      <div className="w-full bg-[#e9dfd5] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-4">

          <div className="relative w-full h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/heater/imagen1.png" 
              alt="Essential Tees"
              className="w-full h-full object-cover"
            />

            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white drop-shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                New Essential Tees
              </h2>
              <p className="text-sm md:text-base mb-4">
                Learn more →
              </p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
