const Plans = () => {

    const key = 'c4ae699af1b04d06840dc3d688d40007'
        
/*
    fetch(`https://api.spoonacular.com/recipes/random?number=1&tags=chinese&apiKey=${key}`)
    .then(res=> res.json())
    .then(data=> console.log(data))
*/
    return ( 
        <div className="plans">
            <div className="container">
                <h2>Customize However You want</h2>
            <div className="customize">
                <div className="categories">
                    <h3>Select a category</h3>
                        <div>
                            <div className="category"></div>
                            <div className="category"></div>
                            <div className="category"></div>
                            <div className="category"></div>
                            <div className="category"></div>
                        </div>
                </div>
                <div className="total">
                    <div className="people">

                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Plans;