import React, { PureComponent } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../Styles/Auth.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    course: 'web',
}

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            formData: { ...initialState }
        }
    }


    onSubmit = e => {
        e.preventDefault()
    }

    onchangeInput = e => {
        const { name, value } = e.target
        const formData = { ...initialState }

        formData[name] = value

        this.setState({ formData: formData })
    }

    render() {

        const { isSignUp } = this.state

        document.title = `Sign ${isSignUp ? 'up' : 'in'} page`

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/auth/sign-up'>
                            <SignUp
                                onClick={this.clickChangeSign}
                                inputHandler={e => this.onchangeInput(e)}
                                formData={this.state.formData}
                                onSubmit={e => this.onSubmit(e)}
                            />
                        </Route>
                        <Route exact path='/auth/sign-in'>
                            <SignIn onClick={this.clickChangeSign} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Index