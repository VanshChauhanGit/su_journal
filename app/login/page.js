import Wrapper from "@/components/Wrapper";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession();

  if (session) {
    redirect("/user/dashboard");
  }

  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-teal-700">
        Login to Your Account
      </h1>
      <hr className="border-t border-teal-700 my-2" />

      <Login />
    </Wrapper>
  );
}

export default page;
