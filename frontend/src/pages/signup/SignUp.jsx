const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
            <span className='text-lime-300'> Alien</span>
          </h1>

          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-slate-300'>Email</span>
              </label>
              <input type='text' placeholder='Enter your email' className='w-full input input-bordered h-10' />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-slate-300'>Username</span>
              </label>
              <input type='text' placeholder='Enter your username' className='w-full input input-bordered h-10' />
            </div>

            <div>
              <label className='label'>
                  <span className='text-base label-text text-slate-300'> Password</span>
              </label>
              <input 
                type='password' 
                placeholder='Enter your password' 
                className='w-full input input-bordered h-10'
              />
            </div>
            <a href='#' className='text-sm text-neutral-300 hover:underline hover:text-blue-600 mt-2 inline-block'>
              Already have an account?
            </a>

            <div>
              <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default SignUp


//Starter code for SignUp component

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Sign Up
//             <span className='text-lime-300'> Alien</span>
//           </h1>

//           <form>
//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text text-slate-300'>Email</span>
//               </label>
//               <input type='text' placeholder='Enter your email' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text text-slate-300'>Username</span>
//               </label>
//               <input type='text' placeholder='Enter your username' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//               <label className='label'>
//                   <span className='text-base label-text text-slate-300'> Password</span>
//               </label>
//               <input 
//                 type='password' 
//                 placeholder='Enter your password' 
//                 className='w-full input input-bordered h-10'
//               />
//             </div>
//             <a href='#' className='text-sm text-neutral-300 hover:underline hover:text-blue-600 mt-2 inline-block'>
//               Already have an account?
//             </a>

//             <div>
//               <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//             </div>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp