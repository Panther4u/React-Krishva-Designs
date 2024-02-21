// import react from 'react'
import SideNav from '../../components/DashBoard/Sidebar'
// import HeaderNav from '../../components/DashBoard/Header'
import UserDashBorad from '../../components/DashBoard/User'
// import ProfileBanner from '../../components/DashBoard/ProfileBanner'
import PaginationDashBoard from '../../components/DashBoard/PaginationDashBoard'
// import Table from '../../components/DashBoard/Table'
import Floating from '../../components/DashBoard/Floating'


function Dashboard() {
  return (
    <>

    <div className="bg-gray-100  text-gray-600 px-2 py-5 h-screen position-relative text-sm">
      <SideNav/>
      <div className=" flex flex-col">
      {/* <HeaderNav/> */}
        <div className="flex-col flex position-absolute ">
      <UserDashBorad/>
          <div className="flex flex-col  bg-white dark:bg-gray-100 mt-3">
      {/* <ProfileBanner/> */}
            <div className="flex">
      <PaginationDashBoard/>
      {/* <Table/> */}
              {/* <div className="flex w-full mt-5 space-x-2 justify-end">
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                  <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">1</button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">3</button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">4</button>
                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                  <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Floating/>
    </div>

    
    </>
  )
}

export default Dashboard