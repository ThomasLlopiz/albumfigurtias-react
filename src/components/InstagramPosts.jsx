import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../index.css';

export const InstagramPosts = () => {
    const [posts, setPosts] = useState([]);
    const token = "IGAAOEaKX61gZABZAE9fTEIyajFRVkZALV0R6NXRYYl9DS1ltR05VT1BjTnRWTHFhMndaQ21wNXNiMUU1TnlTTmxwZAmtQdGFDRktmVG5IWjgzU081b3lERGtCeHRVb0NhRkJqRG9TYjAwZAk5pM0RKbmlkMXFHVjBsZATdxYW1KVDR1SQZDZD";

    const calculateTimeAgo = (date) => {
        const now = new Date();
        const diff = now - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} días atrás`;
        if (hours > 0) return `${hours} horas atrás`;
        if (minutes > 0) return `${minutes} minutos atrás`;
        return 'Hace unos segundos';
    };

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();

                const maxPosts = window.innerWidth <= 768 ? 7 : 12;
                const filteredPosts = data.data.slice(0, maxPosts);

                setPosts(filteredPosts);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8 bg-white">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-8">NOTICIAS</h2>
            <ResponsiveMasonry columnsCountBreakPoints={{ '350': 1, '750': 2, '1000': 4 }}>
                <Masonry>
                    {posts.map((post) => {
                        const truncatedCaption = post.caption
                            ? post.caption.length > 70
                                ? post.caption.substring(0, 70) + '...'
                                : post.caption
                            : '';
                        const timeAgo = calculateTimeAgo(new Date(post.timestamp));

                        let mediaContent = '';
                        if (post.media_type === 'VIDEO') {
                            mediaContent = (
                                <video controls className="w-full max-h-96 ">
                                    <source src={post.media_url} type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            );
                        } else {
                            mediaContent = <img src={post.media_url} alt={truncatedCaption} className="w-full my-auto object-cover" />;
                        }

                        return (
                            <div key={post.id} className="bg-white rounded shadow-md overflow-hidden my-auto">
                                <div className="flex items-center p-4 border-b border-gray-200">
                                    <img src="./imagenes/general/favicon.png" alt="Logo" className="w-8 h-8 mr-6" />
                                    <div>
                                        <p className="text-sm  text-black">@ssdevoto</p>
                                        <p className="text-xs text-gray-500">{timeAgo}</p>

                                    </div>
                                </div>

                                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                    {mediaContent}
                                </a>
                                <div className="p-4">
                                    <p className="text-sm text-gray-700">{truncatedCaption}</p>
                                </div>
                            </div>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <div className="text-center mt-12 sm:mt-24">
                <a
                    href="https://instagram.com/ssdevoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700"
                >
                    Ver más
                </a>
            </div>
        </section>
    );
};

