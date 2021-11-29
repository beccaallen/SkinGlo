import * as React from "react";


const Home: React.FC<HomeProps> = () => {

    return (

        <main className="container-fluid">
            <div className="row h-75">
                <div className="col-lg-6 bg-primary">
                    <h2>photo 1</h2>               
                    </div>
                <div className="col-lg-6 bg-info">
                    <h2>photo 2</h2>
                </div>
            </div>
        </main>
    )

}

interface HomeProps { }


export default Home;
