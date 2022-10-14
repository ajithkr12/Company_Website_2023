import React from 'react';
import Footer from '../componets/Footer';

import Breadcrumbs from '../componets/Breadcrumbs'

const BlogSingle = () =>  {

  return (
    <div className="">
        <Breadcrumbs tittle='Blogs'/>


      <section className="section blog-single">
        <div className="container">
            <div className="row abc">
                <div className="col-lg-10 col-md-11 col-11">
                    <div className="single-inner">
                        <div className="post-details">
                            <div className="main-content-head">
                                <div className="post-thumbnils">
                                    <img src="assets/images/blog/blog-single.jpg" alt="#"/>
                                </div>
                                <div className="meta-information">
                                    <h2 className="post-title">Journey of tinQbits</h2>
                                    
                                    <ul className="meta-info">
                                        <li>
                                            <a href="">By Martin King</a>
                                        </li>
                                        <li>
                                            <a href="">20 Jun 2022</a>
                                        </li>
                                        <li>
                                            <a href="">Technology</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="detail-inner">
                                    <p>"Farming isn’t something that can be taught, each plant tells its own story that has to be read repeatedly"</p>
                                    <p>Team tinqbit envisions an innovative system providing an ultimate solution to the worldwide farmer issues. An IoT based system providing error free measurement of various soil parameters and a user-friendly mobile application for the farmers & the authorities comprises the system. The mobile application that provides timely alerts on all possible outbreaks & plant diseases in a particular region & also informing the farmers about the preventive measures is the greatest highlight of the system. The 1st runners up price obtained in the regional section and the representation as one of the top 15 teams in the Grand finale of Reboot Kerala Hackathon, an initiative of the Department of Higher Education-Government of Kerala and ASAP is one of the greatest milestones of this idea.</p>
                                     
                                    <p>While we were working on this idea, we've got a great chance to be a part of an International Women’s Day Hackathon, Hack to the future 3 hosted by Finastra to build and unbiased future! There we came up with our idea to lessen the hardships of women and to stand in solidarity with women in farmlands. Women have significant and crucial role in agriculture. But they are often side-lined in this sector. The gender inequality that still prevails in this industry narrows the food production. While interacting with lot of women farmers and with thorough background research we understood that the gender specific obstacles mainly occur in financing, marketing and in access to land.</p>
                                    <p>We provide market, financial and rental services through our app. Finding the perfect market with reasonable price is a major task for most of the farmers. If there is an extra hurdle to find it because you are a woman makes it worse. Also, the inequality in market price is also a discrimination faced by women. So, our application provides facilities to find out the current market trend, nearest profitable market and to forecast the price of the chosen crop. </p>
                                    <p>Even if the women are willing to invest in agriculture, most of them do not have access to financial support. The lack of information about different agricultural loans and subsidies leads to the declination of women participation. In financial services, we furnish all the details about the available agricultural loan schemes and the list of the banks are also provided. It also covers a platform for easy loan application. </p>
                                    <blockquote>
                                        <div className="icon">
                                            <i className="lni lni-quotation"></i>
                                        </div>
                                        <h4>"We aim to lessen the hardship of women farmers & to eradicate inequalities & profit losses in the agricultural sector."</h4>
                                        
                                    </blockquote>
                                    <p>Even though Women are the major contributors in farm work, they lack equal rights in land ownership in many countries including India, so it is impossible for her to enter into contract farming agreements. That’s where we help. Through our rental and other services, she can find all the necessary details of the nearly available rental lands. We believe that our application can make a change in the present scenario and it can contribute to a better unbiased farm and world. Together we can build an unbiased future! Also, we are very happy that our team won the 1st runner up and the best student submission title in this global hackathon. Indeed, it was a great experience.</p>
                                    <p>As part of implementing the 'market services' of this system, a website named "nammudevipani.in” was launched in Pathanamthitta district in collaboration with the agricultural department of Pathanamthita district, Horticorp, VFPCK and Government of Kerala.The trial run of this website was carried out it is running successfully with an average order of minimum 10 per day. This is an easily accessible platform finding solutions to the queries of both farmers and common people. It as a scalable model finding solution to the issues farmers face in selling out their produce in the local markets especially in this pandemic situation. Currently we are in the process of migration from “nammudevipani.in” to “naadanvipani.com”. It is an online platform which facilitates home delivery of fresh vegetables, fruits and all necessary commodities. The fresh agricultural produces collected at Horticorp directly from the local farmers are taken in bulk for sale, through our website.We hope that this would be a great help for the common people who can't step out of their home during this pandemic situation. Wait for the next blogs to get more intriguing updates from tinqbits!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                    
                   
                </div>
             
            </div>
        </div>
    </section>



        <Footer/>
    </div>

  );}


export default BlogSingle;