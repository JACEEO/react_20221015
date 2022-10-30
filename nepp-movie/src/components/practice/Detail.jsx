import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const { userId } = useParams();

  console.log(typeof parseInt(userId));

  const { pathname } = useLocation();

  console.log(pathname.split("/"));
  return (
    <div>
      <h2>Detail</h2>
      <p>Detail {userId}</p>
    </div>
  );
}

export default Detail;
