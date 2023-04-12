import React from 'react'

const CommentForm = () => {
  return (
    <div>
      <h3 className='blog-details__title'>Deixe um comentário</h3>
      <form
        action='assets/inc/sendemail.php'
        className='contact-form-validated contact-page__form form-one mb-80'
      >
        <div className='form-group'>
          <div className='form-control'>
            <input type='text' name='name' placeholder='Seu nome' />
          </div>
          <div className='form-control'>
            <input type='text' name='email' placeholder='Endereço de email' />
          </div>
          <div className='form-control'>
            <input type='text' name='phone' placeholder='Número de telefone' />
          </div>
          <div className='form-control'>
            <input type='text' name='subject' placeholder='Assunto' />
          </div>
          <div className='form-control form-control-full'>
            <textarea
              name='message'
              placeholder='Escreve uma mensagem'
            ></textarea>
          </div>
          <div className='form-control form-control-full'>
            <button type='submit' className='thm-btn '>
              enviar comentário
            </button>
          </div>
        </div>
      </form>
      <div className='result'></div>
    </div>
  )
}

export default CommentForm
