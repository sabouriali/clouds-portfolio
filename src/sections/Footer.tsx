import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineX,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-1/4 w-[100px] h-[100px] bg-sky-400 rounded-full opacity-40 -translate-1/2" />
        <div className="absolute top-[16%] left-1/2 w-[150px] h-[70px] bg-sky-200 rounded-lg opacity-20 -translate-1/2" />
        <div className="absolute top-[35%] left-2/3 w-[100px] h-[100px] bg-sky-600 rounded-lg opacity-30 -translate-1/2" />
      </div>
      <div className="md:block hidden absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-1/4 w-[200px] h-[200px] bg-sky-400 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[35%] left-1/2 w-[250px] h-[150px] bg-sky-200 rounded-lg opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[50%] left-1/3 w-[200px] h-[100px] bg-sky-600 rounded-lg opacity-40 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="relative z-10 text-center mt-8">
        <h1 className="hidden md:block md:text-[12rem] lg:text-[15rem] font-bold text-white/10">
          JOHNDOE
        </h1>
        <h1 className="md:hidden relative mb-12 text-8xl font-bold text-white/10">
          JOHN DOE
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-200">
        <div className="space-y-2">
          <h3 className="font-bold">Contact Me</h3>
          <p>+990788979999</p>
          <p>john@doe.com</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Useful links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                404 Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Socials</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                X
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-gray-400 mt-12 container flex sm:justify-between justify-center items-center gap-10">
        <p>2024. All rights reserved.</p>
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineX size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
