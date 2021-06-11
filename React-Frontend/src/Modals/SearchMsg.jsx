import reactDom from 'react-dom';
import './SearchMsg.css';

function SearchMsg() {
    return reactDom.createPortal(
        <div className="msg">
            <h5>Oops! no record matched your search query</h5>
        </div>, document.getElementById('searchmsg')
    )
}

export default SearchMsg;
