
import LoginForm from "./components/Forms/LoginForm";
function App() {
  return (
    <div className="App border bg-gray-200">
      <div class="block lg:flex items-center justify-center lg:justify-between h-screen">
        {/* Items center in the middle of the page */}
        <div class="w-96">
        </div>
        <div class=" w-full">
          <div class="block">
            <h1 class="items-center justify-center font-extrabold text-blue-600 text-6xl">
              facebook
            </h1>
            <p class="font-md font-small text-3xl ">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>

        </div>
        <div class="w-64">
        </div>
        <div class="w-full">
          <form class="max-w-md bg-white border rounded-lg shadow-2xl shadow-black-300 ">
            <div class="px-6 py-6">
              <div class="mb-6">
                <input class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 focus:border-blue-700" id="email" type="email" placeholder="Email or Phone number" />
              </div>
              <div class="mb-6">
                <input class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 focus:border-blue-700" id="password" type="password" placeholder="Password" />
              </div>
              <div class="flex items-center justify-center">
                <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Log In
                </button>
              </div>
              <div class="flex items-center justify-center mt-5">
                <a class="text-base text-blue-500  hover:underline" href="#">
                  Forgot Password?
                </a>
              </div>
              <div class="mt-7 mb-7">
                <hr />
              </div>
              <div class=" flex items-center justify-center">
                <input class="bg-green-500 hover:bg-green-600 cursor-pointer border rounded-lg px-5 py-3 items-center justify-between font-semibold text-white" type="button" value="Create new Account" />
              </div>
            </div>
          </form>
          <div class="flex items-center max-w-md mt-8 justify-center text-sm ">
            <div class="pr-2 font-semibold hover:underline ">
              <a href="#" >Create a Page</a>
            </div>
            <p>for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
