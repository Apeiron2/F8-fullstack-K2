const Page = async ({ params }) => {
  const { hash } = params;
  const response = await fetch(`http://localhost:3000/shorten/${hash}`);
  const data = await response.json();
  return (
    <div>
      <div>
        <p>{hash}</p>
      </div>
      {data.map((item) => (
        <div key={item.id} className="mb-3 border-2 p-3 rouded">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
