import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/0xlightning')
  //   .then((res) => res.json())
  //   .then( data => {
  //           setData(data)
  //           console.log(data)
  //   })
  // }, [])
  
  return (
    <div className='text-center p-5 bg-gray-500 text-white'>
      <h1 className='text-3xl text-red-400'>
        Github : {data.name}
      </h1>
      <h3>
        Bio: {data.bio} <br />
        followers: {data.followers}
      </h3>
      <div className='p-4 flex justify-center items-center'>
        <img src={data.avatar_url} width={300} alt="profile" />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/0xlightning')
  return response.json()
}