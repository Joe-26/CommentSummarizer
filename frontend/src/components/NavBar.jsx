export default function NavBar() {
  return (
    <div className=" fixed w-full top-10">
      <div className="flex justify-between bg-gray-100 shadow rounded-full px-8 py-2 mx-52">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>Insightful Comments</div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center gap-10">
          <div className="hover:-translate-y-1 duration-300">Features</div>
          <div className="hover:-translate-y-1 duration-300">Pricing</div>
          <div className="hover:-translate-y-1 duration-300">Resources</div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          <div className="rounded-xl bg-onyx text-white px-4 py-2 hover:bg-gray-800 hover:-translate-y-0.5 duration-300">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
}
