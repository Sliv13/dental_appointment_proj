import Menu_glowne_pacjent from "./Menu_pacjent";
import Menu_glowne_lekarz from "./Menu_lekarz";

export default function Menu({name}){

if(name==='pacjent'){
    return <Menu_glowne_pacjent>

    </Menu_glowne_pacjent>
}
if(name==='lekarz'){
    return <Menu_glowne_lekarz>

    </Menu_glowne_lekarz>
}

}