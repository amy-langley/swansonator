import React, { Component, PropTypes } from 'react';

import './styles.scss';
import ResultHead from './resulthead';
import ResultRow from './resultrow';

class ResultGrid extends Component {
    static propTypes = {
        resultSet: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    render() {
        var resultSet = this.props.resultSet;
        return (
            <table>
              <ResultHead resultSet={resultSet.fields} />
              <tbody>
                {resultSet.results.map(function(listValue, idx){
                  return <ResultRow key={idx} fields={resultSet.fields} values={listValue} />
                })}
              </tbody>
            </table>
        );
    }
}

export default ResultGrid;
