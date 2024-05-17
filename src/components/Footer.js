import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';


export function Footer1() {
    return (
        <footer className="footer">
            {/* <p class="copy-right-notes"> Copyright &copy; 2024 Created by</p>
            <ul className='list-group-horizontal'>
                <li className='list-group-item'><a href="mailto: elsascol@uw.edu">elsascol@uw.edu</a></li>
                <li className='list-group-item'><a href="mailto: cch0223@uw.edu">cch0223@uw.edu</a></li>
                <li className='list-group-item'><a href="mailto: zli2003@uw.edu">zli2003@uw.edu</a></li>
            </ul>

            <ListGroup horizontal>
                <ListGroup.Item>Copyright &copy; 2024 Created by</ListGroup.Item>
                <ListGroup.Item><a href="mailto: elsascol@uw.edu">elsascol@uw.edu</a></ListGroup.Item>
                <ListGroup.Item><a href="mailto: cch0223@uw.edu">cch0223@uw.edu</a></ListGroup.Item>
                <ListGroup.Item><a href="mailto: zli2003@uw.edu">zli2003@uw.edu</a></ListGroup.Item>
            </ListGroup> */}


            <ul className="list-inline text-end">
                <li className="list-inline-item"> Copyright &copy; 2024 Created by</li>
                <li className="list-inline-item"><a href="mailto: elsascol@uw.edu"style={{color: 'white'}}>elsascol@uw.edu</a></li>
                <li className="list-inline-item"><a href="mailto: cch0223@uw.edu" style={{color: 'white'}}>cch0223@uw.edu</a></li>
                <li className="list-inline-item"><a href="mailto: zli2003@uw.edu" style={{color: 'white'}}>zli2003@uw.edu</a></li>
            </ul>
        </footer>);


    function HorizontalExample() {
        return (
            <ListGroup horizontal>
                <ListGroup.Item>This</ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
        );
    }
}