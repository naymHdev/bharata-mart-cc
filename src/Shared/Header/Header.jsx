import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import InputSearch from "./InputSearch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2E3192] text-slate-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          <div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Link to="/">
                <h3 className=" text-2xl font-extrabold text-slate-50">
                  indiamart
                </h3>
              </Link>
            </a>
          </div>
          <div className="px-5">
            <InputSearch />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 justify-end">
          <Link
            href="#"
            className="text-sm items-center flex flex-col font-sans leading-6 text-slat-50"
          >
            <CiShoppingTag className=" text-2xl" />
            Shopping
          </Link>
          <Link
            href="#"
            className=" text-sm items-center flex flex-col font-sans leading-6 text-slat-50"
          >
            <BsShop className=" text-2xl" />
            Sell
          </Link>
          <Link
            href="#"
            className=" text-sm items-center flex flex-col font-sans leading-6 text-slat-50"
          >
            <IoIosHelpCircleOutline className=" text-2xl" />
            Help
          </Link>
          <Link
            href="#"
            className=" text-sm items-center flex flex-col font-sans leading-6 text-slat-50"
          >
            <TiMessages className=" text-2xl" />
            Messages
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#"
              className="font-sans leading-6 text-slat-50 flex flex-col items-center"
            >
              <div>
                <HiOutlineUserCircle className=" text-2xl" />
              </div>
              <div className=" flex items-center">
                Sign in <MdOutlineKeyboardArrowDown className=" text-xl" />
              </div>
            </Link>
          </div>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slat-50 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slat-50 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slat-50 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slat-50 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slat-50 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
