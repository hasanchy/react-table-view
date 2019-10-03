import React, { Component } from 'react';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    componentDidMount () {
        $('#file-input').bind('click', this.fileClicked);
    }
    
    fileClicked = (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    fileChangedHandler = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.props.onFileSelect(this.fileInput.current.files[0]);
    }

    browseFile = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        $('#file-input').click();
    }

    render() {
        return (
            <div>
                <input type="file" className='hide' ref={this.fileInput} id='file-input' onChange={this.fileChangedHandler} name={this.props.name || 'file-input' } accept='.jpg,.jpeg,.png' />
                <div className={this.props.fileClass && this.props.fileClass.fileInput ? this.props.fileClass.fileInput : 'col-sm-10' }>
                    <input type='text' disabled className="form-control file-input-box" 
                    value={this.fileInput.current && this.fileInput.current.files.length ? this.fileInput.current.files[0].name : (this.props.savedFile || '')} />
                    <div className="invalid-feedback error"  />
                </div>
                <div className={this.props.fileClass && this.props.fileClass.browseFile ? `${this.props.fileClass.browseFile} sm-p-t-10` : 'col-sm-2 sm-p-t-10' }>
                    <button className="btn btn-default" onClick={this.browseFile} style={{width: '100%'}}>Browse file</button>
                </div>
            </div>
        )
    }

}

export default FileInput;

