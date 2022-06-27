import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function Editors(props) {
  return (
    <div style={{ width: "100%", padding: "8px" }}>
      <CKEditor
        editor={Editor}
        data={props.data}
        onBlur={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  )
}

export default Editors