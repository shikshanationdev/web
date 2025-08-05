import Image from "next/image";

const JoinLearnersSection = () => {
  return (
    <section className="w-full py-10 pl-5">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-8 xl:px-10">
        {/* Left: Text */}
        <div className="w-[50vw] text-left">
          <h2  className="text-gray-900 leading-tight font-light mb-4 text-lg text-nowrap sm:text-3xl md:text-4xl lg:text-5xl">
            Join over <span className="text-blue-600 font-semibold">10,000</span><br /> learners now
          </h2>
        </div>
        {/* Right: Illustration */}
        <div className="w-[50vw]  flex items-center justify-center">
          <div className="relative w-[44vw] h-[20vw] max-w-[600px] max-h-[250px]">
            <Image
              src="/banner2.png"
              alt="Join over 10,000 learners banner"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinLearnersSection;
