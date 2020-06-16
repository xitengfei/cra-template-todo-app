import React from 'react';
import { connect } from 'react-redux';
import { NavBar, List } from 'antd-mobile';

import {match} from 'react-router';
import {History} from 'history';
import ToDo from '@/models/ToDo';
import {RootState} from '@/store';

import './index.less';

const Item = List.Item;
const Brief = Item.Brief;

interface OwnProps{
    match: match;
    history: History;
}

interface Props extends OwnProps{
    todos: Array<ToDo>|null;
}

interface State{
    
}

class Home extends React.Component<Props, State>{

    renderItem = (todo: ToDo, index: number) => {
        return (
            <Item
                key={index}
                arrow="horizontal"
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                multipleLine
                onClick={() => {}}
            >
            {todo.task} 
            <Brief>
                <div className="priority-meta text-muted">
                  Priority: {todo.priority}
                  {/* <span><i className="fa fa-chevron-down"></i> Low</span>
                  <span>Normal</span>
                  <span>High <i className="fa fa-chevron-up"></i></span>
                  <span><i className="fa fa-clock-o time-created"></i> Added </span> */}
                </div>
            </Brief>
            </Item>
        )
    }

    renderHeader = () => {
        const {todos}: Props = this.props;

        return (
            <div>
                {todos ? todos.length : 0} Remaining Tasks
            </div>
        )
    }

    render(){
        const {todos}: Props = this.props;
        const list = todos || [];
        
        return(
            <div>
                <NavBar>
                    Simple ToDo List APP By React
                </NavBar>

                <List 
                    renderHeader={this.renderHeader} 
                    className="my-list"
                >
                    {list.map(this.renderItem)}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState, /*ownProps: OwnProps*/) => {
    const {todos} = state.homeStore;

    return {
        todos
    };
}

const mapDispatchToProps = (dispatch: any) => {
    // dispatch(homeActions.fetchToDos());
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);