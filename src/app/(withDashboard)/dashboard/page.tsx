import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage =  async() => {
  const session = await getServerSession(authOptions)
  console.log(session, "jahid ");
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard ({session?.user?.name})</h1>
      <p className="text-xl text-center mt-10">Welcome To Dashboard ({session?.user?.email})</p>
      <Image
       src={session?.user?.image}
       width={500}
       height={500}
       alt="jahid"
      />
    </div>
  );
};

export default DashboardPage;
