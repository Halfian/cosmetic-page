import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black-rich via-indigo-950 to-black relative py-10">
      <div className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain pointer-events-none"
            style={{ backgroundImage: "url('/Hana logo2.png')"}}>
      </div>
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 relative z-10">
        <h2 className="text-4xl font-serif text-gold-500 mb-6">About Hana</h2>
        <p className="text-indigo-200 max-w-2xl leading-relaxed">
          Hana is a luxury cosmetic brand inspired by elegance and minimalism.
          Our mission is to blend timeless design with modern beauty, creating
          products that elevate everyday rituals into extraordinary experiences.       
        </p>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
