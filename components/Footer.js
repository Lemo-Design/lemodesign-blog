import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <>
      <div className="bg-warm-gray-200">
        <div className="mx-auto w-full max-w-screen-lg px-0 sm:px-4 lg:flex">
          <div className="flex-none text-center md:w-1/2 md:text-left lg:w-1/3">
            <span className="mx-auto mb-6 block h-16 w-16 md:mx-0 md:mb-3 md:h-10 md:w-11"></span>
            <h4 className="h-18 mb-12 font-semibold leading-10 text-white sm:text-3xl md:text-sm">
              <svg
                width="35"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-orange-500"
              >
                <path d="M4.803 18.06c8.325 8.591 12.992 13.091 14 13.502 1.01.41 2.914-1.427 5.714-5.51l4.02 3.875C22.793 36.94 19.318 40.291 18.11 39.98 16.299 39.514.846 23.846.091 22.604c-.502-.828 1.068-2.342 4.712-4.543ZM.173 10.2 7.154 3.47A11.733 11.733 0 0 1 11.368.834 13.814 13.814 0 0 1 16.176 0c1.63.011 3.223.318 4.779.923a12.3 12.3 0 0 1 4.127 2.635 11.895 11.895 0 0 1 2.72 3.944 12.05 12.05 0 0 1 .98 4.608 12.36 12.36 0 0 1-.852 4.648c-.588 1.52-1.507 2.882-2.756 4.087l-6.981 6.732L.173 10.2Zm18.752 9.01 1.082-1.043c.817-.788 1.419-1.615 1.804-2.479.386-.864.577-1.723.572-2.578a5.945 5.945 0 0 0-.58-2.506c-.381-.815-.938-1.576-1.672-2.283a7.82 7.82 0 0 0-2.367-1.589 6.739 6.739 0 0 0-2.623-.559c-.887-.004-1.778.179-2.674.551-.896.372-1.744.944-2.545 1.717L8.84 9.484c-.56 1.547 8.873 10.167 10.085 9.726Z"></path>
              </svg>
              Lemo-Design
            </h4>
            <p className="mt-6">
              <a
                href="&#109;&#097;&#105;&#108;&#116;&#111;:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#109;&#111;&#045;&#100;&#101;&#115;&#105;&#103;&#110;&#046;&#099;&#111;&#109;"
                rel="noreferrer"
                className="text-white transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
              >
                &#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#109;&#111;&#045;&#100;&#101;&#115;&#105;&#103;&#110;&#046;&#099;&#111;&#109;
              </a>
            </p>
            <p className="mt-8 py-2 text-white">
              EU Office.{' '}
              <a
                href="tel:+3158264242"
                className="font-semibold transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
              >
                +31 (0)58 266 42 42
              </a>
            </p>
            <p className="py-2 text-white">
              US Office.{' '}
              <a
                href="tel:+15032341245"
                className="font-semibold transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
              >
                +1 (503) 234 1245
              </a>
            </p>
          </div>

          <div className="mt-24 flex justify-center text-white lg:flex lg:w-1/2 lg:flex-none">
            <div className="w-1/3 text-center md:text-left">
              <h4 className="text-warm-gray-500 text-sm">Who are we</h4>
              <ul className="mt-2">
                <li className="py-2">
                  <Link href="/about">
                    <a className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                      About us
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="https://lemo-design.com/careers">
                    <a className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                      Careers
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="https://lemo-design.com/contact">
                    <a className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/3 text-center md:text-left">
              <h4 className="text-warm-gray-500 text-sm">Things we do</h4>
              <ul className="mt-2">
                <li className="py-2">
                  <Link href="https://lemo-design.com/showcases">
                    <a className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                      Showcase
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="https://lemo-design.com/services" replace>
                    <a className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <a
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                    href="https://helpdesk.lemo-design.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Helpdesk
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/3 text-center md:text-left">
              <h4 className="text-warm-gray-500 text-sm">Partners</h4>
              <ul className="mt-2">
                <li className="py-2">
                  <a
                    href="https://lemo-hosting.com"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    Lemo-Hosting
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="https://lemo-design.com"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    Lemo-Print
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="https://about.google"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    Google
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 w-full text-white md:w-fit">
            <h4 className="text-center text-sm md:text-left">Follow us</h4>
            <ul className="mx-auto mt-4 flex w-fit scale-150 md:scale-100">
              <li>
                <div className="w-fit transform cursor-pointer transition duration-300 ease-out hover:scale-x-125 hover:scale-y-125">
                  <a
                    href="https://facebook.com/lemodesign"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 21"
                      className="h-6 w-6 fill-white opacity-75 hover:opacity-100"
                    >
                      <path d="M21 10.564c0-2.02-.575-3.996-1.657-5.696A10.52 10.52 0 0 0 14.895.97 10.442 10.442 0 0 0 3.68 2.532 10.57 10.57 0 0 0 .452 7.5a10.627 10.627 0 0 0-.057 5.934 10.574 10.574 0 0 0 3.132 5.03A10.48 10.48 0 0 0 8.859 21v-7.382H6.193v-3.054H8.86V8.236c0-2.648 1.568-4.11 3.966-4.11.788.01 1.573.08 2.351.205v2.601h-1.325a1.51 1.51 0 0 0-1.122.301 1.529 1.529 0 0 0-.588 1.35v1.98h2.909l-.466 3.055h-2.45V21a10.484 10.484 0 0 0 6.348-3.572A10.604 10.604 0 0 0 21 10.564Z"></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li>
                <div className="mx-3 w-fit transform cursor-pointer transition duration-300 ease-out hover:scale-x-125 hover:scale-y-125">
                  <a
                    href="https://instagram.com/lemodesignn"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 21"
                      className="h-6 w-6 fill-white opacity-75 hover:opacity-100"
                    >
                      <path d="M15.181 6.368c.663 0 1.2-.564 1.2-1.26 0-.696-.537-1.26-1.2-1.26-.662 0-1.2.564-1.2 1.26 0 .696.538 1.26 1.2 1.26ZM10 15.75c-2.758 0-5-2.355-5-5.25s2.242-5.25 5-5.25 5 2.355 5 5.25-2.242 5.25-5 5.25Zm0-7.875c-1.379 0-2.5 1.177-2.5 2.625s1.121 2.625 2.5 2.625 2.5-1.177 2.5-2.625-1.121-2.625-2.5-2.625Z"></path>
                      <path d="M15 21H5c-2.57 0-5-2.552-5-5.25V5.25C0 2.551 2.43 0 5 0h10c2.57 0 5 2.551 5 5.25v10.5c0 2.698-2.43 5.25-5 5.25ZM5 2.625c-1.169 0-2.5 1.398-2.5 2.625v10.5c0 1.25 1.309 2.625 2.5 2.625h10c1.169 0 2.5-1.398 2.5-2.625V5.25c0-1.227-1.331-2.625-2.5-2.625H5Z"></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li>
                <div className="mr-3 w-fit transform cursor-pointer transition duration-300 ease-out hover:scale-x-125 hover:scale-y-125">
                  <a
                    href="https://twitter.com/lemodesign"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 17"
                      className="h-6 w-6 fill-white opacity-75 hover:opacity-100"
                    >
                      <path d="M21 1.962c-.788.392-1.575.523-2.494.653.919-.523 1.575-1.307 1.838-2.353-.788.523-1.707.784-2.757 1.046C16.8.523 15.62 0 14.437 0c-2.23 0-4.2 1.962-4.2 4.315 0 .393 0 .654.132.916C6.825 5.1 3.544 3.4 1.444.785 1.05 1.438.919 2.092.919 3.008c0 1.438.787 2.746 1.969 3.53-.657 0-1.313-.261-1.97-.523A4.225 4.225 0 0 0 4.332 10.2c-.394.13-.787.13-1.181.13-.262 0-.525 0-.788-.13a4.25 4.25 0 0 0 4.07 3.008c-1.445 1.177-3.282 1.83-5.382 1.83H0C1.969 16.216 4.2 17 6.563 17c7.875 0 12.206-6.539 12.206-12.162v-.523c.919-.653 1.706-1.438 2.231-2.353Z"></path>
                    </svg>
                  </a>
                </div>
              </li>
              <li>
                <div className="w-fit transform cursor-pointer transition duration-300 ease-out hover:scale-x-125 hover:scale-y-125">
                  <a
                    href="https://linkedin.com/company/lemodesign"
                    rel="noreferrer"
                    target="_blank"
                    className="transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 21"
                      className="h-6 w-6 fill-white opacity-75 hover:opacity-100"
                    >
                      <path d="M19.956 0H.913A.894.894 0 0 0 0 .919v19.293c0 .394.391.788.913.788h19.174a.894.894 0 0 0 .913-.919V.92C20.87.394 20.478 0 19.956 0ZM6.13 17.85h-3V7.875h3.13v9.975h-.13ZM4.696 6.562c-1.044 0-1.826-.918-1.826-1.837 0-1.05.782-1.837 1.826-1.837 1.043 0 1.826.787 1.826 1.837-.13.919-.913 1.838-1.826 1.838ZM17.739 17.85h-3.13v-4.856c0-1.181 0-2.625-1.566-2.625-1.565 0-1.826 1.312-1.826 2.625v4.987h-3.13V7.875h3v1.313c.391-.788 1.435-1.576 2.87-1.576 3.13 0 3.652 2.1 3.652 4.726v5.512h.13Z"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-screen-lg py-6  px-4 text-center md:px-4 md:text-left">
          <p className="text-sm text-white">Legal {`© ${new Date().getFullYear()}`}</p>
        </div>
      </div>
    </>
  )
}
