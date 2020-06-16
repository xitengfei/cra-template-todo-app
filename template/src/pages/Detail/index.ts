import React from 'react';
import { connect } from 'react-redux';

import {match} from 'react-router';
import {History} from 'history';
import ToDo from '@/models/ToDo';
import {RootState} from '@/store';

import './index.less';

interface OwnProps{
    match: match;
    history: History;
}

interface Props extends OwnProps{
    todo: ToDo;
}

interface State{
    
}

class Detail extends React.Component<Props, State>{
    render(){
        // const {todos}: Props = this.props;
        return null;
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);