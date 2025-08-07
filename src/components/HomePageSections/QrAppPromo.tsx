import React from 'react';
import Image from 'next/image';


const QrAppPromo: React.FC = () => {
  return (
    <section className="bg-white px-5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section: Image Mockups */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">            
            {/* Device Mockup Image - Using next/image */}
            <Image 
              src="/home/Phone & Tablet Mockup.png" 
              width={500}
              height={500}
              alt="Shiksha Nation App on Phone & Tablet"
              className="relative z-10 w-full max-w-md lg:max-w-xl transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Right Section: Text Content & QR Code */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left ">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Learn <span className="text-sky-600">Anytime, Anywhere </span> 
              with the Shiksha Nation App
            </h1>
            
            <p className="mt-4 text-lg text-gray-700 font-medium max-w-md">
              Access live classes, notes, tests & progress — all in one app.
            </p>

            <div className="mt-10 flex flex-col items-center lg:items-start">
              {/* QR Code with decorative border - Using next/image */}
              <div className="relative w-36 h-36">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-700 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-700 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-green-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-green-400 rounded-br-lg"></div>
                <Image 
                  src="/home/qr.png" 
                  alt="QR code to download app" 
                  fill
                  sizes="144px"
                  className="p-1 object-contain"
                />
              </div>

              <p className="mt-6 text-base text-gray-500">
                Available on Android, iOS & Website
              </p>

              {/* App Store Buttons */}
              <div className="flex items-center pt-4 gap-2">
                <a href="#google-play" aria-label="Get it on Google Play" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/get-it-on-playstore.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={40}
                  />
                </a>
                <a href="#app-store" aria-label="Download on the App Store" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/get-it-on-appstore.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QrAppPromo;
