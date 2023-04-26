import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import CausesPage from '../components/causes/causes-page'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const Causes = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Causas página || Azino || Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title='Página de causas' crumbTitle='Causas' />
          <CausesPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default Causes
