import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import CauseContent from '../components/causes/cause-content'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const CauseDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Causa Detalhes ||Azino ||Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title='Causar detalhes' crumbTitle='Causar detalhes' />
          <CauseContent />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default CauseDetails
