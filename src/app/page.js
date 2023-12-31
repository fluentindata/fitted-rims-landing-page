 "use client"
 import "./page.css"
 import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

function Trail({ open, children }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={page.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

const page = () => {
  const [open, set] = useState(true);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    <title> Boost Tire Sales Online and In-store</title>
    <div className="container">
    <div className="wrapper">
    <div className="dropdown">
  <h5 className="drop">Client Support</h5>
  <div className="dropdown-content">
    <a href="#">92384834</a>
    <a href="#">Support request</a>
    <a href="#">Knowledge </a>
  </div>
</div>
<h5 className="login">Login</h5>
<h5 className="register">Register</h5>
</div>

<div className={page.container} onClick={() => set((state) => !state)}>
<div className="header-text max-w884">
<br/><br/> <br/><br/> <br/>
<Trail open={open}>
  <h1 className="heading-2">Tire Sales and Procurement Solutions </h1>
  <p className="paragraph-xl header">
    Maximize your tire business from sales to sourcing.&nbsp;Set your business up to win with advanced sales and procurement tools powered by real-time inventory data, in-store and online.
    </p>
    </Trail>
    </div>
    </div>
  
<div className="cta-top new-home">
  <div className="cta-top__l">
    <h1 className="cta-top__heading">Our bottom line is to raise yours.</h1>
    <p>Boost business, and customer satisfaction with a fully integrated, comprehensive solution that’s flexible to all your business’s tire-related needs.</p>
    <div className="stats-wrapper">
      <div className="stats-card">
        <div className="stats-card__heading">
        <h3 className="heading-s">6,500</h3></div>
        <p className="stats-card__p">Locations across North<br></br>America use TireConnect</p></div>
        <div className="stats-card">
        <div className="stats-card__heading"><h3 className="heading-s">23M</h3></div>
        <p className="stats-card__p">Customers used TireConnect<br></br>on our clients’ websites</p></div>
        <div className="stats-card">
          <div className="stats-card__heading">
          <h3 className="heading-s">54M</h3></div>
          <p className="stats-card__p">Tire searches delivered</p></div>
        <div className="stats-card">
          <div className="stats-card__heading"><h3 className="heading-s">13M</h3></div>
         <p className="stats-card__p">Leads captured for our clients</p></div></div></div>
        <div id="w-node-_59cedee5-e92d-d481-93b5-e6c357bf2e36-0776d7b9" className="cta-top__r bg-red"><h3 className="heading-xs">See how TireConnect can help you boost your revenue and customer satisfaction:</h3>
      <div  className="cta-top__video-wrapper"><a href="#" className="cta-top__video w-inline-block w-lightbox" aria-label="open lightbox" aria-haspopup="dialog">
  </a></div></div></div>
  </div>


    <div className="clients-segment">
      <h1>Our Clients</h1>
      
    </div>

    <div className="ticker">
  <div className="ticker__list" >
    <div className="ticker__item"><img src="https://img.clock.co.uk/250x100?text=Item 1&amp;color=f3e5f5"/></div>
    <div className="ticker__item"><img src="https://img.clock.co.uk/300x100?text=Item 2&amp;color=ede7f6"/></div>
    <div className="ticker__item"><img src="https://img.clock.co.uk/200x100?text=Item 3&amp;color=ffcdd2"/></div>
    <div className="ticker__item"><img src="https://img.clock.co.uk/100x100?text=Item 4&amp;color=f8bbd0"/></div>
    <div className="ticker__item"><img src="https://img.clock.co.uk/350x100?text=Item 5&amp;color=e8eaf6"/></div>
    <div className="ticker__item"><img src="https://img.clock.co.uk/100x100?text=Item 6&amp;color=e3f2fd"/></div>
    
  </div>
</div>

  

    <div className="solutions-segment">
      <h1>See Our Solutions</h1>
    </div>

    <div className="wrapper-flex margin-t100">
      <div  className="flex-l">
        <h2 className="heading-m ">By Audience </h2>
        <p className="paragraph-1 ">Solutions made for you, your business, and your<br/> customers.</p></div>
        <div  className="flex-r">
          <img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aeac509c2f95f_solutions-audience.svg" loading="lazy" alt="Chart"/>
          </div>
    </div>
          <br></br><br></br><br></br>

          
    <div className="row">
     <div className="column">
       <h3 className="singleLocation">Single-Location Tire Dealers </h3>
       <p>Qualified service appointment requests are secured  <br/> 24/7 with a simple scheduling process. </p>
       <p className="learnMore">Learn More</p>
    </div>
     <div className="column">
      <h3 className="multiLocation">Multi-Location Tire Dealers</h3>
      <p> Tools to manage clients, configure pricing , display <br/> on hand inventory , set up deliver and more</p> 
      <p className="learnMore">Learn More</p>
      <br/> <br/><br/>
     </div>
     

     <div className="column">
       <h3 className="automotive">Automotive Shops </h3>
       <p>Deliver faster quotes, make more sales, and optimize <br/>your in-store resources. </p>
       <p className="learnMore">Learn More</p>
    </div>
     <div className="column">
      <h3 className="b2bDealers">B2B Tire Dealers</h3>
      <p> Configure, manage and scale multiple locations with <br/> flexibility or consistency across all stores.</p> 
      <p className="learnMore">Learn More</p>
      <br/> <br/><br/>

     </div>


     <div className="column">
       <h3 className="dealership">Car Dealerships  </h3>
       <p>Dealerships across North America are using  <br/> FittedTyres to increase speed and efficiency for in- <br/> store tire quoting  </p>
       <p className="learnMore">Learn More</p>
    </div>
     <div className="column">
      <h3 className="enterprise">Enterprise and Developers </h3>
      <p> Developers are using the FittedTyres platform to <br/> customize tire sales solutions for their clients..</p> 
      <p className="learnMore">Learn More</p>
      <br/> <br/>
     </div>
    </div>
          
    <div className="button-wrapper margin-t30"><button className="button-red w-button">See All Solutions</button></div>
    


    <div className="wrapper-flex margin-t100">
      <div className="flex-l"><img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aea863dc2f97b_handshake.svg" loading="lazy" alt="Handshake" style={{marginLeft:"90px"}}/></div>
      <div className="flex-r is-changed" style={{marginRight:"100px"}}>
      <h1 className="heading-m text-red" style={{marginRight:"180px"}} >By Need</h1>
      <p className="paragraph-l mw-412" >Solutions made for you, your business, and your customers.</p> </div>

    </div>
    <br/> <br/><br/> <br/><br/> <br/>

    <div className="row">
     <div className="column">
       <h3 className="singleLocation">Sell Tires and Wheels Online </h3>
       <p>Effortlessly capture qualified leads and enable  <br/> eCommerce on your website to sell more tires online </p>
       <p className="learnMore">Learn More</p>
    </div>
     <div className="column">
      <h3 className="multiLocation">Sell Tires In-Store</h3>
      <p> Provide a collaborative, visual and engaging <br/> customer experience in your tire shop. </p>
      <p className="learnMore">Learn More</p>
      <br/> <br/><br/>
     </div>
     

     <div className="column">
       <h3 className="automotive">Inventory Connectivity & <br/>Procurement  </h3>
       <p>Integrate your inventory into the FittedTyres system <br/> to take advantage of a network that reaches more <br/>tyre shop customers </p>
       <p className="learnMore">Learn More</p>
    </div>
     <div className="column">
      <h3 className="b2bDealers">Sell AutoMotive Services</h3>
      <p> Go full eCommerce or use a simple catalog look-up <br/> to increase your automotive  service revenue</p> 
      <p className="learnMore">Learn More</p>
      <br/> <br/><br/>

     </div>


     <div className="column">
       <h3 className="dealership">Wholesale Tires  </h3>
       <p>Allow your clients to order tyres with just a few clicks   <br/>so that you can increase your B2B tire sales  </p>
       <p>Learn More</p>
    </div>
     <div className="column">
      <h3 className="enterprise">Custom Integrations </h3>
      <p> Easily connect your custom integrations with your tire  <br/> sales software using FittedTyres </p> 
      <p className="learnMore">Learn More</p>
      <br/> <br/>
     </div>
    </div>
          
    <div className="button-wrapper margin-t30"><button className="button-red w-button">See All Solutions</button></div>
    <br/>  <br/> 


    <div className="wrapper-flex margin-t100">
      <div  className="flex-l">
        <h2 className="heading-g ">Our Products </h2>
        <p className="paragraph-1 ">See our suite of sales and procurement products designed<br/> to meet the needs of your business</p></div>
        <br/>

        <div  className="flex-r">
          <img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aeac509c2f95f_solutions-audience.svg" loading="lazy" alt="Chart"/>
          </div>

          </div>
          <br/> <br/> <br/>



<div className="container-1">
  <div className="paragraph-1">
    <div className="detail">
    <h3>TireConnect Online</h3>
    <p >Enable customers to buy tires online <br/>without assistance in seconds</p>
    <p className="learnMore">Learn More</p>

    <p></p>
    </div>
  </div>
  <div className="paragraph-1">
  <div className="detail">
    <h3>TireConnect in Store</h3>
    <p>Enhance your customers experience by <br/> providing quick notes.</p>
    <p className="learnMore">Learn More</p>

    </div>
  </div>
  <div className="paragraph-1">
  <div className="detail">
    <h3>TireConnect Wheels</h3>
    <p>Sell wheels as a standalone or as a part <br/> of wheel and tire package</p>
    <p className="learnMore">Learn More</p>

    </div>
  </div>
</div>
<br/>
<br/>


<div className="container-1">
  <div className="paragraph-1">
    <div className="detail">
    <h3>TireConnect Online</h3>
    <p >Enable customers to buy tires online <br/>without assistance in seconds</p>
    <p className="learnMore">Learn More</p>

    <p></p>
    </div>
  </div>
  <div className="paragraph-1">
  <div className="detail">
    <h3>TireConnect in Store</h3>
    <p>Enhance your customers experience by <br/> providing quick notes.</p>
    <p className="learnMore">Learn More</p>

    </div>
  </div>
  <div className="paragraph-1">
  <div className="detail">
    <h3>TireConnect Wheels</h3>
    <p>Sell wheels as a standalone or as a part <br/> of wheel and tire package</p>
    <p className="learnMore">Learn More</p>

    </div>
  </div>
</div>
<br/><br/>


<section className="section demo">
  <div className="container">
    <div className="demo-wrapper">
      <div className="demo-l">
        <h1 className="text-white" style={{fontSize:"50px", color:"white", marginLeft:"55px"}}>See TireConnect in <br/>action with a demo</h1>
        <p className="paragraph-l demo-p" style={{color:"white", lineHeight:"1.5", marginLeft:"55px"}}>Book a demo to discover how TireConnect’s best-in-class tire shop <br/> software can become a critical component of your tire sales strategy <br/>driving revenue, market share, and customer satisfaction.</p>
        {/* <button className="button1 " style={{color:"white", backgroundColor:"black"}}>Get a Demo</button> */}
        <button style={{marginLeft:"55px"}}className="button1"> Get a Demo </button>

        </div> 
        <div className="demo-r"><img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aea0b4ac2f8f0_cta-img.png" loading="lazy" alt="Devices" className="demo-img"/></div></div></div>
</section>
<br/><br/><br/><br/>
<div className="wrapper-flex">
  <div className="flex-l mw-412">
    <h1 className="benefits"><strong>Benefits for your Business</strong>
    </h1><p className="description ">Create faster, more accurate quotes and tire information in-store and online so you can do business smarter not harder.</p></div>
    <div className="flex-r"><img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aeacd8bc2f963_man-chart.svg" loading="lazy" alt="Man Chart Illustration " className="man-chart"/>
    <br/> <br/> <br/>
    </div>
</div>

<div className="row">
    <div className="column">
       <h3 className="benefitsSection">Sell Tires and Wheels 24/7 </h3>
       <p>Open all hours, your customers can shop when and how they  <br/> want to with TireConnect’s eCommerce turnkey solution. </p>
    </div>
    <div className="column">
      <h3 className="benefitsSection">Real-Time Inventory</h3>
      <p> Confidently display your on-hand and supplier inventory in real- <br/> time online and in-store, alongside tools to compare prices, <br/> customize orders, and maximize sales fast. </p>
      <br/> <br/><br/>
    </div>
     

    <div className="column">
       <h3 className="benefitsSection">Boost Business  </h3>
       <p>We give you what you need, so you can give your customers <br/> what they want—quick and easy ways to view, quote, and <br/>purchase.</p>
    </div>

    <div className="column">
      <h3 className="benefitsSection">Instant Tire Quotes</h3>
      <p> No more flipping through catalogs, way more solutions for fast,<br/> accurate quotes to save your customers and employee’s time.</p> 
      <br/> <br/><br/>
    </div>
  </div>


  <section className="section partner">
    <div className="container2">
      <div className="partner-wrapper">
        <div className="partner-l">
          <h2 className="text-red">Partner With <br/> TireConnect</h2>
          <p className="paragraph-l">We’re always looking to partner with wholesale distributors,<br/> digital agencies, and software solution providers to help us drive <br/> more value to our clients.</p>
          <div className="partner-red">
          <p className="partner-red__p">Are you a tire/wheel wholesaler, digital agency <br/>or a software provider?</p></div>
          <div className="partner-red">
          <p className="partner-red__p">Are you servicing the tire or automotive<br/> industry?</p><br/></div>

          <div className="partner-button__wrapper">
            <button  className="buttonPartner" style={{color:"white", backgroundColor:"black"}}>Partner with Us</button>
            <button className="seePartner">See Our Partners</button>
          </div>
        </div>
            <div className="partner-r"><img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aea80f7c2f8fe_partners.png" loading="lazy" alt="Handshake" class="partner-img"/></div>
      </div>
    </div>
  </section>

  

  <section className="section about">
    <div className="container3">
      <div className="about__wrapper">
        <div  className="about-l"style={{color:"white"}}>
          <h2 className="text-white" style={{fontSize:"50px"}}>About us</h2>
          <p className="paragraph-l is--light" style={{lineHeight:"1.6"}} >We’re revolutionizing the tire sales process and becoming an <br/> invaluable business partner for our clients. We provide the most<br/> advanced, easy-to-use, and feature-rich tire commerce<br/> solution on the market.<br/><br/>Our platform simplifies the path to purchase for service <br/> advisors and customers alike. TireConnect delivers all of the <br/> product information required to make an informed purchase, <br/> live inventory connectivity and much more. Clients always <br/> remain in complete control of their inventory, pricing, labor, and<br/> installation costs. </p><br/>
          <div className="button-wrapper left">
            <button className="button4" style={{color:"white", backgroundColor:"black"}}>Learn More About Us</button></div></div>
            <div className="about-r"><img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aea0b4ac2f8f0_cta-img.png" loading="lazy"  alt="Devices"/></div></div></div>
            <img src="https://uploads-ssl.webflow.com/61f95ed9bf2aea22dfc2f8b6/61f95ed9bf2aeae7dec2f920_wave_red.svg" loading="lazy" alt="" className="wave-red"/>
  </section>

  <section class="section footer">
  <div class="container5">
  <div class="footer-wrapper">
  <div class="footer-l">
  <div class="footer-logo__wrapper"><a href="/" aria-current="page" class="footer-logo w-inline-block w--current"></a>
  <p class="footer-l__p">The TireConnect team is committed to helping tire <br/> dealers of all sizes drive efficiency, compete in the online <br/> marketplace and most importantly sell more tires.</p>
  <button class="button6">Shop for Tires Near Me</button><a target="_blank" class="linkedin w-inline-block"><div class="linkedin-icon__wrapper">
 </div>
  <p class="linkedin__p">Follow us on LinkedIn</p></a></div><div class="footer-form__wrapper">
  <section id="subscribe-form" class="footer-form">
  <div class="form--footer__wrapper" ><p style={{color:"red"}} class="footer-form__heading">Sign Up for Our Newsletter</p>
  <p class="footer-form__p">Email Address <span class="red-span">*</span></p>
  <div class="form-block w-form"><form id="wf-form-Subscribe" name="wf-form-Subscribe" data-name="Subscribe" method="get" class="subscribe-form-flex"  aria-label="Subscribe">
  <div class="subscribe-form-input-wrapper">
  <input  type="email" class="email-input w-input" maxlength="256" name="Subscriber-Email-2" data-name="Subscriber Email 2" placeholder="johndoe@email.com" id="Subscriber-Email-2" required=""/></div><br/>
  <button value="Subscribe" class="button7">Subscribe</button></form>
  <div class="w-form-done" tabindex="-1" role="region" aria-label="Subscribe success">
  <div>Thank you! Your submission has been received!</div></div>
  <div class="w-form-fail" tabindex="-1" role="region" aria-label="Subscribe failure">
  <div>Oops! Something went wrong while submitting the form.</div></div></div></div></section>
  <p class="copyright">Copyright © Bridgestone -TireConnect 2023 | <a class="pp-link">Privacy Policy</a> | <a class="tof-link">Terms of Service</a></p></div></div>
  </div></div>
    </section>
    </>
  )
}

export default page