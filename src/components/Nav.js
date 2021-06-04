import React from 'react'
import styled from 'styled-components'
function Nav() {
    return (
        <Container>
            <Navi><h4>Strategic Financial Solutions Data Table</h4></Navi>
        
        </Container>
    )
}

export default Nav

const Container = styled.div`
display: flex;
min-height: 60px;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: black;
`

const Navi = styled.div`
color: white;
`