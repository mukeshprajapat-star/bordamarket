import React ,{useState}from 'react';
import { Menubar } from 'primereact/menubar';
import logo from "./logoE.jpg"
import "./Header.css"
import {InputText} from "primereact/inputtext"
import {Button} from 'primereact/button'
import { useHistory } from 'react-router-dom';
const Header = () => {
    const history=useHistory();
    const[keyword,setKeyword]=useState("");

    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        
        if(keyword.trim()){
            history.push(`/products/${keyword}`)
        }
        else{
            history.push('/products')
        }

    }

    const items = [
        {
            label: 'Home',
            url:"/"
                },
                {
                    label: 'Products',
                    url:"/products"
                },
                {
                    separator: true
                },
                {
                    label: 'Contact',
                    url:"/contact"
                },
        {
            label: 'About',
            url:"/about"
        },
        {
            label: 'Profile',
            url:'/account',
           
        },
        {
            label: 'Cart',
            url:'/cart',

        },
        {
            separator: true
        },
    ];

    const start = <img alt="logo" src={logo}  height="70px"  className="p-mr-2"></img>;
    const end= <div><form  onSubmit={searchSubmitHandler}><InputText  onChange={(e)=>setKeyword(e.target.value)}  placeholder="Search" type="text"/><Button  style={{ marginLeft: "20px", marginRight: "180px"}}>Search</Button></form></div>

    
    return (
        <div>
            <div className="card">
                <Menubar style={{height:"70px"}} model={items} start={start} className='CardItem' end={end}/>
            </div>
        </div>
    );
}

export default Header;
