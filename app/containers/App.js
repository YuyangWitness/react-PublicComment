/**
 * Created by xingxiao05 on 17/5/9.
 */
import React from 'react'


class App extends React.Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default App