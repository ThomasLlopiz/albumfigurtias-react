import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyCurKMfpNTO2cDqPnUBzwILHu9i3ziVEb0'; // Verifica que esta clave sea válida
const CHANNEL_ID = 'UCORkF7eXlKSfcCN4B4c869g';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=12`;

export const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch(API_URL);

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error('Error al cargar los videos: ' + response.statusText);
        }

        const data = await response.json();

        // Verifica si hay elementos en los datos
        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          setError('No se encontraron videos.');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error al cargar los videos', error);
      }
    };

    loadVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const totalVideos = videos.length;
          return prevIndex < totalVideos - 3 ? prevIndex + 1 : 0;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [videos]);

  return (
    <div id="youtube-videos" className="relative overflow-hidden pb-20 max-w-7xl mx-auto text-black">
      <div className="flex items-center justify-start p-2 text-gray-800 rounded-lg">
        <i className="fa-brands fa-youtube text-red-600 text-xl mr-2"></i>
        <a
          target="_blank"
          href="https://www.youtube.com/@SociedadSportivaDevoto"
          className="text-md font-semibold"
          rel="noopener noreferrer"
        >
          Seguinos en YouTube
        </a>
      </div>

      {/* Si hay un error, muestra un mensaje */}
      {error && (
        <div className="text-red-600">
          <p>{error}</p>
        </div>
      )}

      {/* Solo renderiza los videos si están disponibles */}
      <div
        id="video-carousel"
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {videos.length > 0 ? (
          videos.map((item) => {
            const videoId = item.id.videoId;
            const videoTitle = item.snippet.title;
            const videoThumbnail = item.snippet.thumbnails.medium.url;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            return (
              <div key={videoId} className="video-card flex-shrink-0 w-1/3 px-2">
                <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={videoThumbnail}
                    alt={videoTitle}
                    className="w-full h-auto rounded-md"
                  />
                  <h3 className="text-sm mt-2">{videoTitle}</h3>
                </a>
              </div>
            );
          })
        ) : (
          <div>No hay videos disponibles.</div>
        )}
      </div>
    </div>
  );
};
