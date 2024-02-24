import React from 'react'
import './Blogs.css'
const Blogs = () => {
    return (
        <div id='blogs'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="image-container">
                            <img src="https://static.gunnarpeipman.com/wp-content/uploads/2019/12/sql-server-featured.png" className="card-img-top" alt="..." />
                            <div className="image-text">
                                <h5 className="card-title">Speaking SQL: Turning Natural Language into Database Dialogues</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data
                                management, SQL databases have long stood as the backbone, housing vast quantities of
                                invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to
                                extract insights from these data repositories, the quest for more intuitive and accessible
                                querying methods gains momentum. The emerging solution? Leveraging Large Language
                                Models (LLMs) to interact with SQL databases using natural language.<br /><br />
                                <a href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html" className="explore-more-link" target="_blank">Explore More</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <div className="image-container">
                            <img src="https://iabac.org/blog/uploads/images/202305/image_870x_646f30841fdc4.jpg" className="card-img-top" alt="..." />
                            <div className="image-text">
                                <h5 className="card-title">Beyond Basics: Elevating AI with Reinforcement Learning from Human
                                    Feedback</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
                                success of ChatGPT, marking a significant advancement in AI's ability to understand and
                                engage in human language. This method, vital for fine-tuning language models, addresses
                                the complexities and nuances of communication, ensuring AI interactions are natural and
                                intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
                                models to avoid replicating inappropriate language or tones.<br /><br />
                                <a href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html" className="explore-more-link" target="_blank">Explore More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="image-container">
                            <img src="https://rescale.com/wp-content/uploads/2016/05/markblog2.png" className="card-img-top" alt="..." />
                            <div className="image-text">
                                <h5 className="card-title">The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Welcome to our exploration of the fascinating world of large language models! As many of
                                you are aware, the scale of these models has skyrocketed recently. Take, for instance,
                                GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
                                behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
                                requires adjusting countless parameters, which is time-consuming, and the GPU demands
                                are nothing short of immense.<br /><br />
                                <a href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html" className="explore-more-link" target="_blank">Explore More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="image-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8vGgtq5KjtPO4pfCXMlcseMF9VGfAfV6AF7nLnm5l4PI5PfVsKWQkJ2rnDg_CuwHDfs&usqp=CAU" className="card-img-top" alt="..." />
                            <div className="image-text">
                                <h5 className="card-title">PrivAIcy Matters: Balancing Privacy, Price, and Performance</h5>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial
                                intelligence algorithms with the magic to conjure fresh content based on available data, this
                                technology has unassumingly become the new frontier for a plethora of industries, including
                                tech, banking, and media. And, no surprises here, the technological world has openly
                                embraced it in myriad innovative ways.<br /><br /><br/>
                                <a href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html" className="explore-more-link" target="_blank">Explore More</a>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs