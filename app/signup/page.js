import { Layout } from "@/components/Layout";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import login from "../../components/asset/login.jpeg";
import { Input } from "@/components/Input";
import { signUpData } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
  return (
    <Layout>
      {/* <!-- component --> */}
      <div className=" flex  justify-center items-center  ">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2  hidden  lg:block">
          <Image
            src={login}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
            width={400}
            height={500}
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
          <form>
            {signUpData.map((item, i) => (
              <Input key={i} item={item} />
            ))}
            {/* <!-- Remember Me Checkbox --> */}
            <div className="flex items-center space-x-2 mb-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 ">
              <Link href="/" className="hover:underline">
                Forgot Password?
              </Link>
            </div>
            {/* <!-- Login Button --> */}
            <Button
              type="submit"
              className=" font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </Button>
          </form>
          {/* <!-- Sign up  Link --> */}
          <div className="mt-6 text-center">
            <span>Do you have an account?</span>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
