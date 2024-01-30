import style from './Header.module.css'
import { Button } from '@mui/material'

const Header = () => {
    return (
        <div className={style.header}>
            <h2>Nombre del Hotel</h2>
            <Button size="medium" variant="outlined" style={{width: 300}}>Hacer reserva</Button>
        </div>
    )
}

export default Header