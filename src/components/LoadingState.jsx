function LoadingState({ loading }) {
    
    if (loading){
        return <h2>Loading...</h2>;
    }
    return <h2>Content Loaded</h2>
    
}

export default LoadingState;