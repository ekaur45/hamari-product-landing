import { assetUrl } from "@/old/utils/misc.util";
import { User } from "@/types/user.types";

export default function ProfileImage({user}:{user:User}){
    return(<>
    <div className="w-10 h-10 rounded-full overflow-hidden border border-5 border-[var(--teal-l)]">
        {user.details.profileImage ? <img src={assetUrl(user.details.profileImage)}/>:<span>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>}
    </div>
    </>)
}