import React, { Component } from 'react'

export default class Navbar extends Component {
  componentDidMount () {
    this.stickToTop()
  }

  stickToTop () {
    const nav = this.nav
    const rect = nav.getBoundingClientRect()
    const navTop = rect.top + window.pageYOffset
    const fixedClass = ' is_fixed'
    const invisibleClass = ' is_invisible'
    let isFixed = false
    let clone = null
    window.addEventListener('scroll', (e) => {
      const docTop = document.scrollingElement.scrollTop
      if (docTop > navTop) {
        if (isFixed) {
          return
        }
        clone = nav.cloneNode(true)
        clone.setAttribute('class', fixedClass)
        nav.parentNode.appendChild(clone)
        nav.setAttribute('class', invisibleClass)
        isFixed = true
      } else {
        if (clone !== null && clone.parentNode !== null) {
          clone.parentNode.removeChild(clone)
          nav.setAttribute('class', '')
        }
        isFixed = false
      }
    })
  }

  render () {
    return (
      <nav ref={elem => { this.nav = elem }}>
        <div className='container'>
          <div className='nav-inner'>
            <ul className='navbar'>
              <li><a href='/'>Home</a></li>
              <li><a href='/news'>ニュース</a></li>
              <li><a href='/alerts'>アラート</a></li>
              <li><a href='/invation'>侵攻</a></li>
              <li><a href='/login'>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
