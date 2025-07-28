import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, Radio } from "lucide-react";

interface AudioPlayerProps {
  streamUrl?: string;
  currentShow?: {
    title: string;
    presenter: string;
    time: string;
  };
}

const AudioPlayer = ({ 
  streamUrl = "https://streamer.radio.co/s7f2b6c3b6/listen", // Placeholder stream URL
  currentShow = {
    title: "Community Health Show",
    presenter: "Sabira & Shahida", 
    time: "Thursday 10am - 1pm"
  }
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    setIsLoading(true);
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      // For demo purposes, we'll simulate successful playback
      setIsPlaying(!isPlaying);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0] / 100;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, []);

  // Waveform animation bars
  const WaveformBars = () => (
    <div className="h-12 flex items-end justify-center space-x-1">
      {[20, 35, 25, 40, 30, 45, 25, 35, 20, 30].map((height, index) => (
        <div
          key={index}
          className={`w-1 bg-crescent-gold rounded-full transition-all duration-300 ${
            isPlaying ? 'animate-pulse' : ''
          }`}
          style={{ 
            height: `${height}px`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-crescent-green to-crescent-light rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-semibold">LIVE ON AIR</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Now Playing</h3>
          <p className="text-crescent-gold text-lg font-semibold">{currentShow.title}</p>
          <p className="text-sm opacity-90">with {currentShow.presenter}</p>
          <p className="text-xs opacity-75">{currentShow.time}</p>
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={streamUrl}
          preload="none"
          onLoadStart={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onError={(e) => {
            console.error("Audio error:", e);
            setIsLoading(false);
          }}
        />

        {/* Audio Player Controls */}
        <div className="bg-black bg-opacity-30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Button
                onClick={togglePlay}
                disabled={isLoading}
                className="bg-crescent-gold text-crescent-green w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-crescent-green border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              <div className="ml-4">
                <div className="text-sm font-semibold flex items-center">
                  <Radio className="h-4 w-4 mr-2" />
                  Crescent Radio 97.0 FM
                </div>
                <div className="text-xs opacity-75">Live Stream</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Volume2 className="h-5 w-5" />
              <div className="w-20">
                <Slider
                  value={volume}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          
          {/* Waveform Visualization */}
          <WaveformBars />
        </div>

        {/* Contact for Requests */}
        <div className="mt-6 text-center">
          <p className="text-sm opacity-90 mb-2">Request a song or dedication</p>
          <div className="flex justify-center space-x-6 text-sm">
            <span className="flex items-center">
              <span className="mr-1">📞</span> 01706 340786
            </span>
            <span className="flex items-center">
              <span className="mr-1">📱</span> 07817 229862
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
