import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import '../../styles/SocailMedia.css'
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <SiGmail />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;