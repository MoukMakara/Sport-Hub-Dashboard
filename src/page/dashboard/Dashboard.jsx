import { FaUsers } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { MdEmojiEvents } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import PieChart from "./PieChart";


export default function Dashboard() {
  return (
    <section className=" bg-slate-100">
      <div className="p-4 sm:ml-64">
        <h2 className="flex justify-start items-center text-2xl mb-5">
          Dashboard
        </h2>
        <div className="rounded-lg dark:border-gray-700">
          {/* grid 4 start */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-4 mt-2">
            {/* card 1 */}
            <div className="max-w-full h-44 rounded-[25px] bg-white p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="mr-8">
                  <h2 className="text-xl font-semibold">Total User</h2>
                </div>
                <div className="h-10">
                  <FaUsers className="w-14 h-14 rounded-2xl bg-violet-200 p-2 fill-violet-400 stroke-violet-400" />
                </div>
              </div>
              <div className="my-2">
                <h2 className="text-4xl font-bold">
                  <span>2680</span> +
                </h2>
              </div>
            </div>
            {/* card 1 end */}

            {/* card 2 */}
            <div className="max-w-full h-44 rounded-[25px] bg-white p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="mr-8">
                  <h2 className="text-xl font-semibold">Total Clubs</h2>
                </div>
                <div className="h-10">
                  <IoIosFootball className="w-14 h-14 rounded-2xl bg-yellow-200 p-2 fill-yellow-400 stroke-yellow-400" />
                </div>
              </div>
              <div className="my-2">
                <h2 className="text-4xl font-bold">
                  <span>2680</span> +
                </h2>
              </div>
            </div>
            {/* card 2 end */}

            {/* card 3 */}
            <div className="max-w-full h-44 rounded-[25px] bg-white p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="mr-8">
                  <h2 className="text-xl font-semibold">Total Events</h2>
                </div>
                <div className="h-10">
                  <MdEmojiEvents className="w-14 h-14 rounded-2xl bg-green-200 p-2 fill-green-400 stroke-green-400" />
                </div>
              </div>
              <div className="my-2">
                <h2 className="text-4xl font-bold">
                  <span>2680</span> +
                </h2>
              </div>
            </div>
            {/* card 3 end */}

            {/* card 4 */}
            <div className="max-w-full h-44 rounded-[25px] bg-white p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="mr-8">
                  <h2 className="text-xl font-semibold">Total News</h2>
                </div>
                <div className="h-10">
                  <IoNewspaper className="w-14 h-14 rounded-2xl bg-orange-200 p-2 fill-orange-400 stroke-orange-400" />
                </div>
              </div>
              <div className="my-2">
                <h2 className="text-4xl font-bold">
                  <span>2680</span> +
                </h2>
              </div>
            </div>
            {/* card 4 end */}
          </div>

          {/* grid 4 end */}

          {/* section 2 */}
          <div className="flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <PieChart/>
          </div>
        </div>
      </div>
    </section>
  );
}
