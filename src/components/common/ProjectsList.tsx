import Button from "./Button";
import Icon from "./Icon";

function ProjectsList({ projects }: { projects: any }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project: any) => (
          <Project
            key={project.link}
            link={project.url}
            description={project.frontmatter.description}
            title={project.frontmatter.title}
            img={project.frontmatter.img}
          />
        ))}
      </div>
    </div>
  );
}

function Project({
  img = "https://picsum.photos/512",
  title = "My awesome Paper card!",
  description = "Nice looking subtitle.",
  link = "https://picsum.photos/512",
}) {
  return (
    <div className="card">
      <img className="object-cover aspect-video" src={img} alt={title} />

      <div className="flex flex-row items-center justify-between card-body">
        <div className="text-left">
          <h4 className="text-lg line-clamp-1">{title}</h4>
          <p className="pr-2 text-xs md:text-base line-clamp-1">
            {description}{" "}
          </p>
        </div>
        <a className="bg-none min-w-fit p-1" href={link}>
          <Icon className="w-7 md:w-8" src="/assets/go-to-project.svg" />
        </a>
      </div>
    </div>
  );
}
export default ProjectsList;
