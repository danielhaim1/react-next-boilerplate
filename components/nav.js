import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/danielhaim1/react-next-boilerplate', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-left">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-right">
          {links.map(({ key, href, label }) => (
            <a key={key} href={href}>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    

    <style jsx>{`
      nav{
        padding: 1rem 0;
        background-color: var(--primary-400);

      }

      a{
        display: inline-block;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;

        background-color: var(--primary-100-a);
        border: 1px solid var(--white);
        color: var(--white);

        padding: 6px 12px;
        border-radius: 3px;
      }

      a:hover{
        background-color: var(--primary-200-a);
      }
    `}</style>
  </nav>
)

export default Nav
