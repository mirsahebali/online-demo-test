import Head from "next/head";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Result from "./components/Result";
import { useState } from "react";
export default function Home() {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  return (
    <>
      <Head>
        <title>Online Demo Test App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <div className="main-screen">
          {start ? (
            <Test />
          ) : (
            <div className="w-full h-screen flex justify-center items-center bg-slate-600">
              <button
                className="text-2xl font-bold border-blue-500 border-2 p-10 bg-white hover:bg-blue-500 hover:text-white rounded "
                onClick={() => setStart(true)}
              >
                Start
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
