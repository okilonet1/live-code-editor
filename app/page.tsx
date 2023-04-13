"use client";

import { Inter } from "next/font/google";
import { AlertProvider, useAlert } from "@/context/alertContext";
import CodeEditor from "@/components/Editor";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import InputOutput from "@/components/InputOutput";
import { CodeProvider } from "@/context/codeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AlertProvider>
      <CodeProvider>
        <TopBar />
        <CodeEditor />
        <InputOutput />
        <Footer />
      </CodeProvider>
    </AlertProvider>
  );
}
