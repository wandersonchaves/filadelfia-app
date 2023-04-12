import React from 'react'

// import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";

const BlogContent = () => {
  return (
    <div>
      <div className='blog-card__image'>
        {/* <img src={blogDetailsImage} alt="" /> */}
        <div className='blog-card__date'>20 de maio</div>
      </div>
      <div className='blog-card__meta d-flex justify-content-start mt-0 mb-0'>
        <a href='news-details.html'>
          <i className='far fa-user-circle'></i> admin
        </a>
        <a href='news-details.html'>
          <i className='far fa-comments'></i> 2 Comentários
        </a>
      </div>
      <h3>Nossa doação é esperança para crianças pobres</h3>
      <p>
        Existem muitas variações de passagens disponíveis, mas a maioria tem
        alteração em alguns por humor injeto ou palavras aleatórias.Existem
        muitos variações de passagens de Lorem ipsum disponíveis, mas a maioria
        tem sofreu alteração de alguma forma, por humor injetado, ou randomizado
        Palavras que não parecem nem um pouco críveis.Se você vai usar Uma
        passagem de Lorem ipsum, você precisa ter certeza de que não há nada
        embaraçoso escondido no meio do texto.Todo o Lorem ipsum geradores na
        internet tendem a repetir pedaços predefinidos como Necessário, tornando
        este o primeiro gerador verdadeiro na Internet.Ele usa um dicionário de
        mais de 200 palavras em latim, combinado com um punhado de modelo
        Estruturas de frases, para gerar Lorem ipsum, que parece razoável.O
        Lorem ipsum gerado está sempre livre de repetição, injetado Humor, ou
        palavras não características etc.
      </p>
      <p>
        Existem muitas variações de passagens disponíveis, mas a maioria tem
        alteração em alguns por humor injeto ou palavras aleatórias.Existem
        muitos variações de passagens de Lorem ipsum disponíveis, mas a maioria
        tem sofreu alteração de alguma forma, por humor injetado, ou randomizado
        Palavras que não parecem nem um pouco críveis.Se você vai usar Uma
        passagem de Lorem ipsum, você precisa ter certeza de que não há nada
        embaraçoso escondido no meio do texto.Todo o Lorem ipsum geradores na
        internet tendem a repetir pedaços predefinidos como Necessário, tornando
        este o primeiro gerador verdadeiro na Internet.Ele usa um dicionário de
        mais de 200 palavras em latim, combinado com um punhado de modelo
        Estruturas de frases, para gerar Lorem ipsum, que parece razoável.O
        Lorem ipsum gerado está sempre livre de repetição, injetado Humor, ou
        palavras não características etc.
      </p>
      <div className='blog-details__meta'>
        <ul className='list-unstyled blog-details__category'>
          <li>
            <span>Tag:</span>
          </li>
          <li>
            <a href='#'>caridade</a>
          </li>
          <li>
            <a href='#'>doações</a>
          </li>
          <li>
            <a href='#'>Salve vidas</a>
          </li>
        </ul>
        <ul className='list-unstyled blog-details__category'>
          <li>
            <span>Categoria:</span>
          </li>
          <li>
            <a href='#'>caridade</a>
          </li>
          <li>
            <a href='#'>crianças</a>
          </li>
        </ul>
      </div>
      <div className='blog-navigations'>
        <a href='#'>Nossa doação é esperança para crianças pobres</a>
        <a href='#'>Captação de fundos para o aumento da infância</a>
      </div>
    </div>
  )
}

export default BlogContent
