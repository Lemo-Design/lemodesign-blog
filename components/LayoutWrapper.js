import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <div className="mx-auto hidden w-full max-w-screen-lg px-0 pt-6 sm:px-4 md:block">
          <div className="flex">
            <div className="flex-none">
              <div className="cursor-default">
                <Link href="https://lemo-design.com" target="_self">
                  <span className="group flex cursor-pointer transition duration-300 ease-out hover:scale-110">
                    <svg
                      width="35"
                      height="50"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white group-hover:fill-orange-500"
                    >
                      <path d="M4.803 18.06c8.325 8.591 12.992 13.091 14 13.502 1.01.41 2.914-1.427 5.714-5.51l4.02 3.875C22.793 36.94 19.318 40.291 18.11 39.98 16.299 39.514.846 23.846.091 22.604c-.502-.828 1.068-2.342 4.712-4.543ZM.173 10.2 7.154 3.47A11.733 11.733 0 0 1 11.368.834 13.814 13.814 0 0 1 16.176 0c1.63.011 3.223.318 4.779.923a12.3 12.3 0 0 1 4.127 2.635 11.895 11.895 0 0 1 2.72 3.944 12.05 12.05 0 0 1 .98 4.608 12.36 12.36 0 0 1-.852 4.648c-.588 1.52-1.507 2.882-2.756 4.087l-6.981 6.732L.173 10.2Zm18.752 9.01 1.082-1.043c.817-.788 1.419-1.615 1.804-2.479.386-.864.577-1.723.572-2.578a5.945 5.945 0 0 0-.58-2.506c-.381-.815-.938-1.576-1.672-2.283a7.82 7.82 0 0 0-2.367-1.589 6.739 6.739 0 0 0-2.623-.559c-.887-.004-1.778.179-2.674.551-.896.372-1.744.944-2.545 1.717L8.84 9.484c-.56 1.547 8.873 10.167 10.085 9.726Z"></path>
                    </svg>
                    <h1 className="h-10 text-sm font-semibold leading-10 text-white group-hover:text-orange-500">
                      Lemo-Design
                    </h1>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-2 flex-auto text-center">
              <nav>
                <Link href="https://lemo-design.com/showcases" target="_self">
                  <span className="mx-4 cursor-pointer text-sm text-white transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                    Showcases
                  </span>
                </Link>
                <Link href="https://lemo-design.com/services" target="_self">
                  <span className="mx-4 cursor-pointer text-sm text-white transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                    Services
                  </span>
                </Link>
                <Link href="https://lemo-design.com/about" target="_self">
                  <span className="mx-4 cursor-pointer text-sm text-white transition duration-300 ease-in-out hover:border-b-4 hover:border-orange-500">
                    About us
                  </span>
                </Link>
              </nav>
            </div>
            <div className="flex-none">
              <nav className="transform cursor-pointer transition duration-300 ease-out hover:scale-x-125 hover:scale-y-125">
                <Link href="https://lemo-design.com/contact" target="_self">
                  <span className="rounded-lg border-2 border-white py-2 px-4 font-semibold leading-10 text-white transition-all hover:border-orange-500 hover:bg-orange-500">
                    Contact
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
