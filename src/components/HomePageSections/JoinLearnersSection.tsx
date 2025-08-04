import Image from "next/image";

const JoinLearnersSection = () => {
  return (
    <section className="w-full py-16 px-5 xl:px-0 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Join over <span className="text-blue-600 font-bold">10,000</span><br /> learners now
          </h2>
        </div>
        {/* Right: Illustration */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-full h-[260px]">
            <Image
              src="/banner.png"
              alt="Join over 10,000 learners banner"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinLearnersSection;
