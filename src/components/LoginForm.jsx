function LoginForm() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Submitted");

    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Name"
            />

            <button>
                Submit
            </button>

        </form>

    );

}

export default LoginForm;