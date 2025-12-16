import heroImage from "@/assets/hero-cnc.jpg";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Learn CNC Machining Step by Step
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          A complete educational CNC blogging platform — from basics to advanced industry knowledge.
        </p>
      </div>
    </section>
  );
};

export default Hero;
