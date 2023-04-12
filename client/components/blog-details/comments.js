import React from 'react'

// import comment1 from "../../assets/images/blog/comment-1-1.jpg";
// import comment2 from "../../assets/images/blog/comment-1-2.jpg";

const Comments = () => {
  return (
    <div>
      <h3 className='blog-details__title'>2 comentários</h3>
      <div className='comment-one'>
        <div className='comment-one__single'>
          {/* <img src={comment1} alt="" /> */}
          <h3>Jessica Brown</h3>
          <p className='comment-one__date'>20 de maio de 2020.16:00</p>
          <p>
            Lorem ipsum é simplesmente um texto livre de impressão disponível e
            Tipsetting foi o texto fictício padrão da indústria sempre
            sinceramente condimentum purus.
          </p>
          <a href='#' className='thm-btn '>
            Responder
          </a>
        </div>
        <div className='comment-one__single'>
          {/* <img src={comment2} alt="" /> */}
          <h3>Jessica Brown</h3>
          <p className='comment-one__date'>20 de maio de 2020.16:00</p>
          <p>
            Lorem ipsum é simplesmente um texto livre de impressão disponível e
            Tipsetting foi o texto fictício padrão da indústria sempre
            sinceramente condimentum purus.
          </p>
          <a href='#' className='thm-btn '>
            Responder
          </a>
        </div>
      </div>
    </div>
  )
}

export default Comments
