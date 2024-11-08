import ButtonCustom, { ButtonProps } from "@/components/ButtonCustom";

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
  return (
    <header className="border-b border-gray200/20">
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
                <ButtonCustom key={i} variant={item.buttonVariant}>{item.name}</ButtonCustom>
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
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 -translate-y-1"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-0.5 bg-gray-100 translate-y-1"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
