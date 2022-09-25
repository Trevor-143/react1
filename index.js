ReactDOM.render(<h3>Hey, this is the first test.....</h3>, document.getElementById('root'))

ReactDOM.render(<ul>
                    <h4>The List</h4>
                   <li>One</li> 
                   <li>Two</li> 
                   <li>Three</li> 
                   <li>Four</li> 
                </ul>, document.getElementById('root2'))


const root3 = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'This is awesome';
h1.className = 'header';

root3.appendChild(h1);


const element = <h2 className = "header2">Warap with JSX</h2>;
ReactDOM.render(element, document.getElementById('root4'))


const navigation = (
    <nav>
        <h1>Logo</h1>
        <ul>
            <li>Pricing</li>    
            <li>About</li>    
            <li>Contact</li>    
        </ul>    
    </nav>
)

ReactDOM.render(navigation, document.getElementById('root5'))


const root6 = document.getElementById('root6')
const page1 = (
    <main>
        <h1>The beginning</h1>
        <nav>
            <h4>The navigation</h4>
            <li>Something.</li>
            <li>Something.</li>
            <li>Something.</li>
            <li>Something.</li>
        </nav>
        <p>
            This is a small paragraph. I hope its enough for the example.
        </p>
    </main>
)

ReactDOM.render(page1, root6)