import React from 'react'
import './Header.css';
//import PersonIcon from "@mui/icons-material/Person"
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img
            className="header_logo"
            src="https://www.citypng.com/public/uploads/preview/-11595270983sekxed5idc.png"
            alt=""
            />

            <IconButton>
                <ForumIcon ontSize="large" className="header_icon"/>
            </IconButton>

        </div>        
    )
}

export default Header
