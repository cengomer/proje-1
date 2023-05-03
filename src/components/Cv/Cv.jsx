import React from 'react'
import '../../styles/Cv.css'
import { omer } from '../../assets'
const Cv = () => {
  return (
    <div className='cv__header' id='Cv'>
    <h1 className='mt-10'>Eğitim Bilgilerim</h1>
<header className='cv__container'>
<div className=' w-full h-full flex justify-start items-start'>
<img src={omer} alt='kendi resmim' className='w-[400px]'/>
</div>
<div className='w-full h-full p-1 flex justify-top items-center text-center flex-col'>
<li className='text-[24px] text-[#333333] mb-5'>Lise Eğitimi</li>
<h3 className='text-[30px] text-black'>Akşemseddin Anadolu Lisesi</h3>
<p className='text-gray-200'>Haziran 2018 - Şubat 2022</p>
<h3 className='text-[30px] mt-5'>Açık Öğretim Lisesi</h3>
<p className='text-gray-200'>Şubat 2022 - Mart 2022</p>
<li className='text-[24px] text-[#333333 ] mt-10'>Üniversite Eğitimi</li>
<h3 className='text-[30px] mt-5'>Sakarya Üniversitesi</h3>
<p className='text-gray-200'>Ekim 2022 - Günümüz</p>
</div>
</header>
    </div>
  )
}

export default Cv