import { useParams } from "react-router-dom"

function UserShow() {
  const { id } = useParams();
  return (
    <>
     <div>
      User show page!!! { id }
     </div>
    </>
  )
}

export default UserShow
