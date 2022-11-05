import React from 'react'
import { PointerStyle  } from './LinkStyle'


function Links() {
    const links = [
    {name: "Twitter Link",
      url: "https://twitter.com/Oluwafolaranmi9",
      id: "twitter",
      title:"Twitter Link"
    },
    {
      name: "Zuri Team",
      url: "https://training.zuri.team",
      id: "btn__zuri" ,
      title:"Zuri Team"
    },
    {
      name: "Zuri Books",
      url: "http://books.zuri.team",
      id: "books",
      title:"Zuri Books"
    },
    {
      name: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=uju",
      id: "book__python",
      title:"Python Books"
    },
    {
      name: "Background Check for Coders",
      url: "https://background.zuri.team", 
      id: "pitch",
      title:"Background Check for Coders"

   },
    {
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
      title:"Design Books"
    },
    {
      name: "Contact Me",
      url: "https://eunice-linked.netlify.app/contact",
      id: "contact",
      title: "Contact Me"
    },
  ];

  return (
    <PointerStyle>
    {
    links.map((link)=><a href={link.url} id={link.id} title={link.title} className="btn__link">{link.name}</a>
      )
    }
    </PointerStyle>
  )
}

export default Links