import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import TeamPage from '../components/team/team-page'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const Volunteers = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Nossos voluntários || Azino || Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title='Nossos voluntários'
            crumbTitle='Nossos voluntários'
          />
          <TeamPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default Volunteers
