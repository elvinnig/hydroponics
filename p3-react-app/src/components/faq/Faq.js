import React from 'react';
import {MdOutlineLibraryBooks} from 'react-icons/md';
import "./Faq.css";
import Question from './Question';
import {questions} from './data';

const Faq = () => {
  return (
    <section className='faq-sec'>
      <div className='container faq'>
          <div className='title'>
          <MdOutlineLibraryBooks size={60} color="yellow" />
          <h2 className='--mb2'>FAQS </h2>     
           
            <div className='questions'>
              {questions.map((question) => ( 
                <Question 
                key= {question.id} 
                title={question.title} 
                answer={question.answer}
                />
              ))}
            </div>

          </div>
      </div>
        
    </section>
  )
}

export default Faq