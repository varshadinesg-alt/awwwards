import React, { useState } from 'react';

const TOTAL_VIDEOS = 3;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
    const upcomingVideoIndex = currentIndex === TOTAL_VIDEOS ? 1 : currentIndex + 1;

    const handlePreviewClick = () => {
        setIsLoading(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    return (
        <section
            className="relative flex min-h-screen w-screen items-start justify-center overflow-hidden bg-[#dfdff0] px-0 pt-0 pb-12"
            style={{ minHeight: '100vh', width: '100%', backgroundColor: '#dfdff0' }}
        >
            <div className="relative z-10 flex w-full flex-col items-center gap-10">
                <div
                    className="relative w-full overflow-hidden bg-black shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
                    style={{ aspectRatio: '16 / 4.5' }}
                >
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex-center bg-black/35">
                            <div className="three-body">
                                <div className="three-body__dot" />
                                <div className="three-body__dot" />
                                <div className="three-body__dot" />
                            </div>
                        </div>
                    )}

                    <video
                        key={currentIndex}
                        src={getVideoSrc(currentIndex)}
                        className="block h-full w-full object-cover"
                        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        muted
                        playsInline
                        autoPlay
                        loop
                        preload="auto"
                        onLoadedData={() => setIsLoading(false)}
                    />
                </div>

                <button
                    type="button"
                    aria-label="Play next video"
                    className="relative z-20 block bg-transparent p-0 text-left opacity-0 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
                    onClick={handlePreviewClick}
                    style={{ width: '340px', height: '300px', border: 0 }}
                >
                    <div
                        className="overflow-hidden bg-black"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <video
                            key={upcomingVideoIndex}
                            src={getVideoSrc(upcomingVideoIndex)}
                            className="block h-full w-full object-cover"
                            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                            muted
                            playsInline
                            autoPlay
                            loop
                            preload="auto"
                        />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;
