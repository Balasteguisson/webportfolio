export default function TextDisplayer(props) {
    const text = props.text;
    const displayedText = text.map(str => <p key={str.key}>{str.text}</p>);

    return displayedText;
}