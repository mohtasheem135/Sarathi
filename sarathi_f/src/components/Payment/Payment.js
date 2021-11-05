import React from 'react'
import '../Payment/Payment.css'
import driver from '../Payment/profile.png'
import Navbar from '../navbar/Navbar'
export default function Payment() {
    return (
        <>
        <Navbar/>
      
      <div className="wrapper">
      
           < div className='header'>


                 <div className='logo'>
                    <img src={driver} alt='logo'/>
                 </div>
                <div className='info'>
                  <label>
               
                    <h2 className='topper'>SUPER SARTHI</h2>
                    <div className='name-rate'>
                             <h3>Joginger Sharma</h3>
                                 <div className='rate'>
                                 
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  <i class="fas fa-star" ></i>
                                  
                                 </div>
                    </div>
                   
                    
                  </label> 
                  <div className='mytabs'>
                    <input type="radio" id="about" name="mytabs" checked="checked"></input>
                     
                       <label className='label-1' for='about'>ABOUT</label>
                       <div className='tab'>
                         <div className="title">
                            <ul className='detail'>
                               <li className='detail-row'>User ID</li>
                               <li className='detail-row'>474940444</li> 
                             </ul>
                             <ul className='detail'>
                               <li className='detail-row'>Name</li>
                               <li className='detail-row'>Joginger Sharma</li> 
                             </ul>
                             <ul className='detail'>
                               <li  className='detail-row'>Email</li>
                               <li className='detail-row'>JogingerSharma23@gmail.com</li> 
                             </ul>
                             
                             <ul className='detail'>
                               <li className='detail-row'>Phone</li>
                               <li className='detail-row'>+91 3293222221</li> 
                             </ul>
                             <ul className='detail'>
                               <li className='detail-row'> Travelled</li>
                               <li className='detail-row'>3000 KM</li> 
                     </ul>
                         </div>
 
                   </div>
                   <input type="radio" id="timeline" name="mytabs" ></input>
                     
                     <label className='label-1' for='timeline'>TIMELINE</label>
                      <div className='tab'>
                         <div className='titile'>
  
                    
                    
                      <ul className='detail-center'>
                        <h3>Last few trips...</h3>
                     
     

 
                               <li className='travel-hover color-1'>KOLKATA --->  PATNA</li> 
                               <li className='travel-hover color-1'>KOLKATA --->  PATNA</li> 
                               <li className='travel-hover color-1'>DELHI --->  KANPUR</li> 
                               <li className='travel-hover color-1'>KANPUR --->  RANCHI</li> 

                       </ul>
                       <div class="buttons">

</div>
                     

                     </div>
                     
                  </div>

                  </div>
                  
                </div>

              


           </div>
           <div className='mytabs'>
               {/* <input type="radio" id="about" name="mytabs" checked="checked"></input>
                     
                    <label for='about'>ABOUT</label>
                    <div className='tab'>
                      <p>HJDDDDDDDDDD</p>

               </div>
              <input type="radio" id="timeline" name="mytabs" ></input>
                     
                 <label for='timeline'>TIMELINE</label>
                  <div className='tab'>
                   <p>Americaaaaaaaaaaaaaa</p>
     
              </div> */}

               </div>
                





      </div>
      <div className='container'>
    
           
                 
           <h1>About This</h1>

            <input type="radio" name="slider" checked id="home" checked="checked"/>
            <label for='home'>ABOUT</label>
            < div className='tab'>
            <div className="tab-details">
          
                      <label >User ID </label>
                        <p className='tail'>778399393</p>
                        </div>

                           <div className="col-md-6">
                              <label >Name</label>
                             <p className='tail'>Joginder Sharma</p>
                           </div>

                        <div className="col-md-6">
                          <label >Email</label>
                         <p className='tail'>JoginderSharma123@gmail.com</p>
                         </div>
                         <div className="col-md-6">
                           <label >Contact</label>
                              <p className='tail'>+91 4393333333</p>
                          </div>
            
            </div>
                 <input type="radio" name="slider" id="timeline"/>
                  <label for='timeline' >TIMELINE</label>

            


  </div>


  
            

            
{/* <div className='col-md-8 pl-5 about-info'>
       <div className='tab-content profile-tab' id='myTabContent'>
            <div className='tab-pane fade show active ' id='home' role ="tabpanel" aria-labelledby='home-tab'>
                <div className="row">
                <div className="col-md-6">

                  
                </div>
                <div className="col-md-6">

                <label >User ID </label>
                     </div>
                <div div className="col-md-6">
                    <p>778399393</p>
             </div>
             <div className="col-md-6">

                <label >Name</label>
                     </div>
                <div div className="col-md-6">
                    <p>Joginder Sharma</p>
             </div>
             <div className="col-md-6">

            <label >Name</label>
              </div>
            <div div className="col-md-6">
              <p>JoginderSharma123@gmail.com</p>
              </div>
                </div>
            </div>
       </div>
</div> 



            


        <div className="header">
          {/* <div className="profile-info">

          <div className='profile-img'>
            <img src={driver} alt="Profile"/>
          </div> */}
          
          {/* <div className='about'>
              <div className='quick-info'>
              <h2>Super-Sarathi</h2>
              <div class="ratings">
              
             <i class="fas fa-star" ></i>
             <i class="fas fa-star" ></i>
             <i class="fas fa-star" ></i>
             <i class="fas fa-star" ></i>

              <h5>Ranking:4/50</h5> 
              </div>
              
              </div>
          

             


                  
          <div className="col-md-6">
          
          <label >User ID </label>
          <p className='tail'>778399393</p>
         </div>

                <div className="col-md-6">
               
              <label >Name</label>
            <p className='tail'>Joginder Sharma</p>
            </div>

             <div className="col-md-6">
            
             <label >Email</label>
           
            <p className='tail'>JoginderSharma123@gmail.com</p>
          </div>
          <div className="col-md-6">
         
            <label >Contact</label>
            <p className='tail'>+91 4393333333</p>
            </div>
            
          </div> */}

          

    







    
        {/* </div> */}
        {/* </div> */}
        {/* <div className='header-1'>

       <input className='input-1' type='radio' id='tabfree' name='mytabs' checked='checked'/>

        <label  className="label-1" for='tabfree' >FREE</label>
           <div className='tab'>
             <h2>Free</h2>
             <p>
               Helldocnnd bdhcxxxxxxxxxxxjcjckdc
             </p>
           </div>

           <input type='radio' id='tabsilver' name='mytabs' checked='checked'/>

               <label   className="label-1" for='tabsilver' >Silver</label>
               <div className='tab'>
                 <h2>Silver</h2>
              <p>Helldocnnd bdhcxxxxxxxxxx</p>
              </div>







        </div> */}
    {/* <div class="mytabs">
    <input type="radio" id="tabfree" name="mytabs" checked="checked"/>
    <label for="tabfree">Free</label>
    <div class="tab">
      <h2>Free</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <input type="radio" id="tabsilver" name="mytabs"/>
    <label for="tabsilver">Silver</label>
    <div class="tab">
      <h2>Silver</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

    <input type="radio" id="tabgold" name="mytabs"/>
    <label for="tabgold">Gold</label>
    <div class="tab">
      <h2>Gold</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

  </div> */}


  {/* <div class="wrapper">
    <header>Pure CSS Tabs</header>
    <input type="radio" name="slider" checked id="home"/>
    <input type="radio" name="slider" id="blog"/>
    <input type="radio" name="slider" id="code"/>
    <input type="radio" name="slider" id="help"/>
    <input type="radio" name="slider" id="about"/>
    <nav className='nav-bar'>
      <label for="home" class="home"><i class="fas fa-home"></i>Home</label>
      <label for="blog" class="blog"><i class="fas fa-blog"></i>Blog</label>
      <label for="code" class="code"><i class="fas fa-code"></i>Code</label>
      <label for="help" class="help"><i class="far fa-envelope"></i>Help</label>
      <label for="about" class="about"><i class="far fa-user"></i>About</label>
      <div class="slider"></div>
    </nav>
    <section>
      <div class="content content-1">
        <div class="title">This is a Home content</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur nobis provident dolores molestias quia quisquam laborum, inventore quis, distinctioa, fugit repudiandae delectus sunt ipsam! Odio illo at quia doloremque fugit iops, asperiores? Consectetur esse officia labore voluptatum blanditiis molestias dic voluptas est, minima unde sequi, praesentium dicta suscipit quisquam iure sed, nemo.</p>
      </div>
      <div class="content content-2">
        <div class="title">This is a Blog content</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Possimus doloris nesciunt mollitia culpa sint itaque, vitae praesentium assumenda suscipit fugit doloremque adipisci doloribus, sequi facere itaque cumque accusamus, quam molestias sed provident quibusdam nam deleniti. Autem eaque aut impedit eo nobis quia, eos sequi tempore! Facere ex repellendus, laboriosam perferendise. Enim quis illo harum, exercitationem nam totam fugit omnis natus quam totam, repudiandae dolor laborum! Commodi?</p>
      </div>
      <div class="content content-3">
        <div class="title">This is a Code content</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, debitis nesciunt! Consectetur officiis, libero nobis dolorem pariatur quisquam temporibus. Labore quaerat neque facere itaque laudantium odit veniam consectetur numquam delectus aspernatur, perferendis repellat illo sequi excepturi quos ipsam aliquid est consequuntur.</p>
      </div>
      <div class="content content-4">
        <div class="title">This is a Help content</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit null itaq, odio repellat asperiores vel voluptatem magnam praesentium, eveniet iure ab facere officiis. Quod sequi vel, rem quam provident soluta nihil, eos. Illo oditu omnis cumque praesentium voluptate maxime voluptatibus facilis nulla ipsam quidem mollitia! Veniam, fuga, possimus. Commodi, fugiat aut ut quorioms stu necessitatibus, cumque laborum rem provident tenetur.</p>
      </div>
      <div class="content content-5">
        <div class="title">This is a About content</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officia sequi aliquam. Voluptatem distinctio nemo culpa veritatis nostrum fugit rem adipisci ea ipsam, non veniam ut aspernatur aperiam assumenda quis esse soluta vitae, placeat quasi. Iste dolorum asperiores hic impedit nesciunt atqu, officia magnam commodi iusto aliquid eaque, libero.</p>
      </div>
    </section>
  </div> */}
  <div className='container'>
    
           
                 
           <h1>About This</h1>

            <input type="radio" name="slider" checked id="home" checked="checked"/>
            <label for='home'>ABOUT</label>
            < div className='tab'>
            <div className="tab-details">
          
                      <label >User ID </label>
                        <p className='tail'>778399393</p>
                        </div>

                           <div className="col-md-6">
                              <label >Name</label>
                             <p className='tail'>Joginder Sharma</p>
                           </div>

                        <div className="col-md-6">
                          <label >Email</label>
                         <p className='tail'>JoginderSharma123@gmail.com</p>
                         </div>
                         <div className="col-md-6">
                           <label >Contact</label>
                              <p className='tail'>+91 4393333333</p>
                          </div>
            
            </div>
                 <input type="radio" name="slider" id="timeline"/>
                  <label for='timeline' >TIMELINE</label>

            


  </div>



        </>
    )
}
