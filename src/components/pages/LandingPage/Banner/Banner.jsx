import Classes from "./Banner.module.css";

function Banner(props){    

    return (
        <div className={Classes.banner}>        
            <img src={props.imagePath} className={Classes.image}/>
        </div>
        
    )
}

export default Banner;