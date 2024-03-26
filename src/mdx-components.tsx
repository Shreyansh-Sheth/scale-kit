import type { MDXComponents } from "mdx/types";
import "@/style/github-dark.css";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
