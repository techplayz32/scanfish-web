'use client'

import Image from "next/image";
import { redirect  } from 'next/navigation'
import React from "react"
import FishText from '../app/components/fishtext';

const today = new Date();
const currentDate = today.getFullYear();

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 w-full h-16 sm:h-20 border-b border-black/[.08] dark:border-white/[.145] flex items-center justify-between px-4 sm:px-6 relative">
        <div className="flex items-center gap-4">
         <Image
           className="dark:invert"
           src="/scanfish.svg"
           alt="ScanFish logo"
           width={40}
           height={50}
           priority
         />
        </div>
        <div className="flex items-center gap-4 font-[family-name:var(--font-geist-mono)]">
         <a 
           className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
           onClick={() => redirect('/about')}
         >
           About
         </a>
         <a 
           className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
           onClick={() => redirect("https://docs.google.com/spreadsheets/d/e/2PACX-1vTuKCxzIYC4Qc0wPri62JpV_hSKh0YycKAVbx7kIfmQf5kokzpI1jzBFHCHKqMIuQlr2Kj9IyevTcQS/pubhtml")}
         >
           Supported Malware/APT
         </a>
         <a 
           className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
           onClick={() => redirect('/support')}
         >
           Support
         </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-b border-black/[.08] dark:border-white/[.145]"></div>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center font-[family-name:var(--font-geist-mono)]">
        <a className="text-6xl">
          <FishText text="scanfish"/>
        </a>
        <div className="text-center max-w-2xl">
          <a className="text-2xl block mb-2">Scan the fishy fish for your own safety!</a>
          <p className="mb-4">
            A static configuration malware extractor with open-source code.
          </p>
          <ul className="list-inside list-disc text-sm font-[family-name:var(--font-geist-mono)]">
            <li>Make sure to check with list of supported malware/APTs.</li>
            <li>Not every malware supported for detection and configuration extraction.</li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-col">
          <a
            className="rounded-3xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-2xl h-10 sm:h-17 px-4 sm:px-5 sm:min-w-152" // text-sm sm:text-base
            href={"https://github.com/techplayz32/scanfish"}
            target="_blank"
            type="file"
            rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            className="m-2"
            src="/github-mark-white.svg"
            alt="Github icon"
            typeof="submit"
            width={32} // 26
            height={16}
          />
            Visit project on GitHub
          </a>
            <a
                className="rounded-3xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10 sm:h-15 px-4 sm:px-5 sm:min-w-80" // text-sm sm:text-base
                href={"https://discord.gg/zzuHaFFSEc"}
                target="_blank"
                type="file"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    className="dark:invert m-2"
                    src="/discord.svg"
                    alt="Discord icon"
                    typeof="submit"
                    width={32} // 26
                    height={16}
                />
                Visit our Discord server
            </a>
        </div>
          <div className="row-start-1 w-full h-16 sm:h-20 border-t border-black/[.08] dark:border-white/[.145] flex items-center justify-center px-4 sm:px-6 relative self-center text-gray-700">
              <footer className="text-center w-full mt-6">
                  Made with ❤️ by techplayz32 and contributors of ScanFish. <br/>
                  &copy; {currentDate}, ScanFish. Estd 1st of March, in 2025. <br/>
                  <div className="row-auto self-center">
                      <a className="text-sm text-gray-500 dark:text-gray-400 hover:underline m-10" href={"https://discord.gg/zzuHaFFSEc"}>
                          Discord
                      </a>
                      <a className="text-sm text-gray-500 dark:text-gray-400 hover:underline m-10" href={"https://github.com/techplayz32/scanfish"}>
                          Github
                      </a>
                  </div>
              </footer>
          </div>
      </main>
    </div>
  );
}
