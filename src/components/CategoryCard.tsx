interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const CategoryCard = ({ image, title, description, delay = 0 }: CategoryCardProps) => {
  return (
    <article
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export default CategoryCard;
