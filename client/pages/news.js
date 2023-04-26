import React from 'react'
import Layout from '../components/layout'
import HeaderOne from '../components/header/header-one'
import StickyHeader from '../components/header/sticky-header'
import PageHeader from '../components/page-header'
import BlogPage from '../components/blog/blog-page'
import Footer from '../components/footer'
import MenuContextProvider from '../context/menu-context'
import SearchContextProvider from '../context/search-context'

const News = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle='Página de notícias || Acin || Charity reaja o próximo modelo'>
          <HeaderOne />
          <StickyHeader />
          <PageHeader title='Página de notícias' crumbTitle='Notícias' />
          <BlogPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default News
