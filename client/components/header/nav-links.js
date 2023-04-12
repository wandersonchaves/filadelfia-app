import React, { useContext } from 'react'
import Link from 'next/link'

import { SearchContext } from '../../context/search-context'

const NavLinks = ({ extraClassName }) => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext)
  const handleSearchClick = (e) => {
    e.preventDefault()
    updateSearchStatus(!searchStatus)
  }

  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode
    clickedItem.querySelector('.dropdown-list').classList.toggle('show')
  }
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li className='dropdown'>
        <Link legacyBehavior href='/index'>
          <>
            <a>Home</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          <li>
            <Link legacyBehavior href='/index'>
              <a>Home One</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/index-2'>
              <a>Home Two</a>
            </Link>
          </li>
          <li className='dropdown'>
            <Link legacyBehavior href='#'>
              <>
                <a>Estilos de cabeçalho</a>
                <button
                  aria-label='dropdown toggler'
                  onClick={handleDropdownStatus}
                >
                  <i className='fa fa-angle-down'></i>
                </button>
              </>
            </Link>
            <ul className='dropdown-list'>
              <li>
                <Link legacyBehavior href='/index'>
                  <a>Cabeçalho um</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href='/index-2'>
                  <a>Cabeçalho dois</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link legacyBehavior href='/causes'>
          <>
            <a>Causas</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          <li>
            <Link legacyBehavior href='/causes'>
              <a>Causas</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/cause-details'>
              <a>Causar detalhes</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link legacyBehavior href='/events'>
          <>
            <a>Eventos</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          <li>
            <Link legacyBehavior href='/events'>
              <a>Eventos</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/event-details'>
              <a>detalhes do evento</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link legacyBehavior href='/news'>
          <>
            <a>Notícias</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          <li>
            <Link legacyBehavior href='/news'>
              <a>Notícias</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/news-details'>
              <a>Detalhes de notícias</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className='dropdown'>
        <Link legacyBehavior href='#'>
          <>
            <a>Páginas</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          <li>
            <Link legacyBehavior href='/about'>
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/volunteers'>
              <a>Voluntárias</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/become-volunteer'>
              <a>Torne -se um voluntário</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href='/gallery'>
              <a>Galeria</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link legacyBehavior href='/contact'>
          <a>Contato</a>
        </Link>
      </li>
      <li className='search-btn search-toggler' onClick={handleSearchClick}>
        <span>
          <i className='azino-icon-magnifying-glass'></i>
        </span>
      </li>
    </ul>
  )
}

export default NavLinks
