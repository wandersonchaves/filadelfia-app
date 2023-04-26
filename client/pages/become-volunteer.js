import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import VolunteerForm from '../components/team/volunteer-form'
import BrandCarousel from '../components/brand-carousel'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const BecomeVolunteer = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Torne-se um voluntário ||Azino ||Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader
            title='Torne-se um voluntário'
            crumbTitle='Torne-se voluntário'
          />
          <VolunteerForm />
          <BrandCarousel extraClass='client-carousel__has-border-top' />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default BecomeVolunteer
