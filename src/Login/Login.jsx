import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-80 bg-[#333333] p-96 flex-col'>
<h1 className='text-[#EF476F] text-[30px] font-medium'>HAKKIMDA</h1>
<p className='text-white mt-20 text-[24px]'>HAKKIMDAKI BILGILER GORMEK ICIN GIRIS YAPMALISINIZ <br/>GIRIS YAPKMAK ICIN LUFTEN ALTTAKI BUTONA TIKLAYINIZ</p>
   <div className='mt-20 text-[#EF476F] rounded-lg border p-4 cursor-pointer'>
    <a href='http://localhost/LoginPage/index.php' target='_blank'><button>BENI GIRIS SAYFASINA YONLENDIR</button></a>
   </div> 
    </div>
  )
}

export default Login