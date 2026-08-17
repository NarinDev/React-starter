function PictureToClick() {

    const imageUrl:string = "https://placehold.co/150x150";

    const handleClick = (e:React.MouseEvent<HTMLImageElement>) => {
        e.currentTarget.style.display = "none";
    };

    return (
        <img src={imageUrl} alt="" onClick={(e) => handleClick(e)}/>
    );
}

export default PictureToClick;
