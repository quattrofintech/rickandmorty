import React from 'react'

const Footer = () => {
    const now = new Date()
  return (
    <footer>
        <section>
            <p> by Quattro Edtech {now.getFullYear()}</p>
        </section>
    </footer>
  )
}

export default Footer