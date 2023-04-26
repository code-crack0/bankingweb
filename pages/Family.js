import Sidebar from '@/components/Sidebar'
import Head from 'next/head'

export default function Family() {
  return (
    <>
      <Head>
        <title>FamilyPage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
          <div className="bg-gray-100 flex flex-row">
              <Sidebar/>
              <main className='bg-gray-100 min-h-screen flex-grow flex flex-col'>
                  
        <header className="bg-blue-600 py-4">
          <h1 className="text-white text-3xl text-center">Family Members</h1>
        </header>
        <div className="container mx-auto py-8">
          <div className="flex items-center bg-white rounded-md shadow-md mb-4 px-4 py-2">
            <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <h2 className="text-2xl font-bold">John Smith</h2>
              <p className="text-gray-500 mt-2 ">Account Holder</p>
              <div className='text-gray-500 mb-2 '> IBAN: 30009</div>
              <div className="mt-2">
                <p className="bg-blue-600 text-white text-center py-2 px-4 rounded-md">Max allowance: $1900</p>
              </div>
              
            </div>
            

          </div>
          
          <div className="flex items-center bg-white rounded-md shadow-md mb-4 px-4 py-2">
            <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <h2 className="text-2xl font-bold">Jane Smith</h2>
              <p className="text-gray-500 mt-2 ">Spouse</p>
              <div className='text-gray-500 mb-2'> IBAN: 30009</div>
              <div className="mt-2">
                <p className="bg-blue-600 text-white text-center py-2 px-4 rounded-md">Max allowance: $1900</p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-md shadow-md mb-4 px-4 py-2">
            <img src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full mr-6" />
            <div>
              <h2 className="text-2xl font-bold">Jack Smith</h2>
              <p className="text-gray-500 mt-2 ">Child</p>
              <div className='text-gray-500 mb-2'> IBAN: 30009</div>
              <div className="mt-2">
                <p className="bg-blue-600 text-white text-center py-2 px-4 rounded-md">Max allowance: $1900</p>
              </div>
              
            </div>
            
          </div>
          <div className="flex justify-center">
            <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
              <input type="text" placeholder="Enter name..." className="border border-gray-400 rounded-md py-2 px-4 mr-2" />
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Add Member</button>
            </div>
          </div>
        </div>
              </main>
      </div>
    </>
  )
}