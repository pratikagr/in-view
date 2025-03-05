export default async function Home() {
const API_URL = `https://newsapi.org/v2/everything?q=english&apiKey=${process.env.NEWS_API}`;
const response = await fetch(API_URL,{
  method:"GET",
  headers:{
    "content-type":"application/json",
  }
});

const data = await response.json()
console.log(data);
  return (
    <div className="m-12 flex flex-col items-center space-y-4">
      <div className="bg-white flex justify-center h-[70vh] w-[80vh] rounded-md">
      {data.articles[0].urlToImage}
      </div>
      <div className="flex flex-col w-[80vh] h-[30vh] bg-white text-center rounded-md">
        <div>{data.articles[0].title} </div>
        <div>{data.articles[0].description}</div>
      </div>
    </div>
  );
}
