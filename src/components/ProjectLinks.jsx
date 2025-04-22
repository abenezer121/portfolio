import React, { useState } from 'react';

const ProjectLinks = ({ links: { github, preview, images } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    setSelectedImage(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-wrap items-center mt-5">
      {preview && (
        <a
          href={preview}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 mt-2 inline-block px-4 py-2   border border-[#ff6c00] rounded shadow-md hover:text-[#ff6c00] hover:-translate-y-1 transition-all hover:font-mono  text-sm"
        >
          Live Demo
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block px-4 py-2 bg-white hover:text-[#ff6c00] border border-[#ff6c00] rounded shadow-md hover:-translate-y-1 transition-all hover:font-mono  text-sm"
      >
        View Source
      </a>

      <button
        onClick={openModal}
        className=" border border-[#ff6c00] rounded mt-2 ml-4 inline-block px-4 py-2  hover:text-[#ff6c00]   rounded shadow-md  hover:-translate-y-1 transition-all hover:font-mono text-sm"
      >
        View More
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-5xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-xl font-mono mb-4">Additional Images</h3>

         
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-all duration-300"
                />
              ))}
            </div>

         
            {selectedImage && (
              <div
                className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-70"
                onClick={handleCloseZoom}
              >
                <div className="relative max-w-4xl max-h-[90vh] mx-auto">
                  <img
                    src={selectedImage}
                    alt="Zoomed In"
                    className="rounded-lg shadow-lg max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={handleCloseZoom}
                    className="absolute top-2 right-2 text-white text-3xl font-bold"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;




