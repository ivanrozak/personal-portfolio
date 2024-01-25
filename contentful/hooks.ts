import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "u1dczeiyhyif",
    accessToken: "ZD8ZViPVoA4AsY78pxtnTB8U_n0MXooR4YpIvOBaA6Q",
    environment: "master",
    host: "https://preview.contentful.com",
  });

  const getArticles = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "article",
      });
      const sanitizedEntries = entries.items.map((item) => {
        const updatedAt = item.sys.updatedAt;
        // @ts-ignore
        const heroImage = item.fields.heroImage?.fields?.file?.url || "";
        return {
          ...item.fields,
          updatedAt,
          heroImage,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`error fetch: ${error}`);
    }
  };

  const getArticleDetail = async (slug: string) => {
    try {
      const entries = await client.getEntries({
        content_type: "article",
      });
      const index = entries.items.findIndex((obj) => obj.fields.slug === slug);
      if (index === -1) {
        return {
          title: "",
          content: null,
          updatedAt: "",
          heroImage: "",
        };
      } else {
        return {
          ...entries.items[index].fields,
          updatedAt: entries.items[index].sys.updatedAt,
          // @ts-ignore
          heroImage: entries.items[index].fields.heroImage?.fields?.file?.url,
          content: entries.items[index].fields.content,
        };
      }
    } catch (error) {
      console.log(`error fetch: ${error}`);
    }
  };

  return { getArticles, getArticleDetail };
};

export default useContentful;
