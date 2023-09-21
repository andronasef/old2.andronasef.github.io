import { defaultLocale } from "astro-i18n-aut";
import Icon from "./Icon";
import A from "./A";

function ProjectsList({ projects }: { projects: any }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project: any) => {
          const [lang, slug] = project.slug.split("/");

          let link = `/projects/${slug}`;

          return (
            <Project
              key={project.slug}
              link={link}
              description={project.data.description}
              title={project.data.title}
              img={project.data.img}
            />
          );
        })}
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
        <div className="ltr:text-left rtl:text-right">
          <h4 className="text-lg line-clamp-1">{title}</h4>
          <p className="pr-2 text-xs md:text-base line-clamp-1">
            {description}
          </p>
        </div>
        <A className="bg-none min-w-fit p-1" href={link}>
          <Icon
            className="w-7 md:w-8 rtl:-scale-100"
            src="/assets/go-to-project.svg"
          />
        </A>
      </div>
    </div>
  );
}
export default ProjectsList;
