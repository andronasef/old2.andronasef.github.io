function Figure({
  src,
  description,
  alt,
}: {
  src: string;
  description: string;
  alt: string;
}) {
  return (
    <figure className="sm:max-w-xs grid gap-2">
      <img src={src} alt={alt} />
      <figcaption className="text-sm">{description}</figcaption>
    </figure>
  );
}
export default Figure;
