import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import EventPage from '../components/event/event-page'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const Events = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Página de eventos || Azino || Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title='Eventos' crumbTitle='Eventos' />
          <EventPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default Events
