import React from 'react';

const Form = () => {
    return (
        <div className="cta">
            <h2>Exclusive Offers</h2>
                <p>
                    Enter your email below to receive newsletters from Roots Canada 
                    with our new arrivals, exclusive Roots Family offers and more. 
                    You can unsubscribe at any time.
                </p>
                <form>
                    <label htmlFor="email">Enter Your E-mail</label>
                    <input type="email" name='email'/>
                    <input type="submit" value="Sign Up Now"/>
                </form>
            </div>
    )
}

export default Form;