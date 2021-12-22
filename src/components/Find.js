import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'


const Find = () => {
    return (
        <div>
            <InputGroup className='mt-3 w-75 m-auto mb-3'>
                <FormControl size='lg' type='search' placeholder='Where are you going?' className='w-25 text-center border-warning border-3'/>
                <FormControl type='date' placeholder='Check-in / Check-out' className='text-center border-warning border-3'/>
                <FormControl placeholder='2 adults / 0 children / 1 room' className='text-center border-warning border-3'/>
                <Button style={{backgroundColor:"#003580", color:"white"}} className='mx-1'>Search</Button>
            </InputGroup>
        </div>
    )
}

export default Find
