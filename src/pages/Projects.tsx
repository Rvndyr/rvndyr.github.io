import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    title: "Kubernetes Cluster Automation",
    description: "Automated K8s cluster deployment with Terraform and Ansible on AWS EKS.",
    tags: ["Kubernetes", "Terraform", "AWS", "Ansible"],
    githubUrl: "",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Reusable CI/CD pipeline templates for multiple deployment scenarios.",
    tags: ["Jenkins", "Docker", "GitLab CI", "GitHub Actions"],
    githubUrl: "",
  },
  {
    title: "Cloud Cost Optimizer",
    description: "Tool for analyzing and optimizing cloud resource costs across providers.",
    tags: ["Python", "AWS", "Azure", "Cost Management"],
    githubUrl: "",
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">DevOps Projects</h1>
      <p className="mt-4 text-gray-600">
        A collection of my key projects in infrastructure automation, cloud architecture,
        and DevOps practices.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}