import axios from 'axios';

const Post = ({id, comments}) => {
  return (
    <div>
      <h1>You are looking at Post # {id}</h1>
      <ul>
        {comments.map(comment=>(
          <Comment key={comment.id} {...comment}/>
        ))}
      </ul>
    </div>
  )
}

const Comment= ({email, body}) => {
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
  
}
Post.getInitialProps = async ({query}) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const {data} = res;
  return { ...query, comments: data};
}

export default Post;