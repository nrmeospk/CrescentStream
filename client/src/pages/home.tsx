import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AudioPlayer from "@/components/audio-player";
import ScheduleGrid from "@/components/schedule-grid";
import PresenterCard from "@/components/presenter-card";
import ContactForm from "@/components/contact-form";
import { presenters } from "@/data/presenters";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Heart, Phone, Mail, MessageSquare } from "lucide-react";

const Home = () => {
  const featuredPresenters = presenters.slice(0, 6);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Live Streaming Section */}
      <section id="listen-live" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-crescent-green mb-4">Listen Live</h2>
            <p className="text-gray-600 text-lg">Tune in to 97.0 FM or stream online 24/7</p>
          </div>
          <AudioPlayer />
        </div>
      </section>

      {/* Radio Show Schedule */}
      <section id="schedule" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-crescent-green mb-4">Programme Schedule</h2>
            <p className="text-gray-600 text-lg">Broadcasting 24 hours a day, 7 days a week</p>
          </div>
          <ScheduleGrid />
        </div>
      </section>

      {/* Presenters Section */}
      <section id="presenters" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-crescent-green mb-4">Our Presenters</h2>
            <p className="text-gray-600 text-lg">Meet the voices of Crescent Community Radio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPresenters.map((presenter) => (
              <PresenterCard key={presenter.id} presenter={presenter} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-crescent-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              View All Presenters
            </Button>
          </div>
        </div>
      </section>

      {/* Community Focus Section */}
      <section className="py-16 bg-gradient-to-r from-crescent-green to-crescent-light relative">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'var(--crescent-green)',
            backgroundBlendMode: 'overlay',
            opacity: 0.8
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Serving Our Community</h2>
          <p className="text-xl text-crescent-warm mb-8 max-w-3xl mx-auto">
            Broadcasting to approximately 19,000 Muslims in Rochdale while welcoming participation from all community members, regardless of religious background.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-crescent-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-crescent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Unity</h3>
              <p className="text-crescent-warm">Bringing communities together through shared values and cultural exchange</p>
            </div>
            
            <div className="text-center">
              <div className="bg-crescent-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-crescent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multilingual</h3>
              <p className="text-crescent-warm">Programming in English, Urdu, Punjabi, and Bengali languages</p>
            </div>
            
            <div className="text-center">
              <div className="bg-crescent-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-crescent-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Focus</h3>
              <p className="text-crescent-warm">Dedicated to serving Rochdale and Greater Manchester communities</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Get Involved?</h3>
            <p className="text-crescent-warm mb-6">
              Whether you'd like to present a show or help behind the scenes, we welcome volunteers. 
              Full training provided and previous experience is not necessary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-crescent-gold text-crescent-green px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                Call 01706 340385
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-crescent-green transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-crescent-green mb-6">About Crescent Radio</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Welcome to the online home of Crescent Community Radio; Rochdale's first and only full time station broadcasting 24 hours a day, seven days a week on 97.0FM and crescentradio.net.
                </p>
                <p className="mb-6">
                  Originally launched as "Ramadhan Radio" in 1999, we became a permanent full-time community station in September 2006. We serve approximately 19,000 Muslims in Rochdale while encouraging participation from all members of the local community, regardless of religious inclination.
                </p>
                <p className="mb-6">
                  Our programming ranges from religious content to community packages, featuring Islamic teachings, local news, cultural discussions, and music programming in multiple languages including English, Urdu, Punjabi, and Bengali.
                </p>
                
                <div className="bg-crescent-warm border-l-4 border-crescent-gold p-4 my-6">
                  <p className="text-crescent-green font-semibold italic">
                    "Broadcasting with the mission of bringing communities together and serving as the voice of Rochdale's diverse population."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Rochdale cityscape" 
                className="rounded-xl shadow-lg w-full"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Community event" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Mosque community" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-crescent-green mb-4">Latest News & Updates</h2>
            <p className="text-gray-600 text-lg">Stay connected with community news and station updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://pixabay.com/get/g905a79653e21b8f8a88dc1f5b79e3d535b30ed59c60756c41cfaea9f318bffd8f0709146b95243b377f9dc1c28a88f26c980564ac291a75e958448537f0c8d26_1280.jpg" 
                alt="Community celebration" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-crescent-gold font-semibold mb-2">Community News</div>
                <h3 className="text-xl font-bold text-crescent-green mb-3">Eid Celebrations in Rochdale</h3>
                <p className="text-gray-600 mb-4">Join us for community-wide Eid celebrations featuring local talent, food stalls, and family activities.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📅</span>
                  <span>March 15, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Radio studio equipment" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-crescent-gold font-semibold mb-2">Station Updates</div>
                <h3 className="text-xl font-bold text-crescent-green mb-3">New Digital Streaming Platform</h3>
                <p className="text-gray-600 mb-4">We've upgraded our streaming technology for better audio quality and mobile compatibility.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📅</span>
                  <span>March 10, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Young volunteers" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-crescent-gold font-semibold mb-2">Volunteer Program</div>
                <h3 className="text-xl font-bold text-crescent-green mb-3">Youth Presenter Training</h3>
                <p className="text-gray-600 mb-4">New training program for young people interested in radio presenting and media production.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📅</span>
                  <span>March 8, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-crescent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-crescent-warm text-lg">Contact us for requests, feedback, or volunteer opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-crescent-green" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Main Office</div>
                      <div className="text-crescent-warm">01706 340385</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-crescent-green text-lg">🎙️</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Studio Requests</div>
                      <div className="text-crescent-warm">01706 340786</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-crescent-green" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Text Requests</div>
                      <div className="text-crescent-warm">07817 229862</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-crescent-green" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Addresses</div>
                      <div className="text-crescent-warm">
                        <div>info@crescentradio.net</div>
                        <div>studio@crescentradio.net</div>
                        <div>feedback@crescentradio.net</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/CrescentRadio/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  >
                    <span className="text-crescent-green text-xl">📘</span>
                  </a>
                  <a 
                    href="https://twitter.com/crescentradio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-crescent-gold w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                  >
                    <span className="text-crescent-green text-xl">🐦</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Station Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold font-amiri text-crescent-gold mb-4">Crescent Community Radio</h3>
              <p className="text-gray-300 mb-4">
                Rochdale's first and only full-time community radio station, broadcasting 24/7 on 97.0 FM and online. 
                Serving our diverse community with Islamic programming, local news, and cultural content.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-red-600 px-3 py-1 rounded-full">
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse mr-1"></span>
                  LIVE
                </span>
                <span>97.0 FM</span>
                <span>|</span>
                <span>crescentradio.net</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('#listen-live')} className="hover:text-crescent-gold transition-colors">Listen Live</button></li>
                <li><button onClick={() => scrollToSection('#schedule')} className="hover:text-crescent-gold transition-colors">Programme Schedule</button></li>
                <li><button onClick={() => scrollToSection('#presenters')} className="hover:text-crescent-gold transition-colors">Our Presenters</button></li>
                <li><button onClick={() => scrollToSection('#about')} className="hover:text-crescent-gold transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('#contact')} className="hover:text-crescent-gold transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📞 01706 340385</li>
                <li>🎙️ 01706 340786</li>
                <li>📱 07817 229862</li>
                <li>✉️ info@crescentradio.net</li>
                <li>🎵 studio@crescentradio.net</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Crescent Community Radio. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://www.facebook.com/CrescentRadio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crescent-gold transition-colors"
              >
                📘
              </a>
              <a 
                href="https://twitter.com/crescentradio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-crescent-gold transition-colors"
              >
                🐦
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
