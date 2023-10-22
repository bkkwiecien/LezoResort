'use client'
import React, { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        const row1 = document.getElementById('row1');
        const row2 = document.getElementById('row2');
        const row3 = document.getElementById('row3');
    
        if (!row1 || !row2 || !row3) return;  // Handle potential null elements
    
        const handleScroll = () => {
          const scrollY = window.scrollY;
          row1.style.transform = `translateX(-${scrollY / 2}px)`;
          row2.style.transform = `translateX(${scrollY / 2}px)`;
          row3.style.transform = `translateX(-${scrollY / 3}px)`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);  // Remove the specific event handler
        };
      }, []);

  return (
    <div id='Gallery'>
        <div className="w-full overflow-x-hidden whitespace-nowrap mt-12">
            <div className="mt-5 flex ml-[00px]" id="row1">
                <img
                src="photos/01.jpg"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/02.jpg"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/3.jpeg"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/04.jpg"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/5.png"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/6.png"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/01.jpg"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/02.jpg"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/3.jpeg"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/04.jpg"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/5.png"
                alt="Zdjęcie 1"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/6.png"
                alt="Zdjęcie 2"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
            </div>

            <div className="mt-5 flex ml-[-750px]" id="row2">
                <img
                src="photos/7.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/8.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/9.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/10.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/11.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/12.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/7.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/8.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/9.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/10.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/11.png"
                alt="Zdjęcie 6"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
                <img
                src="photos/12.png"
                alt="Zdjęcie 7"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 hover:shadow-lg transition-transform duration-400 ease-in"
                />
            </div>

            <div className="mt-5 flex ml-[00px]" id="row3">
                <img
                src="photos/13.png"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/14.png"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/15.png"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/16.png"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/02.jpg"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/04.jpg"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/13.png"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/14.png"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/15.png"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/16.png"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/02.jpg"
                alt="Zdjęcie 11"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
                <img
                src="photos/04.jpg"
                alt="Zdjęcie 12"
                className="mr-5 w-[400px] min-w-[350px] h-[250px] object-cover object-center rounded-[20px] hover:scale-105 transition-transform duration-400 ease-in"
                />
            </div>
        </div>
    </div>    
  );
};

export default Gallery;
