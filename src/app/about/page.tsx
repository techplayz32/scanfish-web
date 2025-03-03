'use client'

import Image from "next/image";
import ConstructionText from '../components/constructiontext';
import {redirect} from "next/navigation";
import React from "react";

const today = new Date();
const currentDate = today.getFullYear();

export default function About() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="row-start-1 w-full h-16 sm:h-20 border-b border-black/[.08] dark:border-white/[.145] flex items-center justify-between px-4 sm:px-6 relative">
                <div className="flex items-center gap-4">
                    <Image
                        className="dark:invert"
                        src="/scanfish.svg"
                        alt="ScanFish logo"
                        onClick={() => redirect("/")}
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
                    <ConstructionText text="About Us"/>
                </a>
                <div className="text-center max-w-2xl">
                    <a className="text-2xl block mb-2">A little bit about us!</a>
                    <p className="mb-4">
                        We (techplayz32.. only one right now) making a static malware configuration extractor for safety of internet users! Basically, we are small team of people who helping make internet a little bit safe!
                    </p>
                    <a className="text-2xl block mb-2">Origin of this project</a>
                    <p className="mb-4">
                        I made this project when I got into malware researching and analysis, since with more time, more skidders, stealers and RATs started appearing in internet. And more of my friends, random people started getting hacked and their accounts stolen... which later were used for massspamming to people links to some crypto-sh#t and another stuff. <br/>
                        Later, websites like <a className={"text-gray-500 dark:text-gray hover:underline"} href={"https://uncoverit.org"}>Uncover It</a> started popping on, but.. you will ask me,<b/> <i>"what's up with Uncover It?"</i> - It is not open source project and not self-hostable. <i>"And, it is not open source or self-hostable, but it does it's job!"</i> - Yeah, it indeed does it's job, but what if I want to contribute to it or know how the backend or frontend works?
                    </p>
                    <a className="text-2xl block mb-2">And that's why..!</a>
                    <p className="mb-4">I created this project - ScanFish! I didn't expect that people would <b>ACTUALLY</b> interest in it, so yup!</p>
                    <a className="text-2xl block mb-2">FAQ</a>
                    <div className="mb-4">
                        ❓ Why you named it "ScanFish"<br/>
                        💡 Because, I liked the other project <a className={"text-gray-500 dark:text-gray hover:underline"} href={"https://github.com/a0rtega/pafish/tree/master"}>Pafish</a>, a testing tool to detect if machine is virtual! The name of it looked good and yea, I decided on this name!

                        <br/><br/>❓ What the <b>HELL</b> is <i>"static malware configuration extractor"</i>?<br/>
                        💡 A malware configuration extractor is a tool that helps security experts quickly find important details hidden inside a virus or hacking program. These details include things like:<br/>
                        <ul className="list-inside list-disc p-2 font-[family-name:var(--font-geist-mono)]">
                            <li>Where the malware connects online (like discord webhook, token)</li>
                            <li>What malware family of it</li>
                            and etc.
                        </ul><br/>

                        ❓ How to get.. back on homepage?<br/>
                        💡 Click on ScanFish icon up there.<br/><br/>

                        ❓ Where I can see the source code of project and communicate with you and developers?<br/>
                        💡 Right below this FAQ! Click on these buttons to go on our Github repository and Discord server!
                    </div>
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