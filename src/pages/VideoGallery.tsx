import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Logo URLs
const tryoutsLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_light.webp";
const fcproLogo =
  "https://mafisa-group-assets.nyc3.cdn.digitaloceanspaces.com/prosoccertryouts/fcpro_dark.webp";

// Video data structure - placeholder videos that can be easily replaced
interface Video {
  id: string;
  thumbnail: string;
  title?: string;
}

const videos: Video[] = [
  {
    id: "DUgxsg5MtbM",
    thumbnail: "",
    title: "Q&A with FC Operations Manager",
  },
  {
    id: "ghSu1ihjL9M",
    thumbnail: "",
    title: "Player Experience",
  },
  {
    id: "nN3qZv0PqH4",
    thumbnail: "",
    title: "Player Experience",
  },
  {
    id: "0LetpgDSP2s",
    thumbnail: "",
    title: "Player Experience",
  },
  {
    id: "CG8YPgSig3k",
    thumbnail: "",
    title: "Player Experience",
  },

  {
    id: "v9kDdEEJLmc",
    thumbnail: "",
    title: "Player Experience",
  },
  {
    id: "4Z3DW6ry_ys",
    thumbnail: "",
    title: "Player Experience",
  },
  {
    id: "JfvzBeFJFxg",
    thumbnail: "",
    title: "Player Experience",
  },

  {
    id: "ec1wnfd_Hbg",
    thumbnail: "",
    title: "Player Experience",
  },
];

const VideoGallery = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Handle navigation to index page and scroll to section
  const handleNavClick = (sectionId?: string) => {
    if (sectionId) {
      navigate(`/#${sectionId}`);
    } else {
      navigate("/");
    }
  };

  // Check scrollability
  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollability);
      return () => carousel.removeEventListener("scroll", checkScrollability);
    }
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    // Smooth scroll to selected video in carousel
    if (carouselRef.current) {
      const videoIndex = videos.findIndex((v) => v.id === video.id);
      const carousel = carouselRef.current;
      const videoElement = carousel.children[0]?.children[
        videoIndex
      ] as HTMLElement;
      if (videoElement) {
        videoElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const getYouTubeEmbedUrl = (videoId: string) => {
    // Ensure video ID is clean (no extra characters)
    const cleanId = videoId.trim();
    // Use the standard YouTube embed URL format
    return `https://www.youtube.com/embed/${cleanId}?enablejsapi=1`;
  };

  const getYouTubeThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const currentSrc = img.src;
    const videoIdMatch = currentSrc.match(/\/vi\/([^\/]+)\//);

    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      if (currentSrc.includes("maxresdefault")) {
        // Fallback to hqdefault if maxresdefault fails
        img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      } else if (currentSrc.includes("hqdefault")) {
        // Fallback to sddefault if hqdefault fails
        img.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
      } else if (currentSrc.includes("sddefault")) {
        // Final fallback to default
        img.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
      }
    }
  };

  return (
    <>
      {/* Custom Navbar */}
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 right-0 z-[10000] px-6 py-4 bg-white/15 backdrop-blur-md border-b border-white/20"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleNavClick()}
              className="hover:cursor-pointer"
            >
              <img
                src={tryoutsLogo}
                alt="Pro Soccer Tryouts"
                className="sm:h-12 h-8 w-auto opacity-90 filter drop-shadow-lg"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8 z-10">
            <button
              onClick={() => handleNavClick()}
              className="text-gray-200 hover:text-white hover:cursor-pointer transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("pro-soccer-tryouts")}
              className="text-gray-200 hover:text-white hover:cursor-pointer transition"
            >
              Tryouts
            </button>
            <button
              onClick={() => handleNavClick("our-departments")}
              className="text-gray-200 hover:text-white hover:cursor-pointer transition"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavClick("our-team")}
              className="text-gray-200 hover:text-white hover:cursor-pointer transition"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className="text-gray-200 hover:text-white hover:cursor-pointer transition"
            >
              Pricing
            </button>
          </div>

          <div className="flex items-center space-x-4 z-10">
            <button
              onClick={() => handleNavClick("application-form")}
              className="text-gray-100 hover:text-white hover:cursor-pointer transition"
            >
              Apply
            </button>
            <button
              onClick={() => handleNavClick("pro-soccer-tryouts")}
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition hover:cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex justify-center mt-20 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
                <img
                  src={fcproLogo}
                  alt="FC Professional"
                  className="h-12 md:h-20 mx-auto filter drop-shadow-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-normal text-center  mx-auto ">
              Explore success stories from players who have advanced their
              careers through our program.
            </p>
          </motion.div>

          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl bg-slate-900">
              <iframe
                key={selectedVideo.id}
                src={getYouTubeEmbedUrl(selectedVideo.id)}
                title={selectedVideo.title || "Player Experience Video"}
                className="absolute inset-0 w-full h-full rounded-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                style={{ border: "none" }}
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </motion.div>

          {/* Video Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
              More Player Stories
            </h3>

            {/* Carousel Container */}
            <div className="relative">
              {/* Scroll Buttons - Desktop Only */}
              <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 gap-2">
                <button
                  onClick={() => scrollCarousel("left")}
                  disabled={!canScrollLeft}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Scroll left"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 gap-2">
                <button
                  onClick={() => scrollCarousel("right")}
                  disabled={!canScrollRight}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Scroll right"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Carousel */}
              <div
                ref={carouselRef}
                className="video-carousel-container flex gap-4 md:gap-6 pb-4"
              >
                {videos.map((video, index) => {
                  const isSelected = selectedVideo.id === video.id;
                  return (
                    <motion.button
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      onClick={() => handleVideoSelect(video)}
                      className="relative flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        width: "clamp(200px, 25vw, 300px)",
                      }}
                    >
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-800 border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                        {/* Thumbnail */}
                        <img
                          src={getYouTubeThumbnailUrl(video.id)}
                          alt={video.title || `Video ${index + 1}`}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                          onError={handleThumbnailError}
                          loading="lazy"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex w-16 h-16 md:ize-18 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                            <div className="flex w-12 h-12 md:size-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/80 to-cyan-500/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Play
                                className="w-6 h-6 md:size-6 fill-white text-white ml-1"
                                style={{
                                  filter:
                                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Selected Indicator */}
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Playing
                          </div>
                        )}
                      </div>

                      {/* Video Title */}
                      {video.title && (
                        <p className="mt-2 text-sm md:text-base text-gray-300 text-center line-clamp-2">
                          {video.title}
                        </p>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
