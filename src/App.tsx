import CommentCounter from './CommentCounter/CommectCounter';
import { comments } from "./data/comment";

function App() {
  return (
    <div className="text-center my-12">
      <h1 className="text-3xl">Count Comment</h1>
      <CommentCounter comments={comments} />
    </div>
  );
}
export default App