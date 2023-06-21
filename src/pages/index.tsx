import { getSession } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession(req, res);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tasks App - Lief Assignment</title>
        <meta name="description" content="A pomodoro-based to-do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid place-content-center h-screen bg-gray-100">
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">To-Do WebAPP</h1>
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">A Pomodoro-Based To-Do App</h2>
            <p className="text-gray-600 mb-6">
              Login or sign up to start using the app.
            </p>
            <div className="border p-3 bg-gray-200 mb-6">
              <h3 className="text-lg font-semibold">Demo Account</h3>
              <div className="flex flex-col space-y-2">
                <div>
                  <span className="text-gray-600">Email:</span>
                  <span className="select-all ml-1">sample@example.com</span>
                </div>
                <div>
                  <span className="text-gray-600">Password:</span>
                  <span className="select-all ml-1">sample@12345</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link target="_blank" href="/api/auth/login">
                  Login/Signup
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
