// ...existing code...
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar for md+ */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r sticky top-0">
        <div className="h-16 flex items-center justify-center text-2xl font-semibold text-indigo-600">
          Dashboard
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-4 py-4">
          <button className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="md:hidden bg-white border-b p-4 flex items-center justify-between">
          <div className="text-lg font-semibold">Dashboard</div>
          <button aria-label="Open menu" className="p-2 rounded-md bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main className="p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
// ...existing code...