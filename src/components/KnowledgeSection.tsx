import CategoryCard from "./CategoryCard";
import cncBasics from "@/assets/cnc-basics.jpg";
import cncProcesses from "@/assets/cnc-processes.jpg";
import cncMaterials from "@/assets/cnc-materials.jpg";
import cncApplications from "@/assets/cnc-applications.jpg";

const categories = [
  {
    image: cncBasics,
    title: "CNC Basics",
    description: "Introduction to CNC machines, G-codes, controllers and working principles.",
  },
  {
    image: cncProcesses,
    title: "CNC Processes",
    description: "Milling, turning, drilling, multi-axis machining and advanced processes.",
  },
  {
    image: cncMaterials,
    title: "CNC Materials",
    description: "Machining aluminum, steel, titanium, plastics and composites.",
  },
  {
    image: cncApplications,
    title: "Industry Applications",
    description: "Aerospace, automotive, medical, robotics and industrial manufacturing.",
  },
];

const KnowledgeSection = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          CNC Knowledge Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
              description={category.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
