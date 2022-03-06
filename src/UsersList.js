import React, {useEffect,useState} from "react";
import HOC from "./HOC";
const Userslist = ({ data }) => { 

     let renderUsers = data.map((user) => {

        return (
            <div key={user.id}>
                <p>{user.name}</p>
                </div>
        );

     });

  
    return (
        <div> 
             {renderUsers}
        </div>
    );
}

const SearchUsers = HOC(Userslist,"users");

export default SearchUsers;