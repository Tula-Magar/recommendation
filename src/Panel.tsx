import { useParams } from "react-router-dom";
import MovieDetailPage from "./MovieDetailPage";
import RelatedLinks from "./RelatedLinks";

const ResponsiveThreePanelPage = () => {
  const { id } = useParams();
  const currentMovieId = Number(id);

  return (
    <div className="responsive-three-panel-page">
      <div className="panel panel-1">
        <RelatedLinks currentMovieId={currentMovieId} />
      </div>
      <div className="panel panel-2">
        <MovieDetailPage />
      </div>
      <div className="panel panel-3">This is the third panel.</div>
    </div>
  );
};

export default ResponsiveThreePanelPage;
