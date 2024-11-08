'use client'
import ButtonCustom, { ButtonProps } from "@/components/ButtonCustom";
import Orbit from "@/components/Orbit";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string,
  href: string,
  buttonVariant: ButtonProps['variant']
}[]

export const Header = () => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)

  return (
    <>
      <header className="border-b border-gray200/20 relative z-40">
        <div className="container">
          <div className="h-18 lg:h-20 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div
                className="size-10 bg-gray-200"
                style={{
                  background: 'conic-gradient(from 45deg ,var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-300), var(--color-teal-300), var(--color-violet-400))',
                  maskImage: 'url(/sphereal-logo.svg)',
                  maskSize: 'contain'
                }}
              ></div>
              <div className="font-extrabold text-2xl">sphereal.ai</div>
            </div>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {
                  navItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 last:after:absolute last:after:bottom-0 last:after:right-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20"
                    >{item.name}</a>
                  ))
                }
              </nav>
            </div>
            <div className="hidden lg:flex gap-4">
              {
                loginItems.map((item, i) => (
                  <a key={i} href={item.href}>
                    <ButtonCustom variant={item.buttonVariant}>{item.name}</ButtonCustom>
                  </a>
                ))
              }
            </div>
            <div className="flex lg:hidden items-center">
              <button
                className="size-10 rounded-lg relative border-2 border-transparent"
                style={{
                  background:
                    'linear-gradient(var(--color-gray-950), var(--color-gray-950)) content-box, conic-gradient(from 45deg, var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-300), var(--color-teal-300), var(--color-violet-400)) border-box'
                }}
                onClick={() => setIsMobileNavOpen((curr) => !curr)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300", isMobileNavOpen && 'translate-y-0 rotate-45')}></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={twMerge("w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300", isMobileNavOpen && 'translate-y-0 -rotate-45')}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {
        isMobileNavOpen && (
          <div className="fixed top-18 bottom-0 left-0 right-0 bg-gray-950 z-30 overflow-hidden">
            {/* Start Circle */}
            <div className="absolute-center isolate -z-10">
              <Orbit />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[350px]" />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[500px]" />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[650px]" />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[800px]" />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[950px]" />
            </div>
            <div className="absolute-center isolate -z-10">
              <Orbit className="size-[1100px]" />
            </div>
            {/* End Circle */}
            <div className="container h-full">
              <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
                {
                  navItems.map((item, i) => (
                    <a key={i} href={item.href} className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10">{item.name}</a>
                  ))
                }
                {
                  loginItems.map((item, i) => (
                    <a key={i} href={item.href} className="w-full max-w-xs">
                      <ButtonCustom block variant={item.buttonVariant}>{item.name}</ButtonCustom>
                    </a>
                  ))
                }
              </nav>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Header;
