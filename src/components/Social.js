import React from 'react'

import { SocialStyle } from './SocialStyle'
import social from '../images/Social-icon.svg'
import slack from '../images/slack.svg'

function Social() {
  return (
    <SocialStyle>
      <img src={slack} alt="slack"/>
      <img src={social} alt="social"/>  
    </SocialStyle>
  )
}

export default Social