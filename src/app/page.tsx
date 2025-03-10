export default function Home() {
  return (
    <div>
      <section className="bg-bannerImg bg-repeat bg-cover bg-bottom">
        <div className="w-full h-screen flex items-center justify-center bg-blackOverlay">
          <div className="text-white text-left w-full px-8 ml-36">
            <div className="container mx-auto mb-40">
              <h1 className="text-6xl font-bold">
                Never Stop <br /> Exploring World
              </h1>
              <p className="py-3 font-semibold text-gray-400 mb-3 text-xs">
                Created by Rodney Lei Estrada
              </p>
              <p className="text-md mt-4 max-w-2xl">
                This website is your gateway to discovering the most incredible
                destinations across the globe. From hidden gems to iconic
                landmarks, we&apos;ll take you on a journey to places that inspire
                curiosity and wanderlust. Whether you&apos;re looking for tranquil
                retreats or thrilling adventures, this platform will showcase
                the dream destinations I hope to explore. Join me in exploring
                the endless beauty our world has to offer&mdash;where every place
                tells a story and every adventure leaves a lasting impression.
              </p>
              <a
                href="/about"
                className="bg-green-600 text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-105 mt-6"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
