import React from 'react';


const MainWrapper = props => {
    const { children } = props;


    return  <div id="app" className="container width100">
            <main>
                {children}

            </main>
        </div>
}

export default MainWrapper