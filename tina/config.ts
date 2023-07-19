import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Extracto",
            required: true,
          },
          {
            type: "string",
            name: "publishDate",
            label: "Fecha de publicación",
            required: true,
          },
          {
            type: "string",
            name: "image",
            label: "Imagen Principal",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Categoria",
            required: true,
            options: [
              {
                label: "General",
                value: "general",
              },
              {
                label: "Politica",
                value: "politica",
              },
              {
                label: "Internacional",
                value: "internacional",
              },
              {
                label: "Tecnologia",
                value: "tecnologia",
              },
              {
                label: "Turismo",
                value: "turismo",
              },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
            required: true,
            options: [
              {
                label: "Eve",
                value: "eve",
              },
            ],
          },
        ],
      },
    ],
  },
});