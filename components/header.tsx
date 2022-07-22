import Container from "./container";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import logoCompact from "../public/logo-compact.svg";

const Header = (props: any) => {
    const router = useRouter();
    return (
        <div
            className={`${props.className} backdrop-blur-lg backdrop-brightness-100   md:bg-white/50`}
        >
            <Container>
                <Disclosure as="nav" className="">
                    {({ open }) => (
                        <>
                            <div className="px-4 sm:px-6 md:px-0 ">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center w-full justify-between">
                                        <div className="flex-shrink-0">
                                            <div className="flex ">
                                                <Link href="/">
                                                    <a className="hover:cursor-pointer">
                                                        <Image
                                                            src={logoCompact}
                                                            alt="Interest Calculator logo"
                                                            height="50"
                                                            layout="intrinsic"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block sm:ml-6">
                                            <div className="flex space-x-8 font-semibold">
                                                <Link href="/">
                                                    <a
                                                        className={
                                                            "text-slate-900 hover:text-slate-600 hover:underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-cyan-500 transition duration-500"
                                                        }
                                                    >
                                                        Home
                                                    </a>
                                                </Link>
                                                <Link href="/about">
                                                    <a
                                                        className={
                                                            "text-slate-900 hover:text-slate-600 hover:underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-cyan-500 transition duration-500"
                                                        }
                                                    >
                                                        About
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <MenuIcon
                                                    className="block h-6 w-6 "
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 ">
                                    <div className="bg-white rounded-md flex flex-col p-4 space-y-5">
                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                        <Link href="/">
                                            <a
                                                className={
                                                    router.pathname === "/"
                                                        ? "text-slate-900 underline underline-offset-4 decoration-2 decoration-brand-orange"
                                                        : "text-slate-600 hover:text-slate-900 "
                                                }
                                            >
                                                Home
                                            </a>
                                        </Link>
                                        <Link href="/about">
                                            <a
                                                className={
                                                    router.pathname === "/about"
                                                        ? "text-slate-900 underline underline-offset-4 decoration-2 decoration-brand-orange"
                                                        : "text-slate-600 hover:text-slate-900 "
                                                }
                                            >
                                                About
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </Container>
        </div>
    );
};

export default Header;
