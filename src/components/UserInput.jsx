function UserInput({ name, setName }) {

    return (
        <div>
            <h2>{name}</h2>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />
        </div>
    );
}

export default UserInput;