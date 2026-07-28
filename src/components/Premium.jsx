function Premium() {

    const isLoggedIn = true;
    const isPremium = true;
    const marks = 85;

    return (

        <>

            <h2>
                {isLoggedIn ? "Welcome" : "Please Login"}
            </h2>

            {isPremium &&
                <h2>Premium User</h2>
            }

            <h2>
                {marks >= 35 ? "Pass" : "Fail"}
            </h2>

        </>

    );

}

export default Premium;