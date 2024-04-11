import React from 'react'
import './style/globals.css'  
export const metadata = {
  title: "Education",
  description: "Education App"
}

function mainLayout({ children }) {
  return (
    <html lang='en'>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=AR+One+Sans&family=Inter&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200&family=Lobster&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        </head> */}
      <body>
        <div>
          {children}
        </div>
        <script
          type="text/javascript"
          src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  )
}

export default mainLayout
