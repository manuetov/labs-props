export default function User({name, handle}) {
   return (
      <div>
         <span className="user">{name}</span>
         <span className="handle">{handle}</span>
      </div>
   )
}