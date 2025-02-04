
import {client} from "@repo/db/client"

export default async function Home() {

  const user = await client.user.findFirst();
  return (

    <div className="bg-gray-500  h-screen" id="outside">

      <div className="bg-red-700 flex-grow"  id="inner">

        This is really a good tech
      </div>

  <div className="flex-col flex space-x-2 p-6  bg-amber-700">
  <div className=" bg-red-500 p-4">A</div>
  <div className=" bg-blue-500 p-4">B</div>
  <div className="flex-1 bg-green-500 p-4">C</div>
</div>





      {user?.username}
      {user?.password}


    </div>
  );
}
