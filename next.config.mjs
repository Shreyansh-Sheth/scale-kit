import { withAxiom } from "next-axiom";
import withMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};
/** @type {withMDX.NextMDXOptions} */
const mdxOptions = {
  options: {
    rehypePlugins: [rehypeHighlight],
  },
};

export default withMDX(mdxOptions)(withAxiom(nextConfig));
