import React from 'react'
import styled from 'styled-components'
import { Component } from 'react'

class DataTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataForTable:[
                {
                  id: 1,
                  creditorName: "CBNA",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 2.00,
                  balance: 1363.00
                },
                {
                  id: 2,
                  creditorName: "AMEX",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 2.00,
                  balance: 2763.00
                },
                {
                  id: 3,
                  creditorName: "AMEX",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 2.00,
                  balance: 429.00
                },
                {
                  id: 4,
                  creditorName: "AMEX",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 2.00,
                  balance: 1363.00
                },
                {
                  id: 5,
                  creditorName: "DISCOVERBANK",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 2.00,
                  balance: 2644.00
                },
                {
                  id: 6,
                  creditorName: "CAPITAL ONE",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 4.00,
                  balance: 5464.00
                },
                {
                  id: 7,
                  creditorName: "CAPITAL ONE",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 4.00,
                  balance: 2345.00
                },
                {
                  id: 8,
                  creditorName: "CAPITAL ONE",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 4.00,
                  balance: 836.00
                },
                {
                  id: 9,
                  creditorName: "CBNA",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 3.50,
                  balance: 687.00
                },
                {
                  id: 10,
                  creditorName: "CBNA",
                  firstName: "Suman",
                  lastName: "Tester79",
                  minPaymentPercentage: 3.50,
                  balance: 235.00
                }
              ]
            }
        this.renderData = this.renderData.bind(this)
        }
    renderData(){
        return this.state.dataForTable.map((data, index) => {
            const {creditorName, firstName, lastName, minPaymentPercentage, balance } = data //here i am deconstructuring
        return (
            <tr key={creditorName}>
               <td>{creditorName}</td>
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{minPaymentPercentage}</td>
               <td>{balance}</td>
            </tr>
        )
        })
    }     
    render(){ 
        return(
        <Container>
        <table id='data'>
            <tbody>
                {this.renderData()}
            </tbody>
            </table>
        </Container>
    )}
}

export default DataTable

const Container = styled.div`
display: flex;
justify-content: center;
align-content: center;
margin: 100px;
`