import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div id='products'>
      <div className="card text-center">
        <div className="card-header">
          <h1>OUR PRODUCTS</h1>
        </div>
        <div className="card-body">
          <div className='product'>
            <div className="product-info">
              <h3>Explore AI Opportunities for Your Enterprise</h3>
              <p><h5>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</h5></p>
              <a href="#" className="btn btn-primary">Explore now</a>
            </div>
            <div className="product-image">
              <img src='https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp' alt="AI Opportunities" />
            </div>
          </div>
          <hr />
          <div className='product'>
            <div className="product-info">
              <h3>Design AI Trust Layer</h3>
              <p>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
              <a href="#" className="btn btn-primary">Explore now</a>
              <div className="product-image">
              <img src='https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp' alt="AI Opportunities" />
            </div>
            </div>
          </div>
          <hr />
          <div className='product'>
            <div className="product-info">
              <h3>Scalability-Focused Solutions</h3>
              <p>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
              <a href="#" className="btn btn-primary">Explore now</a>
              <div className="product-image">
              <img src='https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp' alt="AI Opportunities" />
            </div>
            </div>
          </div>
          <hr />
          <div className='product'>
            <div className="product-info">
              <h3>End to End Workflow Automation</h3>
              <p>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
              <a href="#" className="btn btn-primary">Explore now</a><br/>
              <img src='https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp' alt="AI Opportunities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
