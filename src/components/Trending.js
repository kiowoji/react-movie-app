import Card from "./Card"

function Trending() {
    return <div className="trending">
        <h2 className="title">Trending now</h2>
        <ul>
            <li><Card/></li>
        </ul>
    </div>
}

export default Trending