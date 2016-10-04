import React, { Component, PropTypes } from 'react';

import './styles.scss';

class ResultRow extends Component {
    static propTypes = {
        fields: PropTypes.array.isRequired,
        values: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    render() {
        var values = this.props.values;
        return (
          <tr>
            {this.props.fields.map(function(listValue){
              return <td key={listValue}>{values[listValue]}</td>;
            })}
          </tr>
        );
    }
}

export default ResultRow;
