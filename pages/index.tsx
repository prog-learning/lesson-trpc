import { trpc } from '../src/utils/trpc';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });

  console.log(hello.data);

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lesson tRPC</h1>
    </div>
  );
}
