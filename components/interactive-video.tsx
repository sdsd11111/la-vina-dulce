'use client';

import { useState, useRef, useEffect } from 'react';

export default function InteractiveVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.log('Auto-play was prevented:', error);
          // Auto-play was prevented, show play button
          setIsPlaying(false);
        });
    }

    return () => {
      // Cleanup
      if (video && !video.paused) {
        video.pause();
      }
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        await video.pause();
      } else {
        await video.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling video:', error);
      setHasError(true);
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.stopPropagation();
    togglePlay();
  };

  const handlePlayButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    togglePlay();
  };

  if (hasError) {
    return (
      <div className="relative rounded-2xl shadow-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
        <p className="text-gray-500">No se pudo cargar el video.</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl shadow-lg overflow-hidden group">
      <video 
        ref={videoRef}
        loop
        playsInline
        muted
        autoPlay
        preload="auto"
        poster="/images/mapa-ubicacion-poster.jpg"
        className="w-full h-auto rounded-2xl cursor-pointer bg-black"
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      >
        <source src="/videos/mapa-ubicacion.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      {!isPlaying && (
        <button 
          className="absolute inset-0 m-auto w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-300 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={handlePlayButtonClick}
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="ml-1" // Slight adjustment for the play icon
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-sm pointer-events-none">
        Haz clic para {isPlaying ? 'pausar' : 'reproducir'} el video
      </div>
      
      <style jsx global>{`
        video::-webkit-media-controls {
          display: none !important;
        }
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        video::-webkit-media-controls-panel {
          display: none !important;
        }
        video::-webkit-media-controls-play-button {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
