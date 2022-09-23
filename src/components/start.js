const Start = () => {
    return ( 
       <div className="container">

          <div className="how-it-works">
          <h1>How It Works:</h1>
                <div className='how-it-works-div'>
                    <div>
                        <h3>1.Choose recipes</h3>
                        <p>We have a large variety of recipes. Pick as you wish. Or you can also see the instructions for to how to make it yourself.</p>
                    </div>
                    <img src={require('../images/start1.jpg')} alt="" />
                </div>

                <div className='how-it-works-div'>
                    <img src={require('../images/start2.jpg')} alt="" />
                    <div>
                        <h3>2.Recieve your delivery</h3>
                        <p>We'll deliver your delicious meals in no time.</p>
                    </div>
                </div>

                <div className='how-it-works-div'>
                    <div>
                        <h3>3.Moda hou!</h3>
                        <p>Enjoy your meal.</p>
                    </div>
                    <img src={require('../images/start3.jpg')} alt="" />
                </div>

            </div>
       </div>
   );
}
 
export default Start;