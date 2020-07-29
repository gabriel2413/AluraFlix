import React from 'react';
import PageDefault from '../../components/PageDefault';
import './Page404.css';

export default function Page404() {
    return (
        <>
            <PageDefault>
                <div className="Page404">
                    <h1> 404 - Page Not Found </h1>
                    <p> We don't have a dino, but we've got a bird! </p>
                    <iframe
                        src="https://mariosouto.com/flappy-bird-devsoutinho/"
                        title="flappyGame"
                        scrolling="no"
                        style={{
                            width: 340,
                            height: 540,
                            borderWidth: 0,
                        }} />
                </div>
            </PageDefault>
        </>
    )
}
