class App extends React.Component{
    render() {
        var num = Math.floor(Math.random() * 9) + 1;
        var num2 = Math.floor(Math.random() * 9) + 1;
        var num3 = Math.floor(Math.random() * 9) + 1;
        
        return (
            <div>
                <Slot
                    s1={num}
                    s2={num2}
                    s3={num3}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));