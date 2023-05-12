import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'About', to: 'about', current: false },
  { name: 'Team', to: 'team', current: false },
  { name: 'Contact', to: 'contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {
  return (
    <Disclosure as="nav" className="bg-white fixed w-full shadow">
      {({ open }) => (
        <>
          <div className="flex flex-items-start max-w-8xl px-2 sm:px-6 lg:px-12">
            <div className="relative flex h-20 items-center bg-ourRed ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  sm:items-stretch sm:justify-end mt-6 ">
                <div className="flex flex-shrink-0 ">
                      {/* Logo */}
                  <img
                    className="flex justify-start hidden h-16 w-auto lg:block "
                    src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,w_100/v1682497884/Vikers_logo-1-removebg-preview_pdzctv.png"
                    alt="Vikers"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        activeClass="active-hover"
                        key={item.name}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        className={classNames(
                          item.current ? ' text-slate-900' : 'text-slate-900 hover:bg-white hover:text-ourYellow',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Match Center dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex ">
                      <span className="text-slate-900  px-0 py-2 text-sm font-medium cursor-pointer hover:bg-white hover:text-ourYellow"> Match Center</span>
                      
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="fixtures"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            fixtures
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="leaguetable"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            League Table
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="results"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Results
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                  className={classNames(
                    item.current ? 'bg-ourYellow text-white' : 'text-slate-900 hover:bg-ourYellow hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
