import React from 'react'

import Eunice from '../images/Eunice.jpg'
import mobile from '../images/mobileshare.svg'
import web from '../images/webshare.svg'
import { ButtonStyle, ProfileStyle, ProfileTextStyle, SlackStyle } from './ProfileStyle.js'

function Profile() {
  return (
    <div>
    <ProfileStyle>
        <ButtonStyle>
        <img src={mobile} alt="mobile" id='mobile' />
        <img src={web} alt="web" id='web' />
        </ButtonStyle>
        <img src={Eunice} alt="myPics" id='profile__img' />
        <ProfileTextStyle id ='twitter'>Oluwafolaranmi</ProfileTextStyle>
    </ProfileStyle>
    <SlackStyle id='slack'>@Oluwafolaranmi</SlackStyle>

    </div>
  )
}

export default Profile
