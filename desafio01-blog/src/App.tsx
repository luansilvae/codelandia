import Header from "./components/Header";
import Posts from "./components/Posts";
import "./index.scss";

import posts from "./posts.json";

function App() {
  return (
    <main>
      <Header />

      <div className="postSection">
        {posts.map((post, index) => (
          <Posts
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
