export const getVideoId = (url) => {
    try {
      if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1].split("?")[0];
      } else if (url.includes("/embed/")) {
        return url.split("/embed/")[1].split("?")[0];
      } else {
        return new URL(url).searchParams.get("v");
      }
    } catch (error) {
      console.error("Erro ao extrair o ID do vídeo:", error);
      return null;
    }
  };
  