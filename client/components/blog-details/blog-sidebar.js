import React from 'react'

// import postImage1 from "../../assets/images/blog/blog-s-1.jpg";
// import postImage2 from "../../assets/images/blog/blog-s-2.jpg";
// import postImage3 from "../../assets/images/blog/blog-s-3.jpg";

const BlogSidebar = () => {
  return (
    <div className='blog-sidebar'>
      <div className='blog-sidebar__search'>
        <form action='#'>
          <input type='text' placeholder='Search here' />
          <button type='submit'>
            <i className='azino-icon-magnifying-glass'></i>
          </button>
        </form>
      </div>
      <div className='blog-sidebar__single'>
        <h3>últimas postagens</h3>
        <ul className='list-unstyled blog-sidebar__post'>
          <li>
            {/* <img src={postImage1} alt="" /> */}
            <h3>
              <a href='news-details.html'>
                Nossa doação é esperança para crianças pobres{' '}
              </a>
            </h3>
          </li>
          <li>
            {/* <img src={postImage2} alt="" /> */}
            <h3>
              <a href='news-details.html'>
                Promovendo os direitos das crianças
              </a>
            </h3>
          </li>
          <li>
            {/* <img src={postImage3} alt="" /> */}
            <h3>
              <a href='news-details.html'>
                Crescendo crianças em cuidados de caridade{' '}
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <div className='blog-sidebar__single'>
        <h3>Categorias</h3>
        <ul className='list-unstyled blog-sidebar__category'>
          <li>
            <a href='#'>Caridade</a>
          </li>
          <li>
            <a href='#'>Angariação de fundos</a>
          </li>
          <li>
            <a href='#'>Doações</a>
          </li>
          <li>
            <a href='#'>Saúde</a>
          </li>
          <li>
            <a href='#'>Salve vidas</a>
          </li>
          <li>
            <a href='#'>Água limpa</a>
          </li>
        </ul>
      </div>
      <div className='blog-sidebar__single'>
        <h3>Tag</h3>
        <ul className='list-unstyled blog-sidebar__tags'>
          <li>
            <a href='#'>Caridade</a>
          </li>
          <li>
            <a href='#'>doações</a>
          </li>
          <li>
            <a href='#'>Salve vidas</a>
          </li>
          <li>
            <a href='#'>Educação</a>
          </li>
          <li>
            <a href='#'>pessoa pobre</a>
          </li>
          <li>
            <a href='#'>saúde</a>
          </li>
          <li>
            <a href='#'>água limpa</a>
          </li>
        </ul>
      </div>
      <div className='blog-sidebar__single'>
        <h3>Comentários</h3>
        <ul className='blog-sidebar__comments'>
          <li>
            <a href='#'>
              Um comentarista do WordPress no lançamento novo aplicativo móvel
            </a>
          </li>
          <li>
            <a href='#'>John Doe no modelo: comentários</a>
          </li>
          <li>
            <a href='#'>
              Um comentarista do WordPress no lançamento novo aplicativo móvel
            </a>
          </li>
          <li>
            <a href='#'>John Doe no modelo: comentários</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlogSidebar
