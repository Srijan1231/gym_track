import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Navigation/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import login from "../../components/asset/login.jpeg";
export default function Login() {
  return (
    <Layout>
      <div className=" p-3">
        <div className=" mt-2 ">
          <div className="flex flex-wrap">
            <div className="flex w-full flex-col md:w-1/2">
              <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                <Link
                  href="/"
                  className="border-b-gray-700 dark:border-b-gray-500 border-b-4 pb-2 text-2xl font-bold text-gray-900 dark:text-white"
                >
                  gymTrack
                </Link>
              </div>
              <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                <p className="text-center text-3xl font-bold">Welcome back</p>
                <p className="mt-2 text-center text-gray-500">
                  Welcome back, please enter your details.
                </p>
                <Button className="-2 mt-8 ">
                  <Image
                    className="mr-2 h-5"
                    src={
                      "https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                    }
                    alt="google icon"
                    width={17}
                    height={10}
                  />
                  Log in with Google
                </Button>
                <div className="relative mt-8 flex h-px place-items-center bg-gray-200 dark:bg-gray-300">
                  <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500 dark:text-gray-300 dark:bg-black">
                    or
                  </div>
                </div>
                <form className="flex flex-col pt-3 md:pt-8">
                  <div className="flex flex-col pt-4">
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                      <input
                        type="email"
                        id="login-email"
                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none rounded-md"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mb-12 flex flex-col pt-4">
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                      <input
                        type="password"
                        id="login-password"
                        className="w-full flex-1 appearance-none rounded-md border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <Button type="submit">Log in</Button>
                </form>
                <div className="py-12 text-center">
                  <p className="whitespace-nowrap text-gray-600">
                    Don&apos;t have an account?
                    <Link
                      href="/signup"
                      className="underline-offset-4 font-semibold text-gray-900 underline"
                    >
                      Sign up for free.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
              <Image
                className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
                src={login}
                alt="Login img"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
