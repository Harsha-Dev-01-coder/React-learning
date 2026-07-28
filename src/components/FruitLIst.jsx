function FruitList() {

    const fruits = [
        "Apple",
        "Mango",
        "Orange"
    ];

    return (

        <>

            {fruits.map((fruit, index) => (

                <h2 key={index}>
                    {fruit}
                </h2>

            ))}

        </>

    );

}

export default FruitList;