import React ,{Fragment,useState}from 'react'
import './Search.css'
import MetaData from '../layout/MetaData';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
const Search = ({history}) => {
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
    return (
        <Fragment>
             <MetaData title="Search a products...ECOMMERCE"/>
            <form className='searchBox' onSubmit={searchSubmitHandler}>
                <InputText 
                 type="text" placeholder="Search a Product..."
                  onChange={(e)=>setKeyword(e.target.value)} 
                  />
                <Button type="submit" value="search" className="p-button-lg">Search</Button>
            </form>
        </Fragment>
    )
}

export default Search
