export default function ProfileImage({image}){
   // console.log(props);
   return(
      <img
        src={image}
        className="profile"
        alt="profile"
      />
   )
}
