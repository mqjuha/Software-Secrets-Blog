import './table_comparison.css';

// Example of a data array that
// you might receive from an API
const data = [
    { header: "header1", feature1: 'column 1.1', feature2: "column 1.2" },
    { header: "header2", feature1: 'column 2.1', feature2: "column 2.2" },
]

function Table() {

    console.log(data.length); //2

    //console.log(Object.keys(data[0]).length); //3

    //console.log(Object.keys(data[0])[0]); //header

    const getNameOfFeatures = () => {

        {Object.keys(data[0]).map((item) => {
            return (
                <tr>
                    <th>{item}</th>
                </tr>
            )
        })}
    }

    const getTableBodyAsReactElement = () => {
    
        return (!data) ? null : (
          <tbody>
            {data.map((item) => {

              console.log('item: ', item);

              return (
                <tr>
                  {Object.entries(item).map((field) => {

                    console.log('field: ', field);

                    return <td>{field[1]}</td> // 0 -> keys, 1 -> values
                  })}
                </tr>
              );
            })}
          </tbody>
        );
      }

    return (
        <div className='table-section'>
            <table>
                {getNameOfFeatures()}
                {getTableBodyAsReactElement()}
            </table>
        </div>

      )

}

export default Table;

/*
	{ row1: "row1", row2: 'row2', row3: "row3" },
	{ row1: "row4", row2: 'row5', row3: "row6" },
*/
/*
    ['ööjotain', 'feature1', 'feature2'],
    ['Header 1', 'column 1', 'column 2'],
    ['Header 2', 'column 1', 'column 2'],
*/
/*
    { header: "header", feature1: 'column 1', feature2: "column 2" },
    { header: "header", feature1: 'column 1', feature2: "column 2" },
*/

/*
	return (
		<div className="table-section">
			<table>
				<tr>
                    {
                        data[0].map((feature, index) => (
                            <th>{feature}</th>
                        ))
                    }
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.secondkey}</td>
						</tr>
					)
				})}
			</table>
		</div>
	);
*/

/*
              return (
                <tr>
                  {Object.entries(item).map((field) => {

                    console.log('field: ', field);

                    return <th>{field[0]}</th> // 0 -> keys, 1 -> values
                  })}
                </tr>
              );
*/