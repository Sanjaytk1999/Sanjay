import App from "./App";
function ProfileCard({title,handle,img,description}){
    
    return(<div>
        <div className="card">
            <div className="image-card">
                <figure className="image is 1by1">
                    <img src={img} alt="pdo logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div className="title is 4">{title}</div>
                    <div className="subtitle is 6">{handle}</div>
                </div>
            </div>
            <div className="content">
                {description}
            </div>
        </div>
    </div>
    )
}
export default ProfileCard;