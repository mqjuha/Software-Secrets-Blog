import './table_comparison.css';
import {Link} from 'react-router-dom';

// Example of a data array that we might receive from an API
const test_data = [
    { navigation: '/feedback', header: "header1", feature1: 'column 1.1', feature2: "column 1.2" },
    { navigation: 'https://medium.com/@bfgmartin/what-is-a-product-manager-ce0efdcf114c', header: "header2", feature1: 'column 2.1', feature2: "column 2.2" },
    { header: "header1", feature1: 'column 3.1', feature2: "column 3.2" },
]

function Table() {

    //console.log(data.length); //2

    //console.log(Object.keys(data[0])); // ['header', 'feature1', 'feature2']

    //console.log(Object.keys(data[0]).length); //3

    //console.log(Object.keys(test_data[0])[0]); //header

    const getTableHeaders = () => {

        // Headers of the table are taken from the key
        var features = Object.keys(test_data[0]);

        return (
          <tr>
            {
              features.map((item) => {

                if ( item !== 'navigation' ) {
                  return <th className='th-row'>{item}</th>
                }

              })
            }
          </tr>
        )
    }

    const getTableBody = () => {

      // Link of field
      let navigationPage = '';
    
        return (!test_data) ? null : (
          <tbody>
            {test_data.map((item) => {

              return (
                <tr>
                  {Object.entries(item).map((field) => {

                    if ( field[0] === 'navigation' ) {
                      navigationPage = field[1];
                    }

                    else if ( field[0] === 'header' ) {

                      // Let's check if the header is a link
                      if ( navigationPage !== '' ) {

                        return <th className='th-column'>
                            <Link 
                              className='th-link'
                              to={navigationPage}
                              >{field[1]}</Link>
                          </th>

                      }
                      else {
                        return <th className='th-column'>{field[1]}</th>
                      }

                    }

                    else {
                      navigationPage = '';
                      return <td>{field[1]}</td> // 0 -> keys, 1 -> values
                    }
                    
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
                {getTableHeaders()}
                {getTableBody()}
            </table>
        </div>

      )

}

export default Table;