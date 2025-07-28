import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToLiveStream = () => {
    const element = document.querySelector('#listen-live');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-crescent-green to-crescent-light min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="font-amiri">Crescent Community Radio</span>
        </h1>
        <p className="text-xl md:text-2xl text-crescent-gold mb-4">97.0 FM • Rochdale's Voice</p>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
          Broadcasting 24/7 to serve the community with Islamic programming, local news, and cultural content in English, Urdu, Punjabi, and Bengali.
        </p>
        
        {/* Live Status Indicator */}
        <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full mb-8">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
          <span className="font-semibold">NOW LIVE ON AIR</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={scrollToLiveStream}
            className="bg-crescent-gold text-crescent-green px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <span className="mr-2">▶</span>Listen Live
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-crescent-green transition-colors"
          >
            <span className="mr-2">👥</span>Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
