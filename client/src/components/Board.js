import React, { PureComponent } from "react";
import { Jumbotron, Table } from "reactstrap";

class Board extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    let boardsArr = []; //this.props.boards;

    return (
      <div>
        {boardsArr.length > 0 ? (
          <div>
            <div className="row justify-content-center">
              <h1 className="title-panel"> example title</h1>
            </div>
            <div className="row justify-content-center">
              <Table className="data-table">
                <tbody>
                  <tr key="" id="row">
                    <td>example</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <Jumbotron className="welcome-panel welcome1">
            <h1 className="display-5">Welcome to Djello!</h1>
            <hr className="my-2" />
            <p>Create a new board to begin.</p>
          </Jumbotron>
        )}
      </div>
    );
  }
}

export default Board;
