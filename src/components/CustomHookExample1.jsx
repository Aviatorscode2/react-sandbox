import useFetch from '../hooks/useFetch';

// we an use useFetch.js to store states and use then inside this component, this is an example of a custom hook, hooks are save using the prefix 'use'
function CustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {} //useFetch takes in a second argument
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample1;
