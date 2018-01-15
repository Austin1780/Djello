import React, { PureComponent } from "react";
import { Table } from "reactstrap";
import NewBoard from "./NewBoard";

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
          <NewBoard />
        )}
      </div>
    );
  }
}

export default Board;
