import React from 'react'
import styled from 'styled-components'
import { Component } from 'react'

class DataTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataForTable:[
                {
                  "id": 1,
                  "creditorName": "CBNA",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "2.00",
                  "balance": "1363.00"
                },
                {
                  "id": 2,
                  "creditorName": "AMEX",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "2.00",
                  "balance": "2763.00"
                },
                {
                  "id": 3,
                  "creditorName": "AMEX",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "2.00",
                  "balance": "429.00"
                },
                {
                  "id": 4,
                  "creditorName": "AMEX",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "2.00",
                  "balance": "1363.00"
                },
                {
                  "id": 5,
                  "creditorName": "DISCOVERBANK",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "2.00",
                  "balance": "2644.00"
                },
                {
                  "id": 6,
                  "creditorName": "CAPITAL ONE",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "4.00",
                  "balance": "5464.00"
                },
                {
                  "id": 7,
                  "creditorName": "CAPITAL ONE",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "4.00",
                  "balance": "2345.00"
                },
                {
                  "id": 8,
                  "creditorName": "CAPITAL ONE",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "4.00",
                  "balance": "836.00"
                },
                {
                  "id": 9,
                  "creditorName": "CBNA",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "3.50",
                  "balance": "687.00"
                },
                {
                  "id": 10,
                  "creditorName": "CBNA",
                  "firstName": "Suman",
                  "lastName": "Tester79",
                  "minPaymentPercentage": "3.50",
                  "balance": "235.00"
                }
              ]
            }
        this.renderData = this.renderData.bind(this)
        this.renderheader = this.renderheader.bind(this)
        this.balanceCounter = this.balanceCounter.bind(this)

        
    }
    renderData(){
        return this.state.dataForTable.map((data, index) => {
            const {"id": id, "creditorName": Creditor, "firstName": FirstName, "lastName": LastName, "minPaymentPercentage": MinPay, "balance": Balance } = data //here i am deconstructuring
        
        return (
            <tr key={id}>
              <input type ='checkbox' /><td>{Creditor}</td>
               <td>{FirstName}</td>
               <td>{LastName}</td>
               <td>{MinPay}</td>
               <td>{Balance}</td>
            </tr>
        )
        })
    }     

    renderheader(){
        let head = Object.keys(this.state.dataForTable[0])
        return head.map((key, index) => {

            switch(key){
                case "id":
                    return <th key={index} className="first"><input type='checkbox' /> </th>; ///select all if clicked
                case "creditorName":
                    return <th key={index}>Creditor</th>;

                case "firstName":
                    return <th key={index}>First Name</th>;

                case "lastName":
                    return <th key={index}>Last Name</th>;
                
                case "minPaymentPercentage":
                    return <th key={index}>Min Pay %</th>;
                
                case "balance":
                    return <th key={index}>Balance</th>;
                    
                default:

            }
        })
    }
    balanceCounter(){
    let counter = 0; 
    this.state.dataForTable.map((elem)=>{
        console.log(elem.balance)
        counter += parseInt(elem.balance)
    })
return counter
    }
    render(){ 
        return(
        <Container>
            <Table>
        <table id='data'>

            <tbody>
                <tr className ='header'>{this.renderheader()}</tr>
                {this.renderData()}
            </tbody>
            <td className='empty'></td>
            <button className ="button1"> Add Debt</button>
            <button className ="button2"> Remove Debt</button>
            
            </table>
            <p className='total'> Total {`$${this.balanceCounter().toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
             </p>
             <div>
             <p className='rowcount'> Total Row Count: {this.state.dataForTable.length} </p>
             
             </div>
            </Table>
            
        </Container>
    )}
}

export default DataTable

const Container = styled.div`
display: flex;
justify-content: center;
align-content: center;
margin: 200px;
flex-direction: column;
`


const Table = styled.div`
// background-color: lightblue;
margin-left: auto;
margin-right: auto;
button { 
    cursor: pointer;
}

.empty{
    border: 0px;
}

.total {
    flex-direction: column;
    // background-color: grey;
word-spacing: 350px;
height: 20px;
width: 100%;
text-align: center;
}

table{
    width 100%;
}

.rowcount {
text-align: left;

}
`

// const Total = styled.div`
// background-color: lightblue;
// word-spacing: 400px;
// height: 20px;
// width: 40%;
// text-align: left;
// `