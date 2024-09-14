interface CardContentSectionProps {
  title: string;
  location: string;
}

export default function CardTitle({
  title,
  location,
}: CardContentSectionProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <span className="text-lg font-semibold text-gray-900">|</span>
      <p className="text-gray-700">{location}</p>
    </div>
  );
}
