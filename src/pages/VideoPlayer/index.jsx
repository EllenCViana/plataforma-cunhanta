import { useParams, useNavigate } from "react-router-dom";
import categoriesData from "../../data/categories.json";
import { BackButton, VideoContainer, VideoFrame, VideoTitle, VideoDescription } from "./VideoPlayer.styles";

export function VideoPlayer() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const findVideo = () => {
    let video = null;

    categoriesData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.items.forEach(item => {
          const videoUrlId = new URL(item.videoUrl).searchParams.get("v");
          if (videoUrlId === videoId) {
            video = item;
          }
        });
      });
    });

    return video;
  };

  const video = findVideo();

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  return (
    <>
      <VideoContainer>
        <BackButton onClick={() => navigate(-1)}>&lt;&lt;Voltar</BackButton>
        <VideoFrame
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          title={video.title}
        />
        <VideoTitle>{video.title}</VideoTitle>
        <VideoDescription>{video.description}</VideoDescription>
      </VideoContainer>
    </>
  );
}
