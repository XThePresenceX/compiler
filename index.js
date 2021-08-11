marked.setOptions({ 
    breaks: true
})

const renderer = new marked.Renderer();

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


const App = () =>{

    const[text,setText] = React.useState(placeholder);


    return(
        <>
        <h3 className="text-center pt-5">Markdown Previewer</h3>
        <h6 className="text-center"><a href="http://bhindi.myweb.cs.uwindsor.ca/" target="_blank"><b>by Jenil</b></a></h6>
        <div className="container pt-2">
            <div className="card">
            <h5 className="card-header"><i class="fas fa-code pr-2" style={{backgroundColor:"#4aa3a3"}}></i>Editor</h5>
                <div className="card-body" id="firstEditor">
                    <textarea className="form-control" id="editor" value={text} onChange={e=>setText(e.target.value)}>
                    </textarea>
                </div>
            </div>
        </div>
        <div className="container pt-5">
            <div className="card">
            <h5 className="card-header"><i class="fab fa-free-code-camp pr-2" style={{backgroundColor:"#4aa3a3"}}></i>Previewer</h5>
                <div className="card-body" id="preview">
                    <Preview markdown={text}/>
                </div>
            </div>
        </div>
        </>
    )
}

const Preview = ({markdown}) =>{
    return (
    <div
        dangerouslySetInnerHTML= {{
            __html: marked(markdown, {renderer: renderer})
        }}
        id ="prev">
    </div>
    );
} 

ReactDOM.render(<App/>,document.getElementById('app'));