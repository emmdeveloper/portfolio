import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`,
  },
};
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true },
    githuburl: { type: "string", required: false },
    liveurl: { type: "string", required: false },
  },
  computedFields: projectComputedFields,
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project],
});
