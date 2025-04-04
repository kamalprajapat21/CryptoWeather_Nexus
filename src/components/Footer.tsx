import { Github, LinkedinIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-auto shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Branding */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Kamal Prajapat</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Building modern, user-friendly web applications with MERN Stack.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-1">Quick Links</h3>
            <a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
              Home
            </a>
            <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
              Projects
            </a>
            <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
              Contact
            </a>
            <a href="mailto:kamalprajapat7117@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300">
              Email Me
            </a>
          </div>

          {/* Right: Social */}
          <div>
            <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kamalprajapat21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kamal-prajapat-b19192244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
              >
                <LinkedinIcon className="h-5 w-5 mr-2" />

              </a>
              <a
                href="mailto:kamalprajapat7117@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Kamal Prajapat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
