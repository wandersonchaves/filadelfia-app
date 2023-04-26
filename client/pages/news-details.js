import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import BlogDetails from '../components/blog-details'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const NewsDetails = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Detalhes de notícias || Azino || Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title='Detalhes de notícias' crumbTitle='Notícias' />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default NewsDetails
