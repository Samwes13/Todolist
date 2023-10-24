import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Todolist from '../Todolist';

function Menu() {
    const [value, setValue] = useState('Home');

    const handleChange = (event, value) => {
        setValue(value);
        };
        

return (
<div>
    <Tabs value={value} onChange={handleChange}>
    <Tab value="home" label="Home" />
    <Tab value="todolist" label="Todolist" />
    
    </Tabs>
    {value === 'home' && <div>Hello ihminen!</div>}
    {value === 'todolist' && <Todolist />}
    </div>
    
    );
}
export default Menu;