import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;