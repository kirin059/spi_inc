const Posts = (props) => {
    const {articles} = props.posts;
  
    return (
      <div>
        <p>This is post page.</p>
        <ul>
          {articles.map((article, idx) => (
            <li key={idx}>{article.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export async function getStaticProps() {
    const res = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=484073055b364b94b553a82ab633e949');
    const posts = await res.json();
  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        posts
      },
      revalidate: 1,
    };
  };
  
  export default Posts;