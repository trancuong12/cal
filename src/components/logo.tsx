import { Image,Button } from "@mantine/core"
import { IconSearch } from "@tabler/icons"
export default function Logo(){

    return(
        <div style={{display:"flex",justifyContent:"space-between",margin:"1rem"}}>
            <Image width="100%" height="100%" src="https://app.cal.com/calcom-logo-white-word.svg"/>
        </div>
    )
}