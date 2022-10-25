class Slot extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        return (
          <div>
            <p id='slots'>{s1} | {s2} | {s3}</p>
            <p id='msg'>{(s1 == s2) && (s2 == s3) ? 'TRIPLE!' : 'LOSER!'}</p>
          </div>  
        );
    }
}