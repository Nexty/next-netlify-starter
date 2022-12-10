function Post({ title }) {

    return (
        <div className="post">
            
            <div className="description">{description}</div>
            <div className="text">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Post