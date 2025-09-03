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
              src="/home/phone-tablet-mockup.png"
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
              Learn <span className="text-sky-600">Anytime</span>, <span className="text-green-primary">Anywhere </span>
              with the Shiksha Nation App
            </h1>

            <p className="mt-4 text-lg text-gray-700 font-medium max-w-md">
              Access live classes, notes, tests & progress — all in one app.
            </p>

            <div className="mt-10 flex flex-col items-center lg:items-start">
              <p className="text-base text-gray-500">
                Available on Android, iOS, MacOS & Windows
              </p>

              {/* App Store Buttons */}
              <div className="flex items-center pt-4 gap-2">
                <a href="https://play.google.com/store/apps/details?id=app.shikshanation&hl=en_IN" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="transform hover:scale-105 transition-transform">
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
                    alt="Download on the App Store"
                    width={180}
                    height={40}
                  />
                </a>
              </div>
              <div className="flex items-center pt-4 gap-2">
                <a href="https://cdn.wiseapp.live/files/lens/shikshanation/Shiksha%20Nation.exe" target="_blank" rel="noopener noreferrer" aria-label="Get it on Windows Store" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/get-it-on-windows-store.png"
                    alt="Get it on Windows Store"
                    width={180}
                    height={40}
                  />
                </a>
                <a href="https://cdn.wiseapp.live/files/lens/shikshanation/Shiksha%20Nation.dmg" target="_blank" rel="noopener noreferrer" aria-label="Download for macOS" className="transform hover:scale-105 transition-transform">
                  <Image
                    src="/home/dowload_for_mac_os.png"
                    alt="Download for macOS"
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
