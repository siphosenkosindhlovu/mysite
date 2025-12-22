import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProjects } from "../projects/utils";

export function Projects() {
  let allProjects = getProjects();

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">Project Highlights</h2>
      {allProjects.map((post) => (
        <div
          key={post.slug}
          className="border border-neutral-700 rounded-md mb-4 hover:bg-neutral-900 transition-all"
        >
          {/* <div className="w-full aspect-video relative">
            <Image
              src={"https://picsum.photos/id/237/200/300"}
              alt={"Placeholder"}
              fill={true}
              objectFit="cover"
            />
          </div> */}
          <div className="p-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              From {post.date}
            </p>
            <h3 className="text-lg font-medium">{post.project.name}</h3>
            <p className="text-neutral-800 dark:text-neutral-300 tracking-tight mb-4">
              {post.project.description}
            </p>
            <div className="flex flex-wrap items-start gap-2 mb-2">
              {post.project.technologies.map((tech) => (
                <Badge key={tech} variant={"outline"}>
                  {tech}
                </Badge>
              ))}
            </div>
            <div>
              <dl className="flex justify-between">
                <div className="flex-1">
                  <dt className="font-semibold text-sm">Project Cost</dt>
                  <dd>{post.project.cost}</dd>
                </div>
                <div className="flex-1">
                  <dt className="font-semibold text-sm">Duration</dt>
                  <dd>{post.project.duration}</dd>
                </div>
              </dl>
            </div>
            {post.project.link && (
              <p className="border-b border-neutral-400 mt-4 inline-block">
                <a
                  href={post.project.link}
                  className="inline-flex gap-1 items-center"
                >
                  Link <ExternalLink size={18} />
                </a>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
