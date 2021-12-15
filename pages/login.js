import { getProviders, signIn } from "next-auth/react";

function Login({providers}) {
    return (
        <div className="flex flex-col items-center bg-blue-400 min-h-screen w-full justify-center gap-20">


        {/* <h1 className="text-white text-8xl">About Us - GercepPlay</h1>
            <div className="flex text-white gap-x-100 grid-rows-3 grid-flow-col bg-blue-500 rounded-full p-10 p-50 gap-20">
                <div className="items-center space-x-3 text-center">
                    <img src="https://i.scdn.co/image/ab67706c0000bebbe8a632f8532710eba52de848" className="w-40 h-40 rounded-full opacity-80 hover:opacity-100" />
                    <h1>Raphael Gregorius Hakim - 43340</h1>
                </div>
                <div className="items-center space-x-3 text-center">
                    <img src="https://i.scdn.co/image/ab67706c0000bebbec3057a5779dc39fda22042f" className="w-40 h-40 rounded-full opacity-80 hover:opacity-100" />
                    <h1>Joanne Kessie Kaspia - 43458</h1>
                </div>
                <div className="items-center space-x-3 text-center">
                    <img src="https://i.scdn.co/image/ab67706c0000bebbe9c8d53c070d0da6067aad39" className="w-40 h-40 rounded-full opacity-80 hover:opacity-100" />
                    <h1>Nehemia Gueldi - 43202</h1>
                </div>
            </div> */}

  <div class="container mx-auto p-12 bg-gray-100 rounded-xl">
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div class="bg-white">
        <div>
          <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div>
              <img class="w-full hover:cursor-pointer hover:animate-bounce delay-75" src="https://i.scdn.co/image/ab67706c0000bebbe8a632f8532710eba52de848" />
              <div class="px-4 py-2">
                <h1 class="text-xl font-gray-700 font-bold text-center">Raphael Gregorius Hakim</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div>
          <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div>
              <img class="w-full hover:cursor-pointer hover:animate-bounce delay-75" src="https://i.scdn.co/image/ab67706c0000bebbec3057a5779dc39fda22042f" />
              <div class="px-4 py-2">
                <h1 class="text-xl font-gray-700 font-bold text-center">Joanne Kessie Kaspia</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div>
          <div class="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div>
              <img class="w-full hover:cursor-pointer hover:animate-bounce delay-75" src="https://i.scdn.co/image/ab67706c0000bebbe9c8d53c070d0da6067aad39" />
              <div class="px-4 py-2">
                <h1 class="text-xl font-gray-700 font-bold text-center">Nehemia Gueldi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className="bg-[#18D860] text-white p-5 
                    rounded-full" 
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders();

    return{
        props:{
            providers
        }
    }
}
