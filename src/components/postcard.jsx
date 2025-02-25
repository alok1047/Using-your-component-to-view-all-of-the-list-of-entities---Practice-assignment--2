import LikeButton from "../components/likebutton";

function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <img
        src={post.profileImage}
        alt="Profile"
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
}

export default PostCard;