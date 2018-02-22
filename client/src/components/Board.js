import React, { PureComponent } from "react";
import { Table } from "reactstrap";
import NewBoard from "./NewBoard";

const Board = props => (
  // constructor(props) {
  //   console.log(props);
  //   super(props);
  //   this.state = {
  //     boards: this.props.boards
  //   };
  // }

  <div>
    {props.boards.length > 0 ? (
      <div>
        <div className="row justify-content-center">
          <h1 className="title-panel">{props.boards[0].title}</h1>
        </div>
        <div className="row justify-content-center">
          <Table className="data-table">
            <tbody>
              <tr key="" id="row">
                <td>lists go here</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    ) : (
      <NewBoard {...props} />
    )}
  </div>
);

export default Board;
