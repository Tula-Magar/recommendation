import React from "react";
import { useParams } from "react-router-dom";
import MovieDetailPage from "../Movies/MovieDetailPage";
import RelatedLinks from "./RelatedLinks";

const ResponsiveThreePanelPage = () => {
  const { id } = useParams();
  const currentMovieId = Number(id);

  return (
    <div key={currentMovieId} className="responsive-three-panel-page">
      <div className="panel panel-1">This is the first panel.</div>
      <div className="panel panel-2">
        <MovieDetailPage />
      </div>
      <div className="panel panel-3">
        <RelatedLinks currentMovieId={currentMovieId} />
      </div>
    </div>
  );
};

export default ResponsiveThreePanelPage;
