import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-12 w-full">
      <div className="container mx-auto md:flex flex-col-reverse items-center lg:flex-row lg:gap-12">
        <div className="md:hidden flex-1">
          <Image
            src="/Hero.jpeg" // put your uploaded image in /public folder
            alt="Hero illustration"
            width={600}
            height={400}
            className="w-100 h-100 sm:w-50 sm:h-auto"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl leading-snug">
            Team that moves{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">ideas forward.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            From startup sparks to enterprise engines, we turn bold visions into
            high-impact digital products. Our team combines innovation,
            strategy, and cutting-edge technology to build solutions that scale
            with your business.
          </p>
        </div>
        <div className="max-md:hidden flex-1">
          <Image
            src="/Hero.jpeg" // put your uploaded image in /public folder
            alt="Hero illustration"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
