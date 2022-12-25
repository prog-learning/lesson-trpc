import { useState } from 'react';
import { trpc } from '../src/utils/trpc';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  console.log(hello);

  const { data: posts, isLoading, refetch } = trpc.post.list.useQuery();
  const createPost = trpc.post.create.useMutation({
    onSuccess: () => {
      refetch();
    },
  });
  const context = trpc.useContext();
  console.log(context);

  const [formValue, setFormValue] = useState({
    name: '',
    content: '',
  });

  const handleSubmit = async () => {
    await createPost.mutateAsync(formValue);
    setFormValue({ name: '', content: '' });
  };

  return (
    <div>
      <h1>Lesson tRPC</h1>
      <input
        type='text'
        placeholder='name'
        value={formValue.name}
        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
      />
      <br />
      <input
        type='text'
        placeholder='content'
        value={formValue.content}
        onChange={(e) =>
          setFormValue({ ...formValue, content: e.target.value })
        }
      />
      <br />
      <button onClick={handleSubmit}>送信</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts?.map((post) => (
            <div key={post.id}>
              <h3>{post.name}</h3>
              <p>{post.content}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
