import { getCollection } from "astro:content";

async function getLatestFourProjects(lang: string) {
  const latestProjects = (await getAllProjects(lang)).slice(0, 4);

  return latestProjects;
}

async function getAllProjects(lang: string) {
  const projects = (await getCollection("projects")).filter(
    (project) => project.slug.split("/")[0] === lang,
  );
  // Projects sorted by id
  projects.sort((a, b) => b.data.id - a.data.id);
  return projects;
}

export { getLatestFourProjects, getAllProjects };
