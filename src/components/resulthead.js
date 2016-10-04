import React, { Component, PropTypes } from 'react';

import './styles.scss';

class ResultHead extends Component {
    static propTypes = {
        resultSet: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    render() {
        return (
            <thead>
              <tr>
                {this.props.resultSet.map(function(listValue){
                  return <th key={listValue}>{listValue}</th>;
                })}
              </tr>
            </thead>
        );
    }
}

export default ResultHead;
