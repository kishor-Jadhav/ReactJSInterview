import React from "react";
import { json } from "react-router-dom";
import FunctionComponent from "./FunctionComponent";
import ChildClass1 from "./ChildClass1";
import { fetchUserDetailService } from "./ClassService";
 
interface ClassMainComponentState {
    count: number;
    apiUserData: any;
    apiUserList: any;
    data: any;
    loading: boolean;  // Add this
    error: string | null;  // Add this
}
class ClassMainComponent extends React.Component<{}, ClassMainComponentState> {
    apiData: any;
    apiUserList: any;
    subscription: any;
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0,
            apiUserData: null,
            apiUserList: null,
            data: null,
            loading: false, // Add loading to initial state
            error: null     // Add error to initial state
        };
    }
    componentDidMount(): void {
        this.setState({ count: this.state.count + 1 })
        this.fetchUserDetail().then((res:any) => {
            console.log(res)
            this.apiData = res;
        })

        this.subscription = fetchUserDetailService(1).subscribe({
            next: (response:any) => {
                console.log("sub data", response.data)
              this.setState({ data: response.data, loading: false });
            },
            error: (err :any) => {
              this.setState({ error: err.message, loading: false });
            },
        });
        console.log('component start...')
    }
    componentWillUnmount(): void {
        console.log('component destrooy...')
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('Pre state', prevState)
        console.log('new state', this.state)
    }

    shouldComponentUpdate(nextProps: {}, nextState: ClassMainComponentState) {
        if(this.apiData){
            return true;
        }
        else{
            return false;
        }
        
         // Allows re-rendering
      }

    fetchUserDetail = ():any => {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json());
    };
    fetchUserList = ():any => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());
    };

    render(): React.ReactNode {

        const handleInc = () => {
            this.setState({ count: this.state.count + 1 })
        }

        const handleUserDetails = () => {
            this.fetchUserDetail().then((res:any) => {
                console.log(res)
                this.setState({ apiUserData: res })

                this.apiData = res;
            })
        }

        const handleUserList = () => {
            this.fetchUserList().then((res:any) => {
                console.log(res)
               this.setState({ apiUserList: res })

                this.apiUserList = res;
            })
        }
        const handleDec = () => {
            this.setState({ count: this.state.count - 1 })
        }
        return (<>
            <h1>{this.state.count}</h1>
            <button onClick={handleInc}>Increment+</button>
            <button onClick={handleDec}>Decrement+</button>

            <button onClick={handleUserDetails}> Get User details</button>
            <button onClick={handleUserList}> Get User List</button>
            API Data :{JSON.stringify(this.apiData)}
            <br></br>
            User Data :{JSON.stringify(this.state?.apiUserData)}
            <br></br>
            User List :{JSON.stringify(this.state?.apiUserList)}
            <FunctionComponent>
             <ChildClass1 countMain ={this.state.count}></ChildClass1>
            </FunctionComponent>

        </>)
    }
}
export default ClassMainComponent